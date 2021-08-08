let slider = document.getElementById("slider");
let thumbnails = document.querySelectorAll(".thumbnail");

let nextBtn = document.getElementById("slide-right");
let prevBtn = document.getElementById("slide-left");

let counter = 1;
const size = thumbnails[0].clientWidth;

nextBtn.addEventListener("click", () => {
  //   slider.scrollTo({
  //     left: size * 1,
  //     behavior: "smooth",
  //   });
  console.log(size);
  slider.scrollLeft += 250;
  //   thumbnails.style.transform = "translateX(-250px)";
});

prevBtn.addEventListener("click", () => {
  slider.scrollTo({
    right: size,
    behavior: "smooth",
  });
  console.log(size);
  //   slider.style.transform = "translateX(250px)";
});
