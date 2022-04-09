// Assignment Code
const generateBtn = document.querySelector("#generate")

const passwordLength = "";
const symbol = "!@#$%^&*()_+=-";
const number = "0123456789";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Write password to the #password input

function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function wrongInput(){
  alert("Invalid password length.");
  return;
}

function generatePassword(){
  userPassword = "";
  passwordCharacters = "";
  conditionCheck = false;

    let passwordLength = prompt(
      "Select the length of your password ( Between 8 - 128 characters )"
    );

    if (passwordLength >= 8 && passwordLength <= 128){
      password.length = passwordLength;
    } else {
      alert("Please select a password length between 8 - 128.");
      wrongInput();
      userPassword = "Invalid password length.";
      return userPassword;
    }
          
    const isLowerCase = confirm ("Would you like to include lowercase letters in your new password?");
    if (isLowerCase === true) {
      conditionCheck = true;
      passwordCharacters += lowerCase;
    }
    const isUpperCase = confirm ("Would you like to include uppercase letters in your new password?");
    if (isUpperCase === true) {
      conditionCheck = true;
      passwordCharacters += upperCase;
    }
    const isNumber = confirm ("Would you like to include numbers in your new password?");
    if (isNumber === true) {
      conditionCheck = true;
      passwordCharacters += number;
    }
    const isSymbol = confirm ("Would you like to include symbols in your new password?");
    if (isSymbol === true) {
      conditionCheck = true;
      passwordCharacters += symbol;
    } 

    if (conditionCheck === true)
      for (let i = 0; i < passwordLength; i++){
        userPassword += passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    } else { userPassword = "invalid input";

  }

    return userPassword;
}


generateBtn.addEventListener("click", writePassword);

