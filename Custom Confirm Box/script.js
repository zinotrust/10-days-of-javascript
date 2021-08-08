const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");
const confirmEl = document.querySelector(".confirm");
const closeEl = document.querySelector(".close");
const title = document.querySelector(".title");
const content = document.querySelector(".content");
const btnOk = document.querySelector(".btn-ok");
const btnCancel = document.querySelector(".btn-cancel");

// Custom Confirm Box
class ShowConfirm {
  constructor(title, content, ok, cancel) {
    this.title = title;
    this.content = content;
    this.ok = ok;
    this.cancel = cancel;
  }

  trigger(callbackFn) {
    title.textContent = this.title;
    content.textContent = this.content;
    btnOk.innerText = this.ok;
    btnCancel.innerText = this.cancel;

    confirmEl.classList.remove("close-modal");

    closeEl.addEventListener("click", this.closeModal);
    btnCancel.addEventListener("click", this.closeModal);

    btnOk.addEventListener("click", () => {
      callbackFn();
      this.closeModal();
    });
  }

  closeModal() {
    confirmEl.classList.add("close-modal");
  }
}

// Btn Event Listeners
btn1.addEventListener("click", () => {
  changeBg("red");
});
btn2.addEventListener("click", () => {
  changeBg("purple");
});

const changeBag = new ShowConfirm(
  "Change Background",
  "You are about to change the background!",
  "Change",
  "Cancel"
);

function changeBg(color) {
  changeBag.trigger(setBg);
  function setBg() {
    document.body.style.backgroundColor = color;
  }
}

// Defaul Confirm Example
// btn1.addEventListener("click", () => {
//   changeBg("red");
// });
// btn2.addEventListener("click", () => {
//   changeBg("purple");
// });

// function changeBg(color) {
//   let x = confirm("Change Backround to " + color);
//   if (x) {
//     document.body.style.backgroundColor = color;
//   }
// }
