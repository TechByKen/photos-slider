const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const imgContainer = document.querySelector(".img-container");
const imgs = document.querySelectorAll("img");

let currentImg = 1;

nextBtn.addEventListener("click", () => {
  currentImg++;
  updateImg();
});

function updateImg() {
  if (currentImg > imgs.length) {
    currentImg = 1;
  }
  imgContainer.style.transform = `translateX(-${(currentImg - 1) * 500}px)`;
}
