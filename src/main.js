function copyAddress () {
  var temp = $("<input>");
  $("body").append(temp);
  temp.val($('#address').text()).select();
  document.execCommand("copy");
  temp.remove();
}