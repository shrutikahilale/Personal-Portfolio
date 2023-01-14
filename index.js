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
