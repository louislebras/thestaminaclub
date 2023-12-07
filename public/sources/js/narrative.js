var slideOne = document.querySelector(".slide1");
var nextOne = document.querySelector(".next1");

nextOne.onclick = function () {
  slideOne.classList.add("tada");
};

var slideTwo = document.querySelector(".slide2");
var nextTwo = document.querySelector(".next2");

nextTwo.onclick = function () {
  slideTwo.classList.add("tada");
};

var slideThree = document.querySelector(".slide3");
var nextThree = document.querySelector(".next3");

nextThree.onclick = function () {
  slideThree.classList.add("tada");
};

var slideFour = document.querySelector(".slide4");
var nextFour = document.querySelector(".next4");

nextFour.onclick = function () {
  slideFour.classList.add("tada");
};

var slideFive = document.querySelector(".slide5");
var nextFive = document.querySelector(".next5");
var boxNarrative = document.querySelector(".narrative");

var theBody = document.querySelector(".html");

nextFive.onclick = function () {
  boxNarrative.classList.add("tada2");
  theBody.classList.add("removeFixedScroll");
};

var skipButton = document.querySelector(".skip-button");

var theBody = document.querySelector(".html");

skipButton.onclick = function () {
  boxNarrative.classList.add("tada2");
  theBody.classList.add("removeFixedScroll");
};
