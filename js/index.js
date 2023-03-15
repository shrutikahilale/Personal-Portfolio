// LIGHT DARK THEME TOGGLE
var currTheme = "dark";

function changeTheme() {
  var theme = document.getElementById("theme-icon");
  var theme_bg = document.getElementById("theme-bg");

  if (currTheme == "dark") {
    currTheme = "light";

    theme.src = "images/moon.png";
    // theme-icon
    theme_bg.classList.remove("light-bg");
    theme_bg.classList.add("dark-bg");

    // body
    document.getElementById("body").classList.remove("dark");
    document.getElementById("body").classList.add("light");

    // navbar
    document.getElementById("nav-bar").classList.remove("nav-dark");
    document.getElementById("nav-bar").classList.add("nav-light");
    var navlinks = document.getElementsByClassName('nav-links')
    for (let i = 0; i < navlinks.length; i++) {
      navlinks[i].style.color = '#090514'
    }

    // hamburger icon
    let ham = document.getElementById('menu-icon')
    ham.classList.remove('dark')
    ham.classList.add('light')

    let hrlines = document.getElementsByClassName('hr-line')
    for (let i = 0; i < 3; i++)
      hrlines[i].style.backgroundColor = "#29165b"

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

    // navbar
    document.getElementById("nav-bar").classList.add("nav-dark");
    document.getElementById("nav-bar").classList.remove("nav-light");
    var navlinks = document.getElementsByClassName('nav-links')
    for (let i = 0; i < navlinks.length; i++) {
      navlinks[i].style.color = '#fff'
    }

    // hamburger icon
    let ham = document.getElementById('menu-icon')
    ham.classList.add('dark')
    ham.classList.remove('light')

    let hrlines = document.getElementsByClassName('hr-line')
    for (let i = 0; i < 3; i++) hrlines[i].style.backgroundColor = '#fff'

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
