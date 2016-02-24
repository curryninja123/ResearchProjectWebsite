// add functions here that serve as a global model for jQuery animations
function link(linkurl, id) {
  var str = "#"+linkurl+".html";
  document.getElementByID(id).link(str);
}
