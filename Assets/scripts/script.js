// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// This is the script that writes the password to the page and handles the code.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Password Arrays
var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numericCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var specialCharaters = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "_", "+", "=", "?", "/"]

/* Generating the user password:
Here we use a function and an if/else statement to set the parameters for generating a password for the user. */
function generatePassword() {
  var passwordLength = prompt("How many characters would you like your password to contain?");
    if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
      alert("Please enter a valid number length bewtween 8 and 128 characters.");
      generatePassword()
     }
    else {
      lowerCase = confirm("Please click OK to to confirm including lower case characters.");
      upperCase = confirm("Please click OK to to confirm including upper case characters.");
      numbers = confirm ("Please click OK to to confirm including numeric characters.");
      special = confirm("Please click OK to to confirm including special characters.");
    }
}

// Add event listener to generate button
// Handles the click on the password button (we havent learned how to do this yet).
generateBtn.addEventListener("click", writePassword);


/* Professors code from the last class on Thurs 4/13.

var choices=["R","P","S"];

funtion getRandomNumber(min, max) {
  var randomNumber=Math.random() // Random number between 0 and 0.99
  var randomNumberUpToMax=randomNumber * max // Random number between 0 and max -0.1
  var randomNumberInRange= min + randomNumberUpToMax;

  return Math.floor(randomNumberInRange); // Remove the decimal places
}

function getRandomValueFromArray(array) {
  var randomArrayPosition=getRandomNumber(0,array.length);
  return array[randomArrayPosition];
}
*/