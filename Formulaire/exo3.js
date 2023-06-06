const myForm = document.querySelector("#myForm");


let myName = document.getElementById("lastname");
let myFirstname = document.getElementById("firstname");
let myEmail = document.getElementById("email");
let myDateBirth = document.getElementById("dateOfBirth");
let myAddress = document.getElementById("address");
let myPassword1 = document.getElementById("password1");
let myPassword2 = document.getElementById("password2");
let myRegex = /^[a-zA-Z-\s]+$/;
let emailRegex = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/;
let myErrorLN = document.getElementById("errorLN");
let myErrorFN = document.getElementById("errorFN");
let myErrorEM = document.getElementById("errorEM");
let myErrorDOB = document.getElementById("errorDOB");
let myErrorAD = document.getElementById("errorAD");
let myErrorPW1 = document.getElementById("errorPW1");
let myErrorPW2 = document.getElementById("errorPW2");

myForm.addEventListener("submit", (e) => {
  if (myName.value == "") 
  {
    myErrorLN.innerHTML = "Le champs nom est requis.";
    myErrorLN.style.color = "red";
    e.preventDefault();
  } else if (myRegex.test(myName.value) === false) 
  {
    myErrorLN.innerHTML =
      "Le nom doit comporter des lettres et des tirets uniquement.";
    myErrorLN.style.color = "red";
    e.preventDefault();
  } else if (myName.value.length < 5 || myName.value.length > 15) 
  {
    myErrorLN.innerHTML = "Le nom doit comporter entre 5 et 15 caractères.";
    myErrorLN.style.color = "red";
    e.preventDefault();
  }

  if (myFirstname.value == "") {
    myErrorFN.innerHTML = "Le champs prénom est requis.";
    myErrorFN.style.color = "red";
    e.preventDefault();
  } else if (myRegex.test(myFirstname.value) === false) {
    myErrorFN.innerHTML =
      "Le prénom doit comporter des lettres et des tirets uniquement.";
    myErrorFN.style.color = "red";
    e.preventDefault();
  } else if (myFirstname.value.length < 5 || myFirstname.value.length > 15) {
    myErrorFN.innerHTML = "Le prénom doit comporter entre 5 et 15 caractères.";
    myErrorFN.style.color = "red";
    e.preventDefault();
  }

  if (myEmail.value == "") {
    myErrorEM.innerHTML = "Le champs email est requis.";
    myErrorEM.style.color = "red";
    e.preventDefault();
  } else if (emailRegex.test(myEmail.value) === false) {
    myErrorEM.innerHTML =
      "L'email n'est pas correct.";
    myErrorEM.style.color = "red";
    e.preventDefault();}

  if (myDateBirth.value == "") {
    myErrorDOB.innerHTML = "Le champs date de naissance est requis.";
    myErrorDOB.style.color = "red";
    e.preventDefault();
  } else {
  }

  if (myAddress.value == "") {
    myErrorAD.innerHTML = "Le champs adresse est requis.";
    myErrorAD.style.color = "red";
    e.preventDefault();
  } else {
  }

  if (myPassword1.value == "") {
    myErrorPW1.innerHTML = "Le champs email est requis.";
    myErrorPW1.style.color = "red";
    e.preventDefault();
  } else if (myPassword1.value.length < 8) {
    myErrorPW1.innerHTML =
      "Le mot de passe doit comporter 8 caractères minimum.";
    myErrorPW1.style.color = "red";
    e.preventDefault();
  } else if (myPassword1.value !== myPassword2.value) {
    myErrorPW1.innerHTML = "Le mot de passe n'est pas identique.";
    myErrorPW1.style.color = "red";
    e.preventDefault();
  }

  if (myPassword2.value == "") {
    myErrorPW2.innerHTML = "Le champs email est requis.";
    myErrorPW2.style.color = "red";
    e.preventDefault();
  } else if (myPassword2.value !== myPassword1.value) {
    myErrorPW2.innerHTML = "Le mot de passe n'est pas identique.";
    myErrorPW2.style.color = "red";
    e.preventDefault();
  }

if (myName.value == true && 
  myFirstname.value == true && 
  emailRegex.test(myEmail.value) == true &&
  myDateBirth.value == true &&
  myAddress.value == true &&
  myPassword1.value == myPassword2.value){
    prompt('Vos données ont bien été envoyées.')
  }

});
