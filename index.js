// NAV-LINKS
var currentLink = 0;

function changeBg(idx) {
  var nav_links = document.getElementsByClassName("nav-links");

  for (let i = 0; i < nav_links.length; i++) {
    nav_links[currentLink].style.fontWeight = "normal";
  }

  currentLink = idx;
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

// LIGHT DARK THEME TOGGLE
var currTheme = "dark";

function changeTheme() {
  var theme = document.getElementById("theme-icon");
  var theme_bg = document.getElementById("theme-bg");

  if (currTheme == "dark") {
    theme.src = "images/moon.png";
    currTheme = "light";

    // theme-icon
    theme_bg.classList.remove("light-bg");
    theme_bg.classList.add("dark-bg");

    // body
    document.getElementById("body").classList.remove("dark");
    document.getElementById("body").classList.add("light");

    // navbar
    document.getElementById("nav-bar").classList.remove("nav-dark");
    document.getElementById("nav-bar").classList.add("nav-light");

    // h2 tags
    var h2tags = document.getElementsByTagName("h2");
    for (let i = 0; i < h2tags.length; i++) {
      h2tags[i].style.color = "#29165b";
    }

    // carousel front and back arrows
    document.getElementById("back").style.color = "#29165b";
    document.getElementById("front").style.color = "#29165b";
    
    // contact-links
    var contactLinks = document.getElementsByClassName("contact-link");
    for (let i = 0; i < contactLinks.length; i++) {
      contactLinks[i].style.color = "#29165b";
    }
  } else {
    theme.src = "images/sun.png";
    currTheme = "dark";

    // theme-icon
    theme_bg.classList.remove("dark-bg");
    theme_bg.classList.add("light-bg");

    // body
    document.getElementById("body").classList.remove("light");
    document.getElementById("body").classList.add("dark");

    // h2 tags
    var h2tags = document.getElementsByTagName("h2");
    for (let i = 0; i < h2tags.length; i++) {
      h2tags[i].style.color = "#fff";
    }

    // carousel front and back arrows
    document.getElementById("back").style.color = "#fff";
    document.getElementById("front").style.color = "#fff";
        
    // contact-links
    var contactLinks = document.getElementsByClassName("contact-link");
    for (let i = 0; i < contactLinks.length; i++) {
      contactLinks[i].style.color = "#9875fb";
    }
  }
}
