let button = document.querySelector(".button");
let h1 = document.querySelector(".h1-text");
let body = document.querySelector("body");
button.onclick = function () {
  button.classList.toggle("active");
  h1.classList.toggle("color");
  body.classList.toggle("bg");
};
