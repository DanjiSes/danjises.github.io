$(function () {
  const hash = "8aab32e24c91605a3669";
  const devMode = window.__shDevMode__ || false;

  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src = devMode
    ? "http://savchenko.sl:3000/bundle.js"
    : "https://danjises.github.io/tilda-custom-slider-v2/dist/bundle." +
      hash +
      ".js";

  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = devMode
    ? "http://savchenko.sl:3000/bundle.css"
    : "https://danjises.github.io/tilda-custom-slider-v2/dist/bundle." +
      hash +
      ".css";

  $("body").append([script, link]);
});
