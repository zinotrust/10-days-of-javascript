// http://api.icndb.com/jokes/random

const joke = document.querySelector(".joke");
const btn = document.querySelector(".btn");
const url = "http://api.icndb.com/jokes/random";

btn.addEventListener("click", getJoke);

// function getJoke() {
//   fetch(url)
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//       joke.innerHTML = data.value.joke;
//     });
// }

async function getJoke() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    joke.innerHTML = data.value.joke;
    //   console.log(data);
  } catch (error) {
    joke.innerHTML = error.message;
  }
}
