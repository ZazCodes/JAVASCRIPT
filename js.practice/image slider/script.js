let slider = document.querySelector(".slider");
let previousBtn = document.querySelector("#preBtn");
let nextBtn = document.querySelector("#nexBtn");
let ImageSlide = document.querySelector("#img-slide")

let currentIndex = 0;
let images = ["bmw.jpg","horse.jpg", "orb.png"];

function showImage(index) {
    ImageSlide.src = images[index];
}

previousBtn.addEventListener("click", function() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
});

nextBtn.addEventListener("click", function() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
});
