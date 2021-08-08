import * as v from "./js/variables.js";
import { getUser, errorMessage } from "./js/functions.js";

v.form.addEventListener("submit", (e) => {
  e.preventDefault();
  //   let user = v.search.value;
  //   let user = v.search.value.replace(/\s+/g, "");
  let user = v.search.value.split(" ").join("");

  if (user === "") {
    errorMessage("Input cannot be blank");
    console.log("blank");
  } else {
    getUser(user);
    v.search.value = "";
  }
});
