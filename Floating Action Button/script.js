const fab = document.getElementById("fab");
const fabBtns = document.querySelector(".fab-btns");

fab.addEventListener("click", () => {
  fabBtns.classList.toggle("show");
});
