const buttons = document.querySelectorAll(".button");
// console.log(buttons);

const body = document.querySelector("body");
// console.log(body);

buttons.forEach(function (button) {
  button.addEventListener("click", changeColorFuntion);
});

// using if else statement

function changeColorFuntion(e) {
  console.log(e.target.id);
  if (e.target.id === "orange") {
    body.style.background =
      "linear-gradient(rgb(180 180 180 / 72%), rgba(0, 0, 0, 0.2)), url(./assets/cartoon.jpg), center/cover no-repeat";
    body.querySelector("h1").style.color = "rgb(127 21 21)";
    body.querySelector("h2").style.color = "rgb(127 21 21)";
    body.querySelector(".fun").style.color = "rgb(127 21 21)";
    body.querySelector("#green").style.background = "rgb(0 0 0 / 11%)";
  }
  if (e.target.id === "pink") {
    body.style.background =
      "linear-gradient(rgb(180 180 180 / 72%), rgba(0, 0, 0, 0.2)), url(./assets/rangoli.jpg)";
    body.querySelector("h1").style.color = "#0f0f85";
    body.querySelector("h2").style.color = "#0f0f85";
    body.querySelector(".rangoli").style.color = "#0f0f85";
    body.querySelector("#pink").style.background = "rgb(0 0 0 / 11%)";
  }
  if (e.target.id === "purple") {
    body.style.background =
      "linear-gradient(rgb(45 41 41 / 92%), rgb(0 0 0 / 78%)), url(./assets/day-dreaming-doodle.jpg), center/cover no-repeat";
    body.querySelector("h1").style.color = "#ffffff80";

    body.querySelector("h2").style.color = "#ffffff80";
    body.querySelector(".dream").style.color = "#ffffff80";
    body.querySelector("#purple").style.background = "rgb(0 0 0 / 11%)";
  }
  if (e.target.id === "brown") {
    body.style.background =
      "linear-gradient(rgb(72 68 68 / 99%), rgb(0 0 0 / 71%)), url(./assets/hi.jpg), center/cover no-repeat";
    body.querySelector("h1").style.color = "rgb(220 251 1 / 44%)";

    body.querySelector("h2").style.color = "rgb(220 251 1 / 44%)";
    body.querySelector(".movie").style.color = "rgb(220 251 1 / 44%)";
    body.querySelector("#yellow").style.background = "rgb(0 0 0 / 11%)";
  }
}

// using switch statement

// function changeColorFuntion(e) {
//   switch (e.target.id) {
//     case "green":
//       body.style.background = "#A6FF96";
//       break;
//     case "pink":
//       body.style.background = "#F2AFEF";
//       break;
//     case "purple":
//       body.style.background = "#BC7AF9";
//       break;
//     case "yellow":
//       body.style.background = "#FFDD95";
//       break;
//     default:
//       break;
//   }
// }
