let scriptList = [
  "./script/memory.js",
  "./script/slider.js",
  "./script/hover.js",
  "./script/edit.js",
  "./script/toggle.js",
];

scriptList.forEach(function (s) {
  let script = document.createElement("script"); //creating <script> element
  script.src = s;
  script.async = false;
  document.body.appendChild(script);
});
