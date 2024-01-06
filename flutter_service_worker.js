'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/config": "c7aa81b72cb13c301886bce3abe97831",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "2c35f3025fe697c55c58a97c71ae574a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/objects/0b/996c4e3638f84295310025b5ce5f240e7fce2a": "6566b33dc7bb12ae29c64ed6113ec21a",
".git/objects/0b/a02120416988026a7be303acc69c92d0390752": "a6f943b118d8f60eabbf240829e9b12f",
".git/objects/16/c18f26f6fc408112ebf99d7788ca442f81188e": "92300d9dc8dd111a4c36eb74495501f2",
".git/objects/29/a4a851ceeb79908f008407969cb59a40e22f0e": "61ae33f197165c9c53369e8a8ee7c746",
".git/objects/39/a17c87d70e95bbf953b813b4195c40babe2ecb": "ea57041db59107030d7dae7000f0904b",
".git/objects/3b/6ed11f30a1b110c3196b960bcfcb084fb9f34e": "95bcdc396c263db334341f38066280e6",
".git/objects/41/d0dbb68e72b5c97056d597d07fe4e3fdccdb70": "ea2d806672f019f24beb2b275d0de714",
".git/objects/68/7a9ab6bb41fdbcc22fac53839f49ed6c4df941": "0070759d805d3052d681bd01d6f52bf4",
".git/objects/7b/d0aa7eed562c2243e82b5e5022812453b0718c": "efb25666510a1e5b2c84a7ce94667fba",
".git/objects/89/28c6920b849a1f42019dfcaf92644a941818ec": "1f1c953286f7cf1c7c417a2b32f5d37d",
".git/objects/89/60a8fd43b90e20b602065206bd249b1a756219": "62b15f6d1ce3b144793e0b7682ee9f66",
".git/objects/8d/8d329c62cd7829d8717128e196ef101940a906": "635c47f7dc37df7bf8061eecfe142a80",
".git/objects/bf/4a458e7d60de867d9db1671eea388412dee0ca": "b9641f126f71f0745bfc8bdbda1b6134",
".git/objects/d5/cf29abdb09c24a656f6aa575c3b02f489d8c9f": "7aab2e2e0f346e0df1a62139a4d4fcce",
".git/objects/fd/8397b4e9fb9d989bcdf40e4a0292f5bd159301": "a6b36c9bacf3c811e5aba74f4fbc5a6c",
"assets/AssetManifest.bin": "51c70a5b747aa52b6baeba3c7c9cdd34",
"assets/AssetManifest.json": "2598c3e56e898a9b9ec85e48fb264ed9",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/icons/dev.png": "136350fd9f00dc8d1dd1514e40b9f9cd",
"assets/assets/icons/developer.png": "6576f0932f8dc70413579a59715c184b",
"assets/assets/icons/done.png": "d3786409b1df621a0b55e61d92430590",
"assets/assets/icons/facebook.png": "cb055867df3c7b03ef1135f77d1a9411",
"assets/assets/icons/github.png": "e6b2daf427b81c388625ffee75f2acf4",
"assets/assets/icons/hashnode.png": "5830176711a7028847bb9ef5fba9b39b",
"assets/assets/icons/instagram.png": "78064309e7314e8399f3f83d715aecc7",
"assets/assets/icons/linkedin.png": "1816e5c1168ca75e4e824ed21c4f002a",
"assets/assets/icons/student.png": "e9e5874f03b649f3101e7458f3b7acdf",
"assets/assets/icons/telegram.png": "c89ff009e3e05233e29b53baea4b57de",
"assets/assets/icons/twitter.png": "632f6320a7e3538439ffafd9ee8a03cd",
"assets/assets/icons/volunteer.png": "7c2b0e4e0cd150fd439e01cd60da1261",
"assets/assets/icons/youtube.png": "92d7341ea8fd5c88350cbd570a145f43",
"assets/assets/images/adh.png": "de160a1d35a114a546f6908efb92debd",
"assets/assets/images/animo.png": "c5e2251fec9c44dee4f7c1881482c369",
"assets/assets/images/ddstechvira.png": "fcf3e8991ab622e53213510004438012",
"assets/assets/images/dileepabandara_dev.png": "8e0f156eb3246cc643cdde0e048eefd8",
"assets/assets/images/drAdd.png": "af5e106e4e3f91a05ac2cd03de7a3e1a",
"assets/assets/images/flutterscope.jpg": "6e6ac7afa9e82b1066c333b672d2e52b",
"assets/assets/images/flutterscope.png": "e4d50de77f5aae73b3920a05328e1a04",
"assets/assets/images/github.png": "bada3b2dca0911637f07d961cd7da5d5",
"assets/assets/images/khotwa.png": "a3ff3efce266773cf16214217a8c3c43",
"assets/assets/images/logo.png": "8e0f156eb3246cc643cdde0e048eefd8",
"assets/assets/images/mlsa.png": "ac77090e37e75814439d7134e6f38d28",
"assets/assets/images/mms.png": "5842a38c90162e9ce1488cf65080313a",
"assets/assets/images/nibm.png": "b0842646385fb6105a447c069b668579",
"assets/assets/images/sharikCar.png": "bbb8ee119ecd6a4deec57e6e56512a00",
"assets/FontManifest.json": "d5c53906b6d86d304b23aa61eec71815",
"assets/fonts/MaterialIcons-Regular.otf": "057071262697e945e35c87ba124272f4",
"assets/NOTICES": "23113a0980d234cffc69dd30cc613e8f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "19d8b35640d13140fe4e6f3b8d450f04",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "1165572f59d51e963a5bf9bdda61e39b",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/android-chrome-192x192.png": "83938eab55fab01466e0ed6c7ca530b3",
"icons/android-chrome-512x512.png": "72a4a23fd7e5a38f8e3bf4296c5c0b59",
"icons/apple-touch-icon.png": "119461687cf0c83beab4d12c17039f64",
"icons/favicon-16x16.png": "fa89dbc732ec6d07a342f875dc81b733",
"icons/favicon-32x32.png": "426902d74a05f10d8b76b765b0957b06",
"icons/favicon.ico": "af77cb51d2d8a13a6f49cab860610292",
"icons/icon-192-maskable.png": "3835c97708e1788952d43e6a2a081da2",
"icons/icon-192.png": "0acd9f9c92e61e45e7474f900c54efad",
"icons/icon-512-maskable.png": "c1ef942cdfca19bcc456f5903e17736c",
"icons/icon-512.png": "851030b8b32eeaf3b2715b5ddebe0a43",
"index.html": "29d35772938b8a29975ca4cbba2ce81c",
"/": "29d35772938b8a29975ca4cbba2ce81c",
"main.dart.js": "339dc91aa4e0492728bcf14170e2e9f5",
"manifest.json": "775fe3a694fe42774299aebb2d548cd2",
"splash/img/dark-1x.png": "d16c50fd0094a32065bdefbfcbf17ef8",
"splash/img/dark-2x.png": "d16c50fd0094a32065bdefbfcbf17ef8",
"splash/img/dark-3x.png": "d16c50fd0094a32065bdefbfcbf17ef8",
"splash/img/dark-4x.png": "d16c50fd0094a32065bdefbfcbf17ef8",
"splash/img/light-1x.png": "d16c50fd0094a32065bdefbfcbf17ef8",
"splash/img/light-2x.png": "d16c50fd0094a32065bdefbfcbf17ef8",
"splash/img/light-3x.png": "d16c50fd0094a32065bdefbfcbf17ef8",
"splash/img/light-4x.png": "d16c50fd0094a32065bdefbfcbf17ef8",
"splash/splash.js": "d6c41ac4d1fdd6c1bbe210f325a84ad4",
"splash/style.css": "9917b3496bafc85c32a8e01bea7d6427",
"version.json": "e5d57d4e475cc8a711764c8aef61d978"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
