self.addEventListener("install", e => {
        caches.open("static").then(cache => {
            return cache.addAll(["./", "./master.css", "./inputs.js", "./index.js", "./index.html", "./images - 2024-01-24T142142.756.jpeg", "./FxPbyZGXwAEpd0C.jpg", "./icon192.png", "./icon512.png", "./manifest.json"])
        })
});

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
});
