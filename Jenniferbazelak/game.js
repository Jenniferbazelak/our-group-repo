//these are my java changes

var letterArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

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

