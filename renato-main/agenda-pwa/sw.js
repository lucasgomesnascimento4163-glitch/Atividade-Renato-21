const Cache_name = "agenda-v1"
const arquivos = [
"./",
"./index.html",
"./style.css",
"./app.js",
"./icon-192x192.png"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(Cache_name)
            .then(cache => {
                return cache.addAll(arquivos);
            })
    );
});

self.addEventListener("activate", event => {
    console.log("Service Worker ativado");
});
self.addEventListener("fetch", event => {
    console.log("Requisição:", event.request.url)
});
self.addEventListener("fetch", (event) => {
    if (event.request.url.endsWith("/teste-sw")) {
        event.respondWith(new Response("Resposta criada pelo Service Worker!"));
        return;
    }
});


