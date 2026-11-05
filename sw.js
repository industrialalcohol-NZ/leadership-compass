'use strict';
const CACHE='leadwell-offline-v1';
const FILES=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./apple-touch-icon.png'];
self.addEventListener('install',e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith('leadwell-offline-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',e=>{
  const req=e.request;
  if(req.method!=='GET'||new URL(req.url).origin!==self.location.origin)return;
  e.respondWith(caches.match(req).then(cached=>cached||fetch(req).then(res=>{
    if(res.ok&&new URL(req.url).pathname.startsWith(new URL(self.registration.scope).pathname)){
      const copy=res.clone();caches.open(CACHE).then(c=>c.put(req,copy)).catch(()=>{});
    }
    return res;
  })).catch(()=>caches.match('./index.html')));
});
