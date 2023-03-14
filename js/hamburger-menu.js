let isMenuOpen = false
const navBar = document.querySelector('#nav-bar')

const firstLine = document.getElementById("first-line");
const secondLine = document.getElementById("second-line");
const thirdLine = document.getElementById("third-line");

document.getElementById('menu-icon').addEventListener('click', () => {

  if (isMenuOpen == true) {
    // need to close menu
    firstLine.style.transform = "rotate(0deg)";
    firstLine.style.top = "0px";
    secondLine.style.visibility = "visible";
    thirdLine.style.transform = "rotate(0deg)";
    thirdLine.style.top = "0px";

    navBar.style.visibility = 'hidden'

    isMenuOpen = false;
  } else {
    // open menu
    firstLine.style.transform = "rotate(45deg)";
    firstLine.style.top = "7px";
    secondLine.style.visibility = "hidden";
    thirdLine.style.transform = "rotate(-45deg)";
    thirdLine.style.top = "-7px";

    navBar.style.visibility = 'visible'
    isMenuOpen = true;
  }
})
