// Assignment Code
// This line of code selects the HTML element with an id of "generate" and assigns it to the variable "generateBtn".
var generateBtn = document.querySelector("#generate");

/* Write password to the #password input element
This is the script that writes the password to the HTML page and handles the code.
This is the function that will be called when the "generate" button is clicked.
It generates a password using the generatePassword() function and then assigns the password to the passwordText element on the HTML page. */
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Step 1 - Create password arrays to contain the possible characters that can be used in the generated password.
var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numericCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "_", "+", "=", "?", "/"]

// These empty arrays will be used to store the options and final password that are generated by the function.
var passwordOptions = []
var passwordUser = []

// Step 2 - Use a function and if/else statements to set the parameters for how many characters and what types of characters will be included in the generated password for the user.
function generatePassword() {
  passwordUser = []
  var passwordLength = prompt("How many characters would you like your password to contain?");
    if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
      alert("Please enter a valid number length between 8 and 128 characters.");
      generatePassword();
     }
    else {
      var upperCase = confirm("Please click OK to to confirm including upper case characters.");
      var lowerCase = confirm("Please click OK to to confirm including lower case characters.");
      var numbers = confirm ("Please click OK to to confirm including numeric characters.");
      var special = confirm("Please click OK to to confirm including special characters.");
    }
    if (upperCase === true) {
      passwordOptions = passwordOptions.concat(upperCaseLetters);
    }
    if (lowerCase === true) {
      passwordOptions = passwordOptions.concat(lowerCaseLetters);
    }
    if (numbers === true) {
      passwordOptions = passwordOptions.concat(numericCharacters);
    }
    if (special === true) {
      passwordOptions = passwordOptions.concat(specialCharacters);
    }
    if (passwordOptions.length === 0) {
      alert("Please select at least one type of character to include in your password.");
      generatePassword();
    }

// Add a loop to randomly select characters from the passwordOptions array and add them to the passwordUser array
  for (var i=0; i<passwordLength; i++) {
    var randomIndex = passwordOptions[Math.floor(Math.random() * passwordOptions.length)];
      passwordUser.push(randomIndex);
    }

  var password = passwordUser.join("");
    return password;
  }

// Add event listener to generate button
// Handles the click on the password button
generateBtn.addEventListener("click", writePassword);
