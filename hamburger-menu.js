var navLinks = document.getElementById("nav-menu-links");
navLinks.style.visibility = "hidden";

var isMenuOpen = false;

document.getElementById('menu-icon').addEventListener('click', ()=> {
    var navBar = document.getElementById("nav-bar-menu");
    var firstLine = document.getElementById("first-line");
    var secondLine = document.getElementById("second-line");
    var thirdLine = document.getElementById("third-line");
    var hrLine = document.getElementById("hr-line");
  
    if (isMenuOpen == true) {
      // need to close menu
      firstLine.style.transform = "rotate(0deg)";
      firstLine.style.top = "0px";
      secondLine.style.visibility = "visible";
      thirdLine.style.transform = "rotate(0deg)";
      thirdLine.style.top = "0px";
  
      navLinks.style.visibility = "hidden";
      navLinks.style.transform = "translateY(-10px)";
  
      navBar.style.width = "0%";
      navBar.style.height = "30px";
  
      isMenuOpen = false;
    } else {
      // open menu
      firstLine.style.transform = "rotate(45deg)";
      firstLine.style.top = "7px";
      secondLine.style.visibility = "hidden";
      thirdLine.style.transform = "rotate(-45deg)";
      thirdLine.style.top = "-7px";
      
      navLinks.style.visibility = "visible";
      navLinks.style.transition = "all 0.35s ease-in transform";
      navLinks.style.transform = "translateY(10px)";

      navBar.style.width = "100%";
    //   navBar.style.height = "100%";
      isMenuOpen = true;
    }
})
