/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let randomIcon = generateIcon();
  document.querySelector(".number").innerHTML = generateNumber();
  document.querySelector(".top").innerHTML = randomIcon;
  document.querySelector(".bottom").innerHTML = randomIcon;
};

let generateNumber = function() {
  let numbers = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "K", "Q", "J"];
  let numbersRandom = Math.floor(Math.random() * numbers.length);

  return numbers[numbersRandom];
};

let generateIcon = function() {
  let icons = ["♦", "♥", "♠", "♣"];
  let iconsRandom = Math.floor(Math.random() * icons.length);

  // las constastes son creadas para anidarlas con la misma funcion
  const topIcon = document.querySelector(".top");
  const bottomIcon = document.querySelector(".bottom");
  // Si el icono es "♦" o "♥", cambiarlo a rojo
  if (icons[iconsRandom] === "♦" || icons[iconsRandom] === "♥") {
    topIcon.style.color = "red";

    if (icons[iconsRandom] === "♦" || icons[iconsRandom] === "♥") {
      bottomIcon.style.color = "red";
    }
  }
  return icons[iconsRandom];
};
