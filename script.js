const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");
const randomizeButton = document.querySelector(".random");

function generateRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
  css.textContent = body.style.background + ";";
}

function setGradient() {
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
  css.textContent = body.style.background + ";";
}

function randomizeColors() {
  color1.value = generateRandomColor();
  color2.value = generateRandomColor();
  setGradient();
}

randomizeButton.addEventListener("click", randomizeColors);
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

window.onload = randomizeColors();