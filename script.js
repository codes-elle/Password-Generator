const outputEl = document.getElementById('output');
const clipboard = document.getElementById('copyToClipboard');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numericEl = document.getElementById('numeric');
const symbolsEl = document.getElementById('symbols');
const generatePassword = document.getElementById('generateButton');

const randomFunction = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
}

//for clipboard
clipboard.addEventListener('click', () =>{
  const textarea = document.creatElement('textarea');
  const password = outputEl.innerText;
  
  if(!password){
  return;
  }

textarea.value = password;
document.body.appendChild('textarea');
textarea.select();
Document.execCommand('copy');
textarea.remove();
alert();
});
                           

//checks to see what the checked boxes are and requested password length
generate.addEventListener('click', () => {
  const length = +lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numericEl.checked;
  const hasSymbol = symbolsEl.checked;
  
  outputEl.innerHTML = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});


function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = '';
  const typesCount = lower + upper + number + symbol;
  const typesArr = [{lower}, {upper},{number},{symbol},].filter(item => Object.value(item)[0]);
  
  //doesnt have a selected type
  if(typesCount === 0) {
  return '';
  }
 //create a loop
  
 for(let i = 0; i<length; i+=typesCount){
   typesArr.forEach(type => {
     const funcName = Object.keys(type)[0];
     generatedPassword += randomFunc[funcName]();
     
     return finalPassword;
  });
  }
}
  
function getRandomLower(){
  return String.fromCharCcode(Math.floor(Math.random()* 26) + 97);
}
  
function getRandomUpper(){
  return String.fromCharCcode(Math.floor(Math.random()* 26) + 65);
}
  
function getRandomNumber(){
  return String.fromCharCcode(Math.floor(Math.random()* 26) + 48);
}
  
function getRandomSymbol(){
  const symbols = "!@#$%^&-";
  return symbols[Math.floor(Math.random()*symbols.length)];
}
