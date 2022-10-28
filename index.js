let firstName = document.getElementById("first_name");

let lastName = document.getElementById("last_name");

let birthDate = document.getElementById("dateOfBirth");

let passportNo = document.getElementById("passport_no");

let issueDate = document.getElementById("pptIssueDate");

let expiryDate = document.getElementById("pptExpiryDate");

let passportPalace = document.getElementById("pptIssuePalace");

let form = document.getElementById("form-id");

let btn = document.getElementById("btn");

let message = document.getElementById("message");

message.innerText = "Veuillez vérifier vos données avant de soumettre";

let inputs = form.querySelectorAll('input');

let dataClient = JSON.parse(localStorage.getItem('dataClient'));

firstName.value = dataClient.firstName;
lastName.value = dataClient.lastName;
birthDate.value = dataClient.birthDate;
passportNo.value = dataClient.passportNumber;
issueDate.value = dataClient.issueDate;
expiryDate.value = dataClient.expiryDate;
passportPalace.value = dataClient.passportPlace;
let emailClient=dataClient.email;
let passwordClient=dataClient.password;

btn.addEventListener('click', (e) => {

    e.preventDefault();

    let data = [emailClient,passwordClient,firstName.value, lastName.value, birthDate.value, passportNo.value, issueDate.value, expiryDate.value, passportPalace.value]

    chrome.storage.local.set({ 'key': data });

    message.classList.remove("bg-info");
    message.classList.remove("bg-gradient");
    message.classList.remove("text-light");
    message.classList.add("alert");
    message.classList.add("alert-success");
    message.innerText = "Les données ont été envoyé avec success";
    setTimeout(() => window.close(), 1000)
});