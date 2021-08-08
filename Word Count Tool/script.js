let input = document.querySelector(".input"),
  character = document.querySelector(".character"),
  word = document.querySelector(".word"),
  readingTime = document.querySelector(".reading-time"),
  wordLimit = document.querySelector(".word-limit"),
  WORD_LIMIT = 10;

input.addEventListener("keyup", characterCount);
input.addEventListener("keyup", wordCounter);

function characterCount() {
  character.innerHTML = input.value.length;
}

function wordCounter(e) {
  let words = input.value.match(/\b[-?(\w+)?]+\b/gi);

  if (words) {
    word.innerHTML = words.length;
    wordLimit.innerHTML = WORD_LIMIT - words.length;
  } else {
    word.innerHTML = 0;
  }

  //   Word Limit Block of Code
  input.addEventListener("keydown", function (e) {
    words = input.value.match(/\b[-?(\w+)?]+\b/gi);
    if (words) {
      if (words.length > WORD_LIMIT - 1 && e.code !== "Backspace") {
        e.preventDefault();
        // console.log("Word limit reached");
      }
    }
  });

  //   Reading time based on 225 words/min
  if (words) {
    let seconds = Math.floor((words.length * 60) / 225);
    if (seconds > 59) {
      let minutes = Math.floor(seconds / 60);
      seconds = seconds - minutes * 60;
      readingTime.innerHTML = minutes + "m" + seconds + "s";
    } else {
      readingTime.innerHTML = seconds + "s";
    }
  } else {
    readingTime.innerHTML = "0s";
  }
}
