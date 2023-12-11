//readmore and less
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
};
//theme
const body = document.querySelector("body");
const darkmode = document.querySelector(".darkmode-toggle");
darkmode.addEventListener("click", () => {
  body.classList.toggle("dark");
});

//typed js
var typed = new Typed('#element', {
  strings: ['FRONTEND DEVELOPER'],
  typeSpeed: 80,
});

//form
function ff(event) {
  event.preventDefault();
};

// certificate scrolling
let scrollContainer = document.querySelector(".gallery");
let backbtn = document.getElementById("backbtn");
let nextbtn = document.getElementById("nextbtn");

scrollContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;

});

nextbtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft +=900;

});

backbtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft -= 900;

});

// Select the menu icon and the navigation menu
const menuIcon = document.getElementById("menu");
const navigationMenu = document.getElementById("nav-list");

// Add a click event listener to the menu icon
menuIcon.addEventListener("click", () => {
  navigationMenu.classList.toggle("active");

});



