import slidesLabyCity from "../data/slides_labycity.js";
import slidesWarp from "../data/slides_warp.js";

const slideshow = document.querySelector(".slideshow");
const slide = document.querySelector(".slideshow__slide");

let slides;
switch (slideshow.getAttribute("slides")) {
    case "slidesLabyCity":
        slides = slidesLabyCity;
    break;

    case "slidesWarp":
        slides = slidesWarp;
    break;

    default: console.error("We didn't understand which slides we should be using here");
}

const arrowLeft = document.querySelector(".slideshow__arrow--left")
const arrowRight = document.querySelector(".slideshow__arrow--right")

let currentSlideIndex = 0

arrowLeft.addEventListener('click', function() {
    currentSlideIndex > 0 ? currentSlideIndex -= 1 : currentSlideIndex = slides.length - 1;

	// console.log("Left arrow clicked!", "Current slide index is " + currentSlideIndex)

	updateSlideshow();
})

arrowRight.addEventListener('click', function(){
    currentSlideIndex < slides.length - 1 ? currentSlideIndex += 1 : currentSlideIndex = 0;

	// console.log("Right arrow clicked!", "Current slide index is " + currentSlideIndex);

	updateSlideshow();
})

function updateSlideshow() {
	slide.src = slides[currentSlideIndex].src;
}