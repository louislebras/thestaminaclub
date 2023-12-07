window.onload = function () {
  var burger = document.querySelector(".burger");
  var closeCross = document.querySelector(".close-sidebar");
  var nav = document.querySelector(".sidebar");
  var blurBlock = document.querySelector(".back-blur-layer-sidebar");

  burger.onclick = function () {
    nav.classList.add("to-left-menu");
    blurBlock.classList.add("to-back-blur");
  };

  closeCross.onclick = function () {
    nav.classList.remove("to-left-menu");
    blurBlock.classList.remove("to-back-blur");
  };

  blurBlock.onclick = function () {
    nav.classList.remove("to-left-menu");
    blurBlock.classList.remove("to-back-blur");
  };
};
