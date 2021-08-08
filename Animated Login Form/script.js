const login = document.querySelector(".login-link");
const register = document.querySelector(".register-link");
const forgot = document.querySelector(".forgot-link");
const close = document.querySelector(".close");
const loginSection = document.querySelector(".login");
const registerSection = document.querySelector(".register");
const forgotSection = document.querySelector(".forgot");

register.addEventListener("click", () => {
  loginSection.style.display = "none";
  registerSection.style.display = "flex";
});

login.addEventListener("click", () => {
  registerSection.style.display = "none";
  loginSection.style.display = "flex";
});

forgot.addEventListener("click", () => {
  loginSection.style.display = "none";
  forgotSection.style.display = "flex";
});

close.addEventListener("click", () => {
  forgotSection.style.display = "none";
  loginSection.style.display = "flex";
});
