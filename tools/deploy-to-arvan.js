#!/usr/bin/env node
/*
 * یک‌دستوریِ انتشار سایت روی صندوقچه‌ی ArvanCloud (Object Storage).
 * Publish the site to the ArvanCloud Object Storage bucket that is the CDN origin.
 *
 *   node tools/deploy-to-arvan.js            نمایش آنچه تغییر کرده (چیزی ارسال نمی‌شود) / show what would change
 *   node tools/deploy-to-arvan.js --yes      ارسال فایل‌های تغییرکرده / upload what changed
 *   node tools/deploy-to-arvan.js --yes --delete   فایل‌هایی که دیگر در پروژه نیستند را هم از صندوقچه پاک کن
 *   node tools/deploy-to-arvan.js --yes --all      همه‌ی فایل‌ها را دوباره بفرست
 *
 * کلیدها (Access Key / Secret Key از «مدیریت دسترسی» پنل آروان) هرگز داخل پروژه نمی‌روند. یکی از این دو راه:
 *   1) فایل  %USERPROFILE%\.arvan-deploy.json  با این محتوا:  { "accessKey": "...", "secretKey": "..." }
 *   2) متغیرهای محیطی ARVAN_ACCESS_KEY و ARVAN_SECRET_KEY
 *
 * فقط فایل‌های لازمِ سایت می‌روند (index.html، robots.txt، sitemap.xml و پوشه‌ی assets به‌جز scss) و فقط آن‌هایی که با نسخه‌ی صندوقچه فرق دارند.
 * فایل‌های متنی همیشه با سطر جدید LF فرستاده می‌شوند (همان چیزی که git نگه می‌دارد؛ ویندوز CRLF می‌گذارد).
 * بعد از ارسال، آدرس‌هایی که باید در پنل آروان (CDN ← Caching ← پاک‌کردن گزینشی) پاک شوند چاپ می‌شود.
 *
 * بدون هیچ پکیج اضافه؛ فقط Node 18 یا بالاتر.
 */
'use strict';

const fs = require('fs');
const os = require('os');
const path = require('path');
const crypto = require('crypto');
const { execFileSync } = require('child_process');

// ---------- تنظیمات این سایت ----------
const DEFAULTS = {
  bucket: 'alirezaakhoondi-web',
  endpointHost: 's3.ir-central1.arvanstorage.ir', // آدرس صندوقچه: <bucket>.<endpointHost>
  region: 'us-east-1',                            // سرور آروان (Ceph) ناحیه‌ی امضا را بررسی نمی‌کند؛ فقط باید در امضا و درخواست یکی باشد
  siteUrl: 'https://alirezaakhoondi.ir',
  include: ['index.html', 'robots.txt', 'sitemap.xml', 'assets/'],
  exclude: ['assets/scss/']
};

const TEXT_EXT = new Set(['.html', '.css', '.js', '.txt', '.xml', '.svg', '.json', '.webmanifest', '.map']);
const MIME = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json', '.webmanifest': 'application/manifest+json', '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
  '.webp': 'image/webp', '.gif': 'image/gif', '.ico': 'image/x-icon', '.woff': 'font/woff', '.woff2': 'font/woff2',
  '.ttf': 'font/ttf', '.mp4': 'video/mp4', '.pdf': 'application/pdf'
};

// ---------- امضای AWS Signature V4 (S3) ----------
const sha256hex = data => crypto.createHash('sha256').update(data).digest('hex');
const md5hex = data => crypto.createHash('md5').update(data).digest('hex');
const hmac = (key, data) => crypto.createHmac('sha256', key).update(data).digest();

