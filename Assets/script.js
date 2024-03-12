// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() { 
  var uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var lowercaseLetters =  ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
  var characters =[''];
  passwordLength = prompt('pick a number between 8 and 128 to choose how many characters you want your password to be.'); //
  if (passwordLength < 8 || passwordLength > 128){
    return alert('Please select a number between 8 and 128. ')
  }
  uppercaseLetters =confirm('Do you want your password to include uppercase letters?');
   lowercaseLetters=confirm('Do you want your password to inlude lowercase letters?');
  addNumbers =confirm('Do you want your password to include numbers?');
  addSpecialCharacters = confirm('Do you want your password to include special characters?');

if (uppercaseLetters === false && lowercaseLetters === false && numbers === flase && specialCharacters === false) {
  return "Select at least one character type.";
};
if (uppercaseLetters) {
  characters = characters.concat(uppercaseLetters);
}
if (lowercaseLetters) {
 characters = characters.concat(lowercaseLetters);
}    
if (numbers) {
  characters = characters.concat(numbers);
}
if (specialCharacters) {
  characters = characters.concat(specialCharacters);
}

let password =''
for (let i = 0; i < passwordLength; i++) {
  let rng =[Math.floor(Math.random()* characters.length)];
password = password + characters[rng];
}
return password
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
