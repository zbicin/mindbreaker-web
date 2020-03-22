importScripts('./lib/workbox/workbox-sw.js');
workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);
