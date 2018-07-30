//VARIABLES:

var letterArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wordChoices = ["bluebonnet", "lonestar", "cowboy", "longhorn", "football"];

var wins = 0;

var losses = 0;

var guessesRemaining = 9;

var lettersGuessed = [];

var blankSpacesArray = [];

var randomWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];
console.log("Correct word: " + randomWord);

var currentWord = blankSpacesArray.push(randomWord.length * " _ ");
console.log(currentWord);

//Update HTML function
function updateHtml() {

  };
  //these are my java changes


// alert if not a letter
if (!letterArray.includes(userGuess)) {
   console.log("User pressed: " + userGuess + " Not a letter.");
   alert("Please press a letter, not a special key.");
}

// alert if already picked that letter
if (lettersGuessed.includes(userGuess)) {
   console.log(userGuess + " was already guessed.");
   alert("You already guessed " + userGuess + ". Pick another letter.");
}

  
