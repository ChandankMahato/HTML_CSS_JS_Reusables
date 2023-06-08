let scriptList = [
  "./script/model.js",
  "./script/highlight.js",
  "./script/lineNumber.js",
];

scriptList.forEach(function (s) {
  let script = document.createElement("script"); //creating <script> element
  script.src = s;
  script.async = false;
  document.body.appendChild(script);
});