// همه‌ی کاراکترها به‌جز A-Z a-z 0-9 - _ . ~ کدگذاری می‌شوند؛ «/» در مسیر می‌ماند (S3 مسیر را دوبار کدگذاری نمی‌کند)
const encodeRfc3986 = s => encodeURIComponent(s).replace(/[!'()*]/g, c => '%' + c.charCodeAt(0).toString(16).toUpperCase());
const encodePath = p => p.split('/').map(encodeRfc3986).join('/');

function amzDate(d = new Date()) {
  return d.toISOString().replace(/[:-]|\.\d{3}/g, '');
}

/** @returns {{authorization:string, canonicalRequest:string, signature:string}} */
function signV4({ method, host, path: urlPath, query = '', headers = {}, payloadHash, accessKey, secretKey, region, service = 's3', date }) {
  const dt = date || amzDate();
  const day = dt.slice(0, 8);
  const all = { ...headers, host, 'x-amz-date': dt, 'x-amz-content-sha256': payloadHash };
  const names = Object.keys(all).map(k => k.toLowerCase()).sort();
  const lower = {}; Object.entries(all).forEach(([k, v]) => { lower[k.toLowerCase()] = String(v).trim().replace(/\s+/g, ' '); });
  const canonicalHeaders = names.map(n => `${n}:${lower[n]}\n`).join('');
  const signedHeaders = names.join(';');
  const canonicalQuery = query ? query.split('&').filter(Boolean).map(kv => { const [k, v = ''] = kv.split('='); return [k, v]; }).sort((a, b) => (a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : a[1] < b[1] ? -1 : 1)).map(([k, v]) => `${k}=${v}`).join('&') : '';
  const canonicalRequest = [method, urlPath, canonicalQuery, canonicalHeaders, signedHeaders, payloadHash].join('\n');
  const scope = `${day}/${region}/${service}/aws4_request`;
  const stringToSign = ['AWS4-HMAC-SHA256', dt, scope, sha256hex(canonicalRequest)].join('\n');
  const kDate = hmac('AWS4' + secretKey, day);
  const signingKey = hmac(hmac(hmac(kDate, region), service), 'aws4_request');
  const signature = crypto.createHmac('sha256', signingKey).update(stringToSign).digest('hex');
  return {
    authorization: `AWS4-HMAC-SHA256 Credential=${accessKey}/${scope}, SignedHeaders=${signedHeaders}, Signature=${signature}`,
    canonicalRequest, signature, amzDate: dt
  };
}

// ---------- پیکربندی و کلیدها ----------
function loadConfig() {
  const cfg = { ...DEFAULTS };
  const file = path.join(os.homedir(), '.arvan-deploy.json');
  let fromFile = {};
  if (fs.existsSync(file)) {
    try { fromFile = JSON.parse(fs.readFileSync(file, 'utf8')); } catch (e) { throw new Error(`فایل ${file} JSON معتبر نیست: ${e.message}`); }
  }
  cfg.accessKey = process.env.ARVAN_ACCESS_KEY || fromFile.accessKey || '';
  cfg.secretKey = process.env.ARVAN_SECRET_KEY || fromFile.secretKey || '';
  for (const k of ['bucket', 'endpointHost', 'region', 'siteUrl']) if (fromFile[k]) cfg[k] = fromFile[k];
  // فقط برای آزمایش با سرور محلی
  cfg.endpointOverride = process.env.ARVAN_TEST_ENDPOINT || '';
  cfg.configFile = file;
  return cfg;
}

// ---------- S3 ----------
function makeClient(cfg) {
  const pathStyle = !!cfg.endpointOverride;
  const base = cfg.endpointOverride ? new URL(cfg.endpointOverride) : null;
  const host = base ? base.host : `${cfg.bucket}.${cfg.endpointHost}`;
  const origin = base ? base.origin : `https://${host}`;
  const keyPath = key => (pathStyle ? `/${cfg.bucket}/` : '/') + encodePath(key);
  const rootPath = pathStyle ? `/${cfg.bucket}/` : '/';

  async function request(method, urlPath, { query = '', headers = {}, body = null, sign = true } = {}) {
    const payload = body || Buffer.alloc(0);
    const payloadHash = sha256hex(payload);
    const h = { ...headers };
    if (sign) {
      const s = signV4({ method, host, path: urlPath, query, headers, payloadHash, accessKey: cfg.accessKey, secretKey: cfg.secretKey, region: cfg.region });
      h['x-amz-date'] = s.amzDate; h['x-amz-content-sha256'] = payloadHash; h.authorization = s.authorization;
    }
    const url = origin + urlPath + (query ? '?' + query : '');
    const res = await fetch(url, { method, headers: h, body: method === 'PUT' ? payload : undefined });
    return res;
  }

  return {
    host, origin,
    publicUrl: key => origin + keyPath(key),
    async list() {
      const out = new Map(); let token = '';
      for (;;) {
        const query = 'list-type=2' + (token ? '&continuation-token=' + encodeRfc3986(token) : '');
        const res = await request('GET', rootPath, { query });
        const text = await res.text();
        if (!res.ok) throw new Error(`فهرست صندوقچه ناموفق بود (${res.status}): ${text.slice(0, 200)}`);
        for (const m of text.matchAll(/<Contents>([\s\S]*?)<\/Contents>/g)) {
          const key = /<Key>([\s\S]*?)<\/Key>/.exec(m[1])[1].replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&apos;/g, "'");
          const etag = (/<ETag>([\s\S]*?)<\/ETag>/.exec(m[1]) || [, ''])[1].replace(/&quot;/g, '').replace(/"/g, '');
          const size = +(/<Size>(\d+)<\/Size>/.exec(m[1]) || [, 0])[1];
          out.set(key, { etag, size });
        }
        const next = /<NextContinuationToken>([\s\S]*?)<\/NextContinuationToken>/.exec(text);
        if (/<IsTruncated>true<\/IsTruncated>/.test(text) && next) token = next[1]; else break;
      }
      return out;
    },
    // بدون کلید (خواندن عمومی): برای حالت «فقط نمایش تغییرات»
    async headPublic(key) {
      const res = await fetch(origin + keyPath(key), { method: 'HEAD', headers: { 'accept-encoding': 'identity' } });
      if (res.status === 404 || res.status === 403) return null;
      if (!res.ok) throw new Error(`HEAD ${key} → ${res.status}`);
      // آروان برای فایل‌های فشرده‌پذیر ETag را به شکل W/"..." می‌دهد و Content-Length را حذف می‌کند؛ ETag همان MD5 است
      const etag = (res.headers.get('etag') || '').replace(/^W\//, '').replace(/"/g, '');
      const len = res.headers.get('content-length');
      return { etag, size: len === null ? null : +len };
    },
    async put(key, body, contentType) {
      const res = await request('PUT', keyPath(key), { headers: { 'content-type': contentType, 'x-amz-acl': 'public-read' }, body });
      if (!res.ok) throw new Error(`ارسال ${key} ناموفق بود (${res.status}): ${(await res.text()).slice(0, 200)}`);
      return (res.headers.get('etag') || '').replace(/"/g, '');
    },
    async del(key) {
      const res = await request('DELETE', keyPath(key));
      if (!res.ok && res.status !== 204) throw new Error(`حذف ${key} ناموفق بود (${res.status})`);
    }
  };
}

// ---------- فایل‌های پروژه ----------
function projectFiles(cfg, root) {
  let listed;
  try { listed = execFileSync('git', ['ls-files', '-z'], { cwd: root, maxBuffer: 1 << 26 }).toString('utf8').split('\0').filter(Boolean); }
  catch (e) { throw new Error('git پیدا نشد یا این پوشه ریپو نیست: ' + e.message); }
  const wanted = listed.filter(f => cfg.include.some(i => (i.endsWith('/') ? f.startsWith(i) : f === i)) && !cfg.exclude.some(x => f.startsWith(x)));
  return wanted.sort().map(key => {
    const ext = path.extname(key).toLowerCase();
    let body = fs.readFileSync(path.join(root, key));
    if (TEXT_EXT.has(ext) && body.includes(13)) body = Buffer.from(body.toString('utf8').replace(/\r\n/g, '\n'), 'utf8');
    return { key, body, md5: md5hex(body), size: body.length, type: MIME[ext] || 'application/octet-stream' };
  });
}

const fmtSize = n => (n >= 1048576 ? (n / 1048576).toFixed(1) + ' MB' : n >= 1024 ? (n / 1024).toFixed(1) + ' KB' : n + ' B');

function sameAsRemote(file, remote) {
  if (!remote) return false;
  if (remote.size !== null && remote.size !== undefined && remote.size !== file.size) return false;
  if (remote.etag.includes('-')) return true; // ارسال چندبخشی (مثلاً از پنل): ETag مجموع MD5 نیست؛ فقط حجم را می‌سنجیم
  return remote.etag === file.md5;
}

async function main() {
  const args = new Set(process.argv.slice(2));
  if (args.has('--help') || args.has('-h')) { console.log(fs.readFileSync(__filename, 'utf8').split('*/')[0].replace(/^\/\*\n?/, '')); return; }
  const upload = args.has('--yes'), del = args.has('--delete'), all = args.has('--all');
  const root = path.resolve(__dirname, '..');
  const cfg = loadConfig();
  const hasKeys = !!(cfg.accessKey && cfg.secretKey);
  if (upload && !hasKeys) {
    throw new Error(`کلیدی پیدا نشد. فایل ${cfg.configFile} را با این محتوا بسازید (و آن را به git اضافه نکنید):\n  { "accessKey": "...", "secretKey": "..." }\nیا متغیرهای ARVAN_ACCESS_KEY و ARVAN_SECRET_KEY را بگذارید.`);
  }

  const client = makeClient(cfg);
  const files = projectFiles(cfg, root);
  console.log(`صندوقچه: ${cfg.bucket}   (${client.origin})`);
  console.log(`فایل‌های سایت در پروژه: ${files.length}`);

  // وضعیت صندوقچه
  let remote;
  if (hasKeys) { remote = await client.list(); console.log(`فایل‌های فعلی صندوقچه: ${remote.size}`); }
  else {
    console.log('کلید پیدا نشد؛ وضعیت صندوقچه با خواندن عمومی سنجیده می‌شود (فقط نمایش، ارسال ممکن نیست).');
    remote = new Map();
    let i = 0;
    for (const f of files) { const r = await client.headPublic(f.key); if (r) remote.set(f.key, r); if (++i % 20 === 0) process.stdout.write('.'); }
    process.stdout.write('\n');
  }

  const changed = files.filter(f => all || !sameAsRemote(f, remote.get(f.key)));
  const localKeys = new Set(files.map(f => f.key));
  const extra = [...remote.keys()].filter(k => !localKeys.has(k)).sort();

  console.log(`\nتغییرکرده یا جدید: ${changed.length} فایل`);
  changed.forEach(f => console.log(`  ${remote.has(f.key) ? '~' : '+'} ${f.key}  (${fmtSize(f.size)})`));
  if (extra.length) { console.log(`\nدر صندوقچه هست ولی در پروژه نیست: ${extra.length} فایل${del ? ' (حذف می‌شود)' : ' (با --delete حذف می‌شود)'}`); extra.forEach(k => console.log('  - ' + k)); }

  // یادآوری: فایل‌های ردیابی‌شده‌ای که هنوز commit نشده‌اند
  try {
    const dirty = execFileSync('git', ['status', '--porcelain', '--', ...DEFAULTS.include.map(i => i.replace(/\/$/, ''))], { cwd: root }).toString().trim();
    if (dirty) console.log('\nتوجه: تغییرهای commitنشده هم ارسال می‌شوند (نسخه‌ی روی دیسک):\n' + dirty.split('\n').map(l => '  ' + l).join('\n'));
  } catch (e) { /* مهم نیست */ }

  if (!upload) { console.log(`\nچیزی ارسال نشد. برای ارسال: node tools/deploy-to-arvan.js --yes${extra.length ? ' [--delete]' : ''}`); return; }
  if (!changed.length && !(del && extra.length)) { console.log('\nصندوقچه به‌روز است؛ کاری لازم نیست.'); return; }

  console.log('\nدر حال ارسال...');
  let ok = 0, failed = 0; const done = [];
  for (const f of changed) {
    try {
      const etag = await client.put(f.key, f.body, f.type);
      if (etag && !etag.includes('-') && etag !== f.md5) throw new Error(`ETag برگشتی (${etag}) با فایل محلی (${f.md5}) نمی‌خواند`);
      console.log(`  ✓ ${f.key}`); ok++; done.push(f);
    } catch (e) { console.log(`  ✗ ${f.key}: ${e.message}`); failed++; }
  }
  if (del) for (const k of extra) { try { await client.del(k); console.log(`  ✓ حذف شد: ${k}`); ok++; } catch (e) { console.log(`  ✗ ${e.message}`); failed++; } }

  console.log(`\nانجام شد: ${ok} موفق، ${failed} ناموفق.`);
  if (done.length) {
    const urls = done.map(f => (f.key === 'index.html' ? [cfg.siteUrl + '/', cfg.siteUrl + '/index.html'] : [cfg.siteUrl + '/' + f.key.split('/').map(encodeRfc3986).join('/')])).flat();
    console.log('\nحالا در پنل آروان: CDN ← دامنه ← Caching ← «پاک‌کردن گزینشی»، این آدرس‌ها را بنویسید (پاک‌سازی همه را نزنید):');
    urls.forEach(u => console.log('  ' + u));
  }
  if (failed) process.exitCode = 1;
}

if (require.main === module) {
  main().catch(e => { console.error('\nخطا: ' + e.message); process.exit(1); });
}

module.exports = { signV4, encodePath, sameAsRemote, projectFiles };
