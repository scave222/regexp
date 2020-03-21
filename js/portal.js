const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const doB = document.querySelector("#doB");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const submit = document.querySelector("#submit");
const displayFN = document.querySelector("#displayFN");
const displayLN = document.querySelector("#displayLN");
const displayDob = document.querySelector("#displayDob");
const displayEmail = document.querySelector("#displayEmail");
const displayPhone = document.querySelector("#displayPhone");
const displayPassword = document.querySelector("#displayPassword");
const displayCPassword = document.querySelector("#displayCPassword");

email.addEventListener("blur", emailed);
firstName.addEventListener("blur", nameFirst);
lastName.addEventListener("blur", nameLast);
phone.addEventListener("blur",phoneNum);
doB.addEventListener("blur",date);
password.addEventListener("blur",pass);
confirmPassword.addEventListener("blur",cPass);

function emailed(){
    let emailAd = email.value;
    let compareEmail = new RegExp('[a-z0-9_.]+@[a-z0-9-]+\.[a-z]{2,6}', "gi");
    if (compareEmail.test(emailAd)) {
        
        displayEmail.innerHTML = "Good!";
        displayEmail.style.color = "green";
    }else{
        displayEmail.innerHTML = "Oops! incorrect input";
        displayEmail.style.color = "red";
    }
}

function nameFirst(){
    let fName = firstName.value;
    let comparefName = new RegExp('[a-z]{2,15}', "gi");
    if (comparefName.test(fName)){
        displayFN.innerHTML = "Good!";
        displayFN.style.color = "green";
    }else{
        displayFN.innerHTML = "Oops! incorrect input";
        displayFN.style.color = "red";
    }

}

function nameLast(){
    let lName = lastName.value;
    let comparelName = new RegExp('[a-z]{2,15}', "gi");
    
    if (comparelName.test(lName)){
        displayLN.innerHTML = "Good!";
        displayLN.style.color = "green";
    }else{
        displayLN.innerHTML = "Oops! incorrect input";
        displayLN.style.color = "red";
    }
}


function phoneNum(){
    let phoneNu = phone.value;
    let comparePhone = /^(\+234|0)[789]{1}[01]{1}[0-9]{8}$/g;

    if (comparePhone.test(phoneNu)){
        displayPhone.innerHTML = "Good!";
        displayPhone.style.color = "green";
    }else {
        displayPhone.innerHTML = "Oops! incorrect input";
        displayPhone.style.color = "red";
    }
}

function date(){
    let dat = doB.value;
    let compareDate = /^([0]?[1-9]|[1|2][0-9]|[3][0|1])[./]([0]?[1-9]|[1][0-2])[./]([0-9]{4}|[0-9]{2})$/g;

    if (compareDate.test(dat)){
        displayDob.innerHTML = "Good!";
        displayDob.style.color = "green";
    }else {
        displayDob.innerHTML = "Oops! incorrect input";
        displayDob.style.color = "red";
    }
}

function pass(){
    let passed = password.value;
    let pword = /^[\w@-]{6,12}$/g;

    if (pword.test(passed)){
        displayPassword.innerHTML = "Good!";
        displayPassword.style.color = "green";
    }else {
        displayPassword.innerHTML = "Oops! incorrect input";
        displayPassword.style.color = "red";
    }
}

function cPass(){
    let cPassed = confirmPassword.value;
    if (cPassed === password.value){
        displayCPassword.innerHTML = "Good!";
        displayCPassword.style.color = "green";
    }else {
        displayCPassword.innerHTML = "Oops! incorrect input";
        displayCPassword.style.color = "red";
    }
}


// function compare(){
//     let phoneinput = phone.value;
//     // let fName = firstName.value;
//     let lName = lastName.value;
//     let dobDate = DOB.value;
//     // let emailAd = email.value;
//     let phoneNum = phone.value;
//     let passwordNum = password.value;
//     let conPassword = confirmPassword;

    
    
// }




