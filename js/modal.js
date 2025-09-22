document.querySelector(".backdrop").classList.add("active");

document.querySelector(".backdrop").addEventListener("click", function (e) {
  if (e.target.classList.contains("backdrop")) {
    this.classList.remove("active");
  }
});
