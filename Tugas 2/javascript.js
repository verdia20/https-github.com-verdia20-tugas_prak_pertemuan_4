function light() {
  document.body.style.backgroundColor = "hsl(204, 43%, 93%)";
  let all = document.getElementsByTagName("*");

  for (let i = 0, max = all.length; i < max; i++) {
    all[i].style.color = "#2c2c2c";
  }
}

function dark() {
  document.body.style.backgroundColor = "#2c2c2c";
  let all = document.getElementsByTagName("*");
  let h2 = document.getElementsByClassName("heading-style");

  for (let i = 0, max = all.length; i < max; i++) {
    all[i].style.color = "hsl(204, 43%, 93%)";
    h2[i].style.color = "#2c2c2c";
  }
}
