const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");

const speechBtnDiv = document.querySelector("#speech-btn");
const micBtn = document.querySelector(".btn .fas");
const instruction = document.querySelector(".instruction");

const speechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

// Check for browser support
if (speechRecognition) {
  console.log("Speech Recognition Supported");

  const recognition = new speechRecognition();

  micBtn.addEventListener("click", micBtnClicked);
  function micBtnClicked(e) {
    e.preventDefault();
    if (micBtn.classList.contains("fa-microphone")) {
      recognition.start();
    } else {
      recognition.stop();
    }
  }

  //   Start Speech Recognition
  recognition.addEventListener("start", () => {
    micBtn.classList.remove("fa-microphone");
    micBtn.classList.add("fa-microphone-slash");
    instruction.textContent = "Recording...";
    searchInput.focus();
    console.log("Speech Recognition Enabled");
  });

  //   Stop Speech Recognition
  recognition.addEventListener("end", () => {
    micBtn.classList.remove("fa-microphone-slash");
    micBtn.classList.add("fa-microphone");
    instruction.textContent = "Click the Mic icon to start";
    searchInput.focus();
    console.log("Speech Recognition Disabled");
  });

  //   Get Result of speech Recognition
  recognition.continuous = true;
  let content = "";
  recognition.addEventListener("result", (e) => {
    console.log(e);
    const current = e.resultIndex;
    const transcript = e.results[current][0].transcript;
    content += transcript;
    searchInput.value = content;
    searchInput.focus();
  });
} else {
  console.log("Speech Recognition Not Supported");
  speechBtnDiv.style.visibility = "hidden";
}
