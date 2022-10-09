const l = [
  "/_app/immutable/start-595a1e7e.js",
  "/_app/immutable/components/pages/_layout.svelte-f4a5f98d.js",
  "/_app/immutable/assets/+layout-d98065b2.css",
  "/_app/immutable/components/error.svelte-e7f76e12.js",
  "/_app/immutable/components/pages/_page.svelte-fd47ee3d.js",
  "/_app/immutable/assets/+page-a66b74a8.css",
  "/_app/immutable/components/pages/about/_page.svelte-01ae6795.js",
  "/_app/immutable/components/pages/links/_page.svelte-500c2047.js",
  "/_app/immutable/components/pages/manual/_page.svelte-e9f9c580.js",
  "/_app/immutable/components/pages/metronome/_page.svelte-4a48a752.js",
  "/_app/immutable/assets/+page-f49bac0e.css",
  "/_app/immutable/components/pages/terms/_page.svelte-de0958ef.js",
  "/_app/immutable/components/pages/tone_generator/_page.svelte-b4cd9671.js",
  "/_app/immutable/assets/+page-01ff3ec3.css",
  "/_app/immutable/chunks/singletons-9c55d055.js",
  "/_app/immutable/chunks/index-e0c17b50.js",
  "/_app/immutable/chunks/index-2ad6ddc9.js",
  "/_app/immutable/chunks/_commonjsHelpers-094ef602.js",
  "/_app/immutable/chunks/Link-01a03139.js",
  "/_app/immutable/chunks/Icon-d13d2426.js",
  "/_app/immutable/chunks/stores-8cb50fb1.js",
  "/_app/immutable/chunks/H1-c83be74e.js",
  "/_app/immutable/chunks/H2-a4d31535.js",
  "/_app/immutable/chunks/P-e65f51ab.js",
  "/_app/immutable/chunks/analyticPopularTunings-caa77213.js",
  "/_app/immutable/chunks/values-45aa13e2.js",
  "/_app/immutable/assets/values-3b636b73.css",
  "/_app/immutable/chunks/0-d6f6dc06.js",
  "/_app/immutable/chunks/1-79bd61e9.js",
  "/_app/immutable/chunks/2-2168a61b.js",
  "/_app/immutable/chunks/3-f8889be3.js",
  "/_app/immutable/chunks/4-ec0db6ac.js",
  "/_app/immutable/chunks/5-05928c97.js",
  "/_app/immutable/chunks/6-5d06a54c.js",
  "/_app/immutable/chunks/7-701b8420.js",
  "/_app/immutable/chunks/8-f7f79f1b.js"
], u = [
  "/android-chrome-192x192.png",
  "/android-chrome-512x512.png",
  "/apple-touch-icon.png",
  "/browserconfig.xml",
  "/favicon-16x16.png",
  "/favicon-32x32.png",
  "/favicon.ico",
  "/favicon.png",
  "/mstile-150x150.png",
  "/site.webmanifest"
], p = "1665341943759", t = self, m = `cache${p}`, i = l.concat(u), h = new Set(i);
t.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(m).then((a) => a.addAll(i)).then(() => {
      t.skipWaiting();
    })
  );
});
t.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then(async (a) => {
      for (const s of a)
        s !== m && await caches.delete(s);
      t.clients.claim();
    })
  );
});
async function b(e) {
  const a = await caches.open(`offline${p}`);
  try {
    const s = await fetch(e);
    return a.put(e, s.clone()), s;
  } catch (s) {
    const c = await a.match(e);
    if (c)
      return c;
    throw s;
  }
}
t.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET" || e.request.headers.has("range"))
    return;
  const a = new URL(e.request.url), s = a.protocol.startsWith("http"), c = a.hostname === self.location.hostname && a.port !== self.location.port, n = a.host === self.location.host && h.has(a.pathname), o = e.request.cache === "only-if-cached" && !n;
  s && !c && !o && e.respondWith(
    (async () => n && await caches.match(e.request) || b(e.request))()
  );
});
