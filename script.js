

/* Variables referencing HTML classes/ids*/
var userGuess = document.querySelector('.user-guess');
var guessButton = document.querySelector('.guess-button');
var clearButton = document.querySelector('.clear-button');
var topReply = document.querySelector('.top-reply');
var numberGuessed = document.querySelector('.number-guessed');
var bottomReply = document.querySelector('.bottom-reply');
var inputReset = document.querySelector('.input-reset');
var randomNumber = Math.ceil(Math.random() * 100);

/* Event Listeners */
userGuess.addEventListener('keyup', enableButtons);
guessButton.addEventListener('click', submitGuess);
clearButton.addEventListener('click', clearInput);
inputReset.addEventListener('click', resetExecute);

/*FUNctions*/

function enableButtons() {
  if (userGuess.value === '') {
    guessButton.disabled = true;
    clearButton.disabled = true;
    inputReset.disabled = true;
  } else {
    guessButton.disabled = false;
    clearButton.disabled = false;
    inputReset.disabled = false;
  }
};

function basicState() {
  randomNumber = Math.ceil(Math.random() * 100);
  topReply.innerText = 'Guess a number between 1 and 100.';
  numberGuessed.innerText = 'XX';
  bottomReply.innerText = 'Believe in yourself.  You can do it!';
};

function submitGuess(event) {
  event.preventDefault();
  var parsedNumber = parseInt(userGuess.value);
  if (parsedNumber <= 0 || parsedNumber >= 101) {
    alert('Please guess a number within the specified range.');
  } else {
    compareGuess();
    userGuess.value = '';
  }
};

function tooHigh() {
  var parsedNumber = parseInt(userGuess.value);
  topReply.innerText = 'Your last guess was';
  numberGuessed.innerText = parsedNumber;
  bottomReply.innerText = 'That\'s too high.  Guess again.';
};

function tooLow() {
  var parsedNumber = parseInt(userGuess.value);
  topReply.innerText = 'Your last guess was';
  numberGuessed.innerText = parsedNumber;
  bottomReply.innerText = 'That\'s too low.  Guess again.';
};

function notNumber () {
  topReply.innerText = 'Your last guess was';
  numberGuessed.innerText = 'Not a Number';
  bottomReply.innerText = 'Please guess an actual number.';
};

function correctGuess () {
  topReply.innerText = 'Wow!  You got it!';
  bottomReply.innerText = "Boom goes the dynamite!"
};

function compareGuess() {
  var parsedNumber = parseInt(userGuess.value);
  if (parsedNumber > randomNumber) {
  tooHigh();
  } else if (parsedNumber < randomNumber) {
    tooLow();
  } else if (isNaN(parsedNumber)) {
    notNumber();
  } else {
    correctGuess();
  }
};

function clearInput(event) {
  event.preventDefault();
  userGuess.value = '';
};

function resetExecute(event) {
  clearInput(event);
  basicState();
};

