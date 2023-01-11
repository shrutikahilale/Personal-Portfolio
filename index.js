function changeBg(idx) {
  for (let i = 1; i < 6; i++) {
    if (i == idx) {
      document.getElementById(i).style.backgroundColor = "#fff";
      document.getElementById(i).style.color = "#9875FB";
      document.getElementById(i).style.fontWeight = "700";
    } else {
      document.getElementById(i).style.backgroundColor = "#5c4599";
      document.getElementById(i).style.color = "#fff";
    }
  }
}