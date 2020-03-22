module.exports = {
  "globDirectory": "dist/",
  "globPatterns": [
    "**/*.{css,png,html,js,mjs,webmanifest}"
  ],
  "swDest": "dist/sw.js",
  "swSrc": "src/sw.js",
  "globIgnores": [
    "lib/workbox/*.map",
    "lib/workbox/*.dev.js"
  ]
};