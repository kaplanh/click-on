const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const h1 = document.querySelector("h1");
const body = document.querySelector("body");

// body.style.backgroundColor = "red";
// h1.style.fontSize = "5rem";

// btn.addEventListener("click", function () {
//   h1.style.fontSize = "5rem";
//   body.style.backgroundColor = "red";
// });

const colorsArray = ["red", "green", "yellow", "pink", "purple"];

btn.addEventListener("click", function () {
  const randomNumber = Math.floor(Math.random() * colorsArray.length);
  body.style.backgroundColor = colorsArray[randomNumber];
  color.innerHTML = colorsArray[randomNumber];
});
