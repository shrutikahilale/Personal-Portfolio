// NAV-LINKS

var currentLink = 0;
// changeBg(currentLink);

function changeBg(idx) {
  var nav_links = document.getElementsByClassName("nav-links");

  for (let i = 0; i < nav_links.length; i++) {
    nav_links[i].style.backgroundColor = "#5c4599";
    nav_links[i].style.color = "#fff";
  }

  currentLink = idx;

  nav_links[currentLink].style.backgroundColor = "#fff";
  nav_links[currentLink].style.color = "#9875FB";
  nav_links[currentLink].style.fontWeight = "700";
}

// CAROUSEL
var currentSlide = 0;

function changeSlide(incr) {
  currentSlide += incr;
  slideShow(currentSlide);
}

function slideShow(idx) {
  var slides = document.getElementsByClassName("carousel-item");

  if (idx >= slides.length) {
    currentSlide = 0;
  } else if (idx < 0) {
    currentSlide = slides.length - 1;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[currentSlide].style.display = "flex";
  slides[currentSlide].style.flexdirection = "column";  
  slides[currentSlide].style.gap = "16px"; 
}
