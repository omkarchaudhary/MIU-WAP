window.onload = function(){
    "use strict";
const submitBtn = document.getElementById("submitBtn");
const emailText = document.getElementById("email");
const passwordText = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const regexPattern = new RegExp("[a-zA-Z0-9]{10,}");

submitBtn.onclick = validateForm;
function validateForm(){
    console.log("Password "+passwordText.value);
    console.log("Regex pattern match "+regexPattern.test(passwordText.value))
    if(!regexPattern.test(passwordText.value)){
        alert("Password field is at least 10 characters and contain at least one number and one uppercase and lowercase letter")
    }
    else{
        alert("Form validated successfully");
    }
    console.log("Password "+passwordText.value);
    console.log("Regex pattern match "+regexPattern.test(passwordText.value))
}
//(\+1)?(\s)?(\d{3}\s+\d{3}\s+\d{4})|(\d{3}\d{3}\d{4}) - US number
//^(\+1)?(\s)?(\d{3}\s\d{3}\s\d{4})|(\d{3}\d{3}\d{4})$
}