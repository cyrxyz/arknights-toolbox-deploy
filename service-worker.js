/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://cdn.jsdelivr.net/npm/workbox-cdn@4.3.1/workbox/workbox-sw.js");

importScripts(
  "precache-manifest.9c81cabf7f27f8f82f81c8af14da274c.js"
);

workbox.core.setCacheNameDetails({prefix: "arknights-toolbox"});

workbox.core.skipWaiting();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/assets\/img\/(avatar|material|item)\//, new workbox.strategies.CacheFirst({ plugins: [new workbox.cacheableResponse.Plugin({ statuses: [ 200 ] })] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/avatars\.githubusercontent\.com\//, new workbox.strategies.StaleWhileRevalidate({ plugins: [new workbox.cacheableResponse.Plugin({ statuses: [ 200 ] })] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/i\.loli\.net\//, new workbox.strategies.CacheFirst({ plugins: [new workbox.cacheableResponse.Plugin({ statuses: [ 200 ] })] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.cnpmjs\.org\//, new workbox.strategies.CacheFirst({ plugins: [new workbox.cacheableResponse.Plugin({ statuses: [ 200 ] })] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.cnpmjs\.org\//, new workbox.strategies.CacheFirst({ plugins: [new workbox.cacheableResponse.Plugin({ statuses: [ 200 ] })] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net\//, new workbox.strategies.CacheFirst({ plugins: [new workbox.cacheableResponse.Plugin({ statuses: [ 200 ] })] }), 'GET');
