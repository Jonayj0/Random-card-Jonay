// window.onload = function() {
//     //write your code here
//     let numbers = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "K", "Q", "J"];
//     let icons = ["♦", "♥", "♠", "♣"];
//     let cardNumberElement = document.querySelector(".number").innerHTML;
//     let cardIconsElementTop = document.querySelector(".top").innerHTML;
//     let cardIconsElementBottom = document.querySelector(".bottom").innerHTML;

// };

// let generateRandomCard = function() {
//     let numbersRandom = Math.floor(Math.random() * numbers.length);
//     let iconsRandom = Math.floor(Math.random() * icons.length);
//     return numbers[numbersRandom] + icons[iconsRandom];
//   };

//   let generateIcon = function() {
//     let iconsRandom = Math.floor(Math.random() * icons.length);
  
//     // las constastes son creadas para anidarlas con la misma funcion
//     const topIcon = document.querySelector(".top");
//     const bottomIcon = document.querySelector(".bottom");
//     // Si el icono es "♦" o "♥", cambiarlo a rojo
//     if (icons[iconsRandom] === "♦" || icons[iconsRandom] === "♥") {
//       topIcon.style.color = "red";
  
//       if (icons[iconsRandom] === "♦" || icons[iconsRandom] === "♥") {
//         bottomIcon.style.color = "red";
//       }
//     }
//     return icons[iconsRandom];
//   };
  