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
  if (e.target.id === "green") {
    body.style.background = "#A6FF96";
  }
  if (e.target.id === "pink") {
    body.style.background = "#F2AFEF";
  }
  if (e.target.id === "purple") {
    body.style.background = "#BC7AF9";
  }
  if (e.target.id === "yellow") {
    body.style.background = "#FFDD95";
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
