function rot13(str) {
  let encoded = '';
  for (let i = 0; i < str.length; i++) {
    let letterCode = str[i].charCodeAt();
    if (letterCode >= 65 && letterCode <= 77) {
      encoded += String.fromCharCode(letterCode + 13);
    } else if (letterCode >= 78 && letterCode <= 90) {
      encoded += String.fromCharCode(letterCode - 13);
    } else {
      encoded += str[i];
    }
  }
  return encoded;
}

function isUpperCase(str) {
  return str === str.toUpperCase();
}

function isRot13(text) {
  return text === rot13(rot13(text)); 
}

let button = document.querySelector("#convert");
let textarea = document.querySelector("textarea");
let resultDiv = document.querySelector("#result");
let clearButton = document.querySelector("#clear");

button.addEventListener('click', function(e) {
  e.preventDefault(); 
  let text = textarea.value.trim();
  if (text !== "") {
    if (!isUpperCase(text)) {
      resultDiv.textContent = "Error";
    } else if (isRot13(text)) {
      let result = rot13(text);
      resultDiv.textContent = result;
    } else {
      resultDiv.textContent = "Error";
    }
  } else {
    resultDiv.textContent = "";
  }
});

clearButton.addEventListener('click', function(e) {
  e.preventDefault(); 
  textarea.value = ""; 
  resultDiv.textContent = ""; 
});
