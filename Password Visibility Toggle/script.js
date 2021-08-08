const password = document.querySelector("#password");
const eyeIcon = document.querySelector("#eye");

eyeIcon.addEventListener("click", () => {
  if (eyeIcon.classList.contains("fa-eye")) {
    password.setAttribute("type", "text");
    // eyeIcon.classList.remove("fa-eye");
    // eyeIcon.classList.add("fa-eye-slash");
    eyeIcon.classList.replace("fa-eye", "fa-eye-slash");
  } else {
    password.setAttribute("type", "password");
    eyeIcon.classList.replace("fa-eye-slash", "fa-eye");
  }
});
