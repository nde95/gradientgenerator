var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

// random button


let randomize = document.getElementsByClassName("random")[0];
var randomColor = Math.floor(Math.random()*16777215).toString(16);

function RBC (e) {
  color1.value = '#'+Math.floor(Math.random()*16777215).toString(16);
  color2.value = '#'+Math.floor(Math.random()*16777215).toString(16);
  	body.style.background = "linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}
randomize.addEventListener("click", RBC);
window.onload = RBC();


// background changing
// let setGradient = function() {
// 	body.style.background = "linear-gradient(to right, " 
// 	+ color1.value 
// 	+ ", " 
// 	+ color2.value 
// 	+ ")";

// 	css.textContent = body.style.background + ";";
// }

// left
color1.addEventListener("input", setGradient);

// right
color2.addEventListener("input", setGradient);
