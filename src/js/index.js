let firstSlideContainer = document.getElementsByClassName("slide--content")[0];

let secondSlideContainer = document.getElementsByClassName(
  "slide--content--one"
)[0];

let secondCanvas = document.getElementsByClassName("second--canvas")[0];

secondSlideContainer.setAttribute("style", "display:none");
secondCanvas.setAttribute("style", "display:none");

let thirdCanvas = document.getElementsByClassName("third--canvas")[0];

thirdCanvas.setAttribute("style", "display:none");

let containerToggleOne = setTimeout(function () {
  firstSlideContainer.setAttribute("style", "display:none");
  secondSlideContainer.setAttribute("style", "display:block");
}, 3500);

let removeFirstSlide = setTimeout(function () {
  document
    .getElementsByClassName("first--slide")[0]
    .setAttribute("style", "display:none;");
  secondCanvas.setAttribute("style", "display:block");
}, 6500 + 500);

let removeSecondCanvas = setTimeout(function () {
  secondCanvas.setAttribute("style", "display:none");
  thirdCanvas.setAttribute("style", "display:block");
}, 9800 + 500);

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const openBtns = document.querySelectorAll(".openModal");

openBtns.forEach((openBtn) => {
  openBtn.addEventListener("click", function () {
    modal.style.display = "block";
    modal.classList.add("fade-in");
  });
});

window.onclick = function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
    modal.classList.remove("fade-in");
  }
};
