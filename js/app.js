var vidElm;
function posVid() {
  var sw = document.body.clientWidth;
  var sh = document.body.clientHeight;
  var vw = 2133;
  var vh = 1200;
  vidElm.style.marginLeft = (sw - vw) / 2 + "px";
  vidElm.style.width = vw + "px";
  vidElm.style.height = vh + "px";
  console.log(vidElm.style.marginLeft);
}

window.onload = () => {
  vidElm = document.querySelector("#bg-video");
  posVid();
};
window.onresize = () => {
  posVid();
};
