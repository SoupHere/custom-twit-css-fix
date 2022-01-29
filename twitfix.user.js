// ==UserScript==
// @name Twitter css fix
// @namespace https://github.com/SoupHere/custom-twit-css-fix
// @description fixes twitter's terrible blur filter BS
// Only run on this domain:
// @match http://twitter.com/*
// ==/UserScript==
var cssTxt = ".r-yfv4eo {" +
    "filter: blur(0px) !important;" +
    "}";
(function () {
    var s = document.createElement('style');
    s.innerHTML = cssTxt;
    (document.head || document.documentElement).appendChild(s);
})();