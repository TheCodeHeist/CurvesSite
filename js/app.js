var vidElm;
function posVid() {
  var sw = window.innerWidth;
  var sh = window.innerHeight;
  var vw = 1920;
  var vh = 1080;
  if ((sw/sh) <= (vw/vh)) {
    vh = sh;
    vw = (vh * 16) / 9;
  } else {
    vw = sw;
    vh = (vw * 9) / 16;
  }
  vidElm.style.marginLeft = (sw-vw) / 2 + "px";
  vidElm.style.width = vw + "px";
}

window.onload = () => {
  vidElm = document.querySelector("#bg-video");
  posVid();
};
window.onresize = () => {
  posVid();
};
