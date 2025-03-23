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

// const revealContainer = document.getElementById("card");
// const hide = document.querySelectorAll(".hide");

// revealContainer.addEventListener("mouseenter", () => {
//   hide.forEach((hide) => {
//     hide.style.height = "auto";
//     hide.style.display = "block";
//   });
// });

// revealContainer.addEventListener("mouseleave", () => {
//   hide.forEach((hide) => {
//     hide.style.height = "0%";
//     hide.style.display = "none";
//   });
// });
