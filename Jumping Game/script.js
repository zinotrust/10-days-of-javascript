const hero = document.querySelector(".hero");
const heroBoy = document.querySelector(".hero-boy");
const vilan = document.querySelector(".vilan");

const jump = () => {
  if (hero.classList != "animate") {
    hero.classList.add("animate");
    vilan.style.animation = "move 1s infinite linear";
  }
  setTimeout(() => {
    hero.classList.remove("animate");
  }, 300);
};

document.addEventListener("keydown", (e) => {
  if (e.code == "Space") {
    jump();
  }
});

let isAlive = setInterval(() => {
  let heroTop = parseInt(window.getComputedStyle(hero).getPropertyValue("top"));
  //   console.log(heroTop);
  let vilanLeft = parseInt(
    window.getComputedStyle(vilan).getPropertyValue("left")
  );

  if (vilanLeft < 40 && vilanLeft > 20 && heroTop >= 130) {
    vilan.style.animation = "none";
    alert("Game over. Press spacebar to start");
  }
}, 10);
