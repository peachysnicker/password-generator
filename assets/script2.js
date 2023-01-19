// Assignment Code - create generateBtn and targe id generate 
var generateBtn = document.querySelector("#generate");

//set variables with string prompt
function generatePassword() {
    var length = prompt("Enter a password length (between 8 and 128)");
    var uppercase = prompt("Do you want to use uppercase letters? (Type 1 for yes, 0 for no)");
    var lowercase = prompt("Do you want to use lowercase letters? (Type 1 for yes, 0 for no)")
    var symbols = prompt("Do you want to use numbers/special characters? (Type 1 for yes, 0 for no)")
    var chars = ''; //leave chars empty bc it will be generated below

    //if select 1 it counts towards yes 0 is no
    if (uppercase == 1) {
        chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if (lowercase == 1) {
        chars += "abcdefghijklmnopqrstuvwxyz";
    }
    if (symbols == 1) {
        chars += "1234567890!@#$%^&*()";
    }
    //if they select nothing it will prompt string "Nothing Selected"
    if (uppercase == 0 && lowercase == 0 && symbols == 0)
        return "Nothing Selected";
    //create for loop that adds chars randomly generated number entered in length prompt
    //Math.random times the length of the chars
    //dont forget to return password
    var password = '';
    for (var i = 0; i < length; i++) {
        password += chars.charAt(Math.random() * chars.length);
    }
    return password;
}



// Write password to the #password input
//set password and select password id
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button- action on click triggers the code
generateBtn.addEventListener("click", writePassword);



