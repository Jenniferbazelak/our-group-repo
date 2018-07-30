//VARIABLES:

var wordChoices = ["bluebonnet", "lonestar", "cowboy", "longhorn", "football"];

var wins = 0;

var losses = 0;

var guessesRemaining = 9;

var lettersGuessed = [];

var blankSpacesArray = [];

var randomWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];
console.log("Correct word: " + randomWord);

var currentWord = blankSpacesArray.push(randomWord.length * " _ ")
console.log(currentWord);

//Update HTML function
function updateHtml() {
  
  };
  
