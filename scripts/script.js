// create reference for input fields.
const firstNameInput = document.querySelector("#first-name-input");
const lastNameInput = document.querySelector("#last-name-input");
const emailInput = document.querySelector("#email-input")
const passwordInput = document.querySelector("#password-input")
const passwordConfirmInput = document.querySelector("#password-confirm-input")
const form_input = document.querySelectorAll(".form-control")


// create reference for buttons.
const submitBtn = document.querySelector("#submit-btn");
const resetBtn = document.querySelector("#reset-btn")

// simple email validation
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

// add callback functions for all input events.
for (const i of form_input) {
  i.onkeyup = () => {
    i.classList.remove("is-valid");
    i.classList.remove("is-invalid");
  }
}

// add callback function for submit button.
submitBtn.onclick = () => {

  // validate first name
  isFirstNameOk = false;
  if (firstNameInput.value.length <= 0) {
    firstNameInput.classList.add("is-invalid");
  } else {
    firstNameInput.classList.add("is-valid");
    isFirstNameOk = true;
  }

  // validate last name
  isLastNameOk = false;
  if (lastNameInput.value.length <= 0) {
    lastNameInput.classList.add("is-invalid");
  } else {
    lastNameInput.classList.add("is-valid");
    isLastNameOk = true;
  }

  // validate email
  isEmailOk = validateEmail(emailInput.value);
  if (isEmailOk) emailInput.classList.add("is-valid");
  else emailInput.classList.add("is-invalid");

  // validate password
  isPasswordOk = false;
  if (passwordInput.value.length < 6) {
    passwordInput.classList.add("is-invalid");
  } else {
    passwordInput.classList.add("is-valid");
    isPasswordOk = true;
  }

  // validate confirm password
  isPasswordConfirmOk = false;
  if(passwordConfirmInput.value==passwordInput.value&&isPasswordOk){
    passwordConfirmInput.classList.add("is-valid");
    isPasswordConfirmOk = true;
  } else {
    passwordConfirmInput.classList.add("is-invalid");
  }

  if (isFirstNameOk && isLastNameOk && isEmailOk && isPasswordOk && isPasswordConfirmOk) alert("Registered successfully");
};

// add callback function for Reset button.
resetBtn.onclick = () => {
  for (const i of form_input) {
    i.classList.remove("is-valid");
    i.classList.remove("is-invalid");
    i.value = "";
  }
}