const colorButton = document.querySelectorAll(".color");

colorButton.forEach((colorButton) => {
  colorButton.addEventListener("click", () => {
    document.querySelector(".color.active")?.classList.remove("active");
    colorButton.classList.add("active");
  });
});

const sizeButton = document.querySelectorAll(".size");

sizeButton.forEach((sizeButton) => {
  sizeButton.addEventListener("click", () => {
    document.querySelector(".size.active")?.classList.remove("active");
    sizeButton.classList.add("active");
  });
});

const revealContainer = document.querySelector("main");
const revealElement = document.querySelectorAll(".reveal");

revealContainer.addEventListener("mouseover", () => {
  revealElement.classList.style.display = "block";
});
