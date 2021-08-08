let pounds = document.querySelector(".pounds"),
  kilograms = document.querySelector(".kilograms"),
  grams = document.querySelector(".grams"),
  ounces = document.querySelector(".ounces"),
  form = document.querySelector("form");

form.addEventListener("input", convertWeight);

function convertWeight(e) {
  if (e.target.classList.contains("pounds")) {
    let x = e.target.value;
    kilograms.value = (x / 2.2046).toFixed(2);
    grams.value = (x / 0.0022046).toFixed(2);
    ounces.value = (x * 16).toFixed(2);
  }

  if (e.target.classList.contains("kilograms")) {
    let x = e.target.value;
    pounds.value = x * 2.2046;
    grams.value = x * 1000;
    ounces.value = x * 35.274;
  }

  if (e.target.classList.contains("grams")) {
    let x = e.target.value;
    kilograms.value = x / 1000;
    pounds.value = x * 0.0022046;
    ounces.value = x * 0.035274;
  }

  if (e.target.classList.contains("ounces")) {
    let x = e.target.value;
    kilograms.value = x / 35.274;
    grams.value = x / 0.035274;
    pounds.value = x * 0.0625;
  }
}

// -- From pounds to --
// kilograms = x / 2.2046;
// grams = x / 0.0022046;
// ounces = x * 16;

// -- From Kilogram to --
// pounds = x * 2.2046;
// grams = x * 1000;
// ounces = x * 35.274;

// -- From Gram to --
// kilograms = x / 1000;
//   pounds = x * 0.0022046;
//   ounces = x * 0.035274;

// -- From Ounce to --
// kilograms = x / 35.274;
// grams = x / 0.035274;
// pounds = x * 0.0625;
