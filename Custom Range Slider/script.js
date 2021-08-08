const rangeSlider = document.querySelector("input");
const valueEl = document.querySelector(".value");
valueEl.textContent = rangeSlider.value;

rangeSlider.oninput = function () {
  valueEl.textContent = this.value;
};
