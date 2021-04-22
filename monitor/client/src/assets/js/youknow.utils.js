var youknowUtil = {};

youknowUtil.copyToClipboard = function copyToClipboard(text) {
  var node = document.createElement("textarea");
  node.innerHTML = text;
  document.body.appendChild(node);
  node.select();

  try {
    var success = document.execCommand("copy");
    success ? console.log("copy successful") : console.log("copy unsuccessful");
  }
  catch (e) {
    console.log("browser not compatible");
  }
  document.body.removeChild(node);
}