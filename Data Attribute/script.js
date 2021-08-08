const btns = document.querySelectorAll(".btn");
const text = document.querySelector(".text");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // const filter = e.target.getAttribute("data-link");
    const filter = e.target.dataset.link;

    console.log(filter);
    if (filter == "home") {
      text.textContent = "Home Page";
    } else if (filter == "about") {
      text.textContent = "About Page";
    } else {
      text.textContent = "Contact Page";
    }
  });
});
