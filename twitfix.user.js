// ==UserScript==
// @name Twitter css fix
// @namespace https://github.com/SoupHere/custom-twit-css-fix
// @description fixes twitter's terrible blur filter BS
// Only run on this domain:
// @include http://twitter.com/*
// @resource customCSS https://raw.githubusercontent.com/SoupHere/custom-twit-css-fix/main/twitfix.css
// ==/UserScript==
console.debug('start: add CSS');
var cssTxt  = GM_getResourceText("customCSS");
GM_addStyle (cssTxt);
console.debug('done: add CSS');