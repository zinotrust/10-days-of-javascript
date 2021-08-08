window.onload = () => start();

function start() {
  const progress = document.querySelector(".progress");
  let width = 0;
  const timeInterval = setInterval(fill, 20);

  function fill() {
    if (width >= 60) {
      clearInterval(timeInterval);
    } else {
      width++;
      progress.style.width = width + "%";
      progress.innerHTML = width + "%";
    }
  }
}
