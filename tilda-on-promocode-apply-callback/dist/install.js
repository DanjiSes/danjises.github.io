/* eslint-disable no-var */

$(function () {
  var hash = "4dd6ea34079e6fbbec29";
  var devMode =
    window._devMode !== undefined
      ? window._devMode
      : window.location.hostname.split(".").reverse()[0] === "ws";

  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = devMode
    ? "http://savchenko.sl:3000/bundle.js"
    : "https://danjises.github.io/tilda-on-promocode-apply-callback/dist/bundle." +
      hash +
      ".js";

  var link = document.createElement("link");
  // link.rel = 'stylesheet'
  // link.href = devMode ? 'http://savchenko.sl:3000/bundle.css' : 'https://danjises.github.io/tilda-search-map-zero/dist/bundle.' + hash + '.css'

  $("body").append([script, link]);
});
