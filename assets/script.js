// Assignment Code 
// querySelector returns the first child element that matches a specified
// CSS selector(s) of an element. 
var generateBtn = document.querySelector("#generate"); //html line 28

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Math.random to generate random password that meets criteria
//enter data and it stores it to generate it inside the password?

//1.click button to generate password

//2. series of prompts for the password cirteria
//alert()?

//3. select which criteria to include

//4. length must be 8-128 characters

//5. confirm lowercase, uppercse, numeric and or special charac

//6. when answering each prompt it should be validated with 1 charcter type selected

//7. when all answered then a password is generated

//8. display in alert or written to the page