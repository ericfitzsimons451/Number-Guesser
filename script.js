var userGuess = document.querySelector('.user-guess');
var guessButton = document.querySelector('.guess-button');
var clearButton = document.querySelector('.clear-button');
var topReply = document.querySelector('.top-reply');
var numberGuessed = document.querySelector('.number-guessed');
var bottomReply = document.querySelector('.bottom-reply');
var inputReset = document.querySelector('.input-reset');
var randomNumber = Math.ceil(Math.random() * 100);
console.log(randomNumber);

userGuess.addEventListener('keyup', enableButtons);
guessButton.addEventListener('click', submitGuess);
clearButton.addEventListener('click', clearInput);
inputReset.addEventListener('click', resetExecute);

function enableButtons() {
  if (userGuess.value === "") {
    guessButton.disabled = true;
    clearButton.disabled = true;
    inputReset.disabled = true;
  } else {
    guessButton.disabled = false;
    clearButton.disabled = false;
    inputReset.disabled = false;
    }
  };

function submitGuess(event) {
  event.preventDefault();
  var parsedNumber = parseInt(userGuess.value);
  console.log(parsedNumber);
  if (parsedNumber <= 0 || parsedNumber >= 101) {
    alert('Do not do that!');
  } else {
    compareGuess();
    userGuess.value = '';
  }
};

function compareGuess() {
  var parsedNumber = parseInt(userGuess.value);
  if (parsedNumber > randomNumber) {
    bottomReply.innerText = "That is too high.  Try again.";
    numberGuessed.innerText = parsedNumber;
    topReply.innerText = "Your last guess was";
  } else if (parsedNumber < randomNumber) {
    bottomReply.innerText = "That is too low.  Try again.";
    numberGuessed.innerText = parsedNumber;
    topReply.innerText = "Your last guess was";
  } else if (isNaN(parsedNumber)) {
    topReply.innerText = "Your last guess was";
    bottomReply.innerText = "That's not a number.  Guess again.";
    numberGuessed.innerText = parsedNumber || "N/A";
  } else {
  topReply.innerText = "Your last guess was";
  bottomReply.innerText = "Boom goes the dynamite!";
  };
};

function clearInput(event) {
  event.preventDefault();
  userGuess.value = '';
}

function resetExecute(event) {
  clearInput(event);
  randomNumber = Math.ceil(Math.random() * 100);
  topReply.innerText = "Guess a number between 1 and 100!";
  numberGuessed.innerText = "xx";
  bottomReply.innerText = "You can do it!"

};
