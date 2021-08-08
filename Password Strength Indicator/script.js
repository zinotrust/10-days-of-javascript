let state,
  password = document.getElementById("password"),
  passwordStrength = document.getElementById("password-strength"),
  lowUpperCase = document.querySelector(".low-upper-case i"),
  number = document.querySelector(".number i"),
  specialChar = document.querySelector(".special-char i"),
  eightChar = document.querySelector(".eight-char i"),
  showPassword = document.querySelector(".show-pass"),
  eyeIcon = document.querySelector("#eye");

showPassword.addEventListener("click", toggle);
eyeIcon.addEventListener("click", toggleEye);
password.addEventListener("keyup", () => {
  let pass = password.value;
  checkStrength(pass);
});

// Toggle password visibility
function toggle() {
  if (state) {
    password.setAttribute("type", "password");
    state = false;
  } else {
    password.setAttribute("type", "text");
    state = true;
  }
}

// Toggle icon in password field
function toggleEye() {
  eyeIcon.classList.toggle("fa-eye-slash");
}

// Check Password Strength
function checkStrength(password) {
  let strength = 0;

  // check Lower and Uppercase
  if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
    strength += 1;
    addCheck(lowUpperCase);
  } else {
    removeCheck(lowUpperCase);
  }
  // Check For Numbers
  if (password.match(/([0-9])/)) {
    strength += 1;
    addCheck(number);
  } else {
    removeCheck(number);
  }
  // Check For Special char
  if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
    strength += 1;
    addCheck(specialChar);
  } else {
    removeCheck(specialChar);
  }
  // Check if password is > 7
  if (password.length > 7) {
    strength += 1;
    addCheck(eightChar);
  } else {
    removeCheck(eightChar);
  }

  // passwordStrength.classList.remove("pb-danger", "pb-warning", "pb-primary", "pb-success");
  // passwordStrength.classList.add("");
  // Update progress bar
  if (strength == 1) {
    removePassStrength();
    passwordStrength.classList.add("pb-danger");
    passwordStrength.style = "width: 25%";
  } else if (strength == 2) {
    removePassStrength();
    passwordStrength.classList.add("pb-warning");
    passwordStrength.style = "width: 50%";
  } else if (strength == 3) {
    removePassStrength();
    passwordStrength.classList.add("pb-primary");
    passwordStrength.style = "width: 75%";
  } else if (strength == 4) {
    removePassStrength();
    passwordStrength.classList.add("pb-success");
    passwordStrength.style = "width: 100%";
  }
}

// Remove password strength classes
function removePassStrength() {
  passwordStrength.classList.remove(
    "pb-danger",
    "pb-warning",
    "pb-primary",
    "pb-success"
  );
}

// Add Check Icon
function addCheck(charRequired) {
  charRequired.classList.remove("fa-circle");
  charRequired.classList.add("fa-check");
}
// Remove Check Icon
function removeCheck(charRequired) {
  charRequired.classList.remove("fa-check");
  charRequired.classList.add("fa-circle");
}
