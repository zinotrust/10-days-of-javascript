const acc = document.querySelectorAll(".accordion");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    // this.classList.toggle("active");
    const desc = this.nextElementSibling;
    const allDesc = document.querySelectorAll(".desc");
    const activeAcc = document.getElementsByClassName("accordion active");
    // console.log(desc);
    // console.log(desc.scrollHeight);
    if (desc.style.maxHeight) {
      desc.style.maxHeight = null;
      this.classList.remove("active");
    } else {
      // Remove active class from all tabs
      for (let i = 0; i < activeAcc.length; i++) {
        activeAcc[i].classList.remove("active");
      }

      // Set the maxHeight of all desc to 0
      for (let i = 0; i < allDesc.length; i++) {
        allDesc[i].style.maxHeight = null;
      }

      // open the current tab clicked
      desc.style.maxHeight = desc.scrollHeight + "px";
      this.classList.add("active");
    }
  });
}
