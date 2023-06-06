let form = document.querySelector("#myForm");

form.lastname.addEventListener("change", () => {
  validLastname(form.lastname);
});

form.firstname.addEventListener("change", () => {
  validFirstname(form.firstname);
});

form.email.addEventListener("change", () => {
  validEmail(form.email);
});

form.dateOfBirth.addEventListener("change", () => {
  validDateOB(form.dateOfBirth);
});

form.address.addEventListener("change", () => {
  validAddress(form.address);
});

form.password1.addEventListener("change", () => {
  validPassword1(form.password1);
});

form.password2.addEventListener("change", () => {
  confirmPassword(form.password2);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  submitForm(form);
});

const validLastname = (inputLastname) => {
  let nameRegExp = new RegExp("^[a-zA-Z-]+$");
  let msg;
  let valid = false;
  let span = inputLastname.nextElementSibling;

  if (inputLastname.value.length < 5) {
    msg = "le nom doit contenir au moins 5 caractères";
  } else if (inputLastname.value.length > 15) {
    msg = "le nom ne doit pas dépasser 15 caractères";
  } else if (!nameRegExp.test(inputLastname.value)) {
    msg = "le nom ne doit contenir que des lettres ou tirets";
  } else {
    valid = true;
  }
  if (valid) {
    span.innerHTML = "";
    return true;
  } else {
    span.innerHTML = msg;
    span.classList.add("text-error");
    return false;
  }
};

const validFirstname = (inputFirstname) => {
  let nameRegExp = new RegExp("^[a-zA-Z-]+$");
  let msg;
  let valid = false;
  let span = inputFirstname.nextElementSibling;

  if (inputFirstname.value.length < 5) {
    msg = "le prénom doit contenir au moins 5 caractères";
  } else if (inputFirstname.value.length > 15) {
    msg = "le prénom ne doit pas dépasser 15 caractères";
  } else if (!nameRegExp.test(inputFirstname.value)) {
    msg = "le prénom ne doit contenir que des lettres ou tirets";
  } else {
    valid = true;
  }
  if (valid) {
    span.innerHTML = "";
    return true;
  } else {
    span.innerHTML = msg;
    span.classList.add("text-error");
    return false;
  }
};

const validEmail = (inputEmail) => {
  let emailRegExp = new RegExp(
    "^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$"
  );
  let span = inputEmail.nextElementSibling;

  if (emailRegExp.test(inputEmail.value)) {
    span.innerHTML = "";
    return true;
  } else {
    span.innerHTML = "L'adresse mail n'est pas valide";
    span.classList.add("text-error");

    return false;
  }
};

const validDateOB = (inputDateOB) => {
  let span = inputDateOB.nextElementSibling;

  if (inputDateOB.value == "") {
    console.log(inputDateOB.value);
    span.innerHTML = "La date de naissance doit-être renseignée";
    span.classList.add("text-error");
    return false;
  } else {
    span.innerHTML = "";
    return true;
  }
};

const validAddress = (inputAddress) => {
  let span = inputAddress.nextElementSibling;
  if (inputAddress.value.length < 3) {
    span.innerHTML = "L'adresse doit-être renseignée";
    span.classList.add("text-error");
    return false;
  } else {
    span.innerHTML = "";
    span.classList.remove("text-error");
    return true;
  }
};

const validPassword1 = (inputPassword1) => {
  let span = inputPassword1.nextElementSibling;

  if (inputPassword1.value.length < 8) {
    span.innerHTML = "Le mot de passe doit contenir 8 caractères";
    span.classList.add("text-error");
    return false;
  } else {
    span.innerHTML = "";
    span.classList.remove("text-error");
    return true;
  }
};

const confirmPassword = (inputPassword2) => {
  let span = inputPassword2.nextElementSibling;
  let pw1 = form.password1.value;
  let pw2 = form.password2.value;

  if (pw2 != pw1) {
    span.innerHTML = "Le mot de passe doit être identique au précédent";
    span.classList.add("text-error");
    return false;
  } else {
    span.innerHTML = "";
    span.classList.remove("text-error");
    return true;
  }
};

const submitForm = (form) => {
  if (
    validLastname(form.lastname) &&
    validFirstname(form.firstname) &&
    validEmail(form.email) &&
    validDateOB(form.dateOfBirth) &&
    validAddress(form.address) &&
    validPassword1(form.password1) &&
    confirmPassword(form.password2)
  ) {
    form.submit();
  }
};

form.addEventListener("change", () => {
  if (form.lastname.length > 2) {
    validLastname(form.lastname);
  }
});
