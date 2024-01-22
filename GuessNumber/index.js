let randomNumber = Math.floor(Math.random() * 100 + 1);
// console.log(randomNumber);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastRsult");
const lowOrHigh = document.querySelector(".lowOrHigh");
const startOver = document.querySelector(".resulParse");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    // console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter the valid number");
  } else if (guess < 1) {
    alert("Please enter the number more than 1");
  } else if (guess > 100) {
    alert("Please enter the number less than 1");
  } else {
    prevGuess.push(guess);
    if (numGuess === 10) {
      displayGuess(guess);
      displayMessage(`Game Over&#128532;. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage("Congratulations, You guessed is right	&#128515;");
    endGame();
  } else if (guess < randomNumber) {
    displayMessage("Number is low");
  } else if (guess > randomNumber) {
    displayMessage("Number is High");
  }
}
function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess}, `;
  document.querySelector(".guesses").style.backgroundColor =
    "rgb(255 255 255 / 45%);";
  document.querySelector(".guesses").style.padding = "0.5rem 1rem";
  document.querySelector(".guesses").style.borderRadius = "0.5rem";

  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<button style="padding: 0.5rem 1rem; background-color: #141414; color: white; border: none; border-radius: 1rem; cursor: pointer; margin-bottom: 2rem;"><h2 id="newGame">Start new Game</h2></button>`;

  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  let newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    e.preventDefault();
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true;
  });
}
