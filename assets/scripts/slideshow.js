const slideshow = document.querySelector(".slideshow");
const slide = document.querySelector(".slideshow__slide");

const slides = [
    {
        "id": 0,
        "src": "../assets/images/pages/labycity/sshot_labycity-01.jpg",
        "alt": ""
    },
    {
        "id": 1,
        "src": "../assets/images/pages/labycity/sshot_labycity-02.jpg",
        "alt": ""
    },
    {
        "id": 2,
        "src": "../assets/images/pages/labycity/sshot_labycity-03.jpg",
        "alt": ""
    },
    {
        "id": 3,
        "src": "../assets/images/pages/labycity/sshot_labycity-04.jpg",
        "alt": ""
    },
    {
        "id": 4,
        "src": "../assets/images/pages/labycity/sshot_labycity-05.jpg",
        "alt": ""
    },
    {
        "id": 5,
        "src": "../assets/images/pages/labycity/sshot_labycity-06.jpg",
        "alt": ""
    },
    {
        "id": 6,
        "src": "../assets/images/pages/labycity/sshot_labycity-07.jpg",
        "alt": ""
    },
    {
        "id": 7,
        "src": "../assets/images/pages/labycity/sshot_labycity-08.jpg",
        "alt": ""
    },
    {
        "id": 8,
        "src": "../assets/images/pages/labycity/sshot_labycity-09.jpg",
        "alt": ""
    },
    {
        "id": 9,
        "src": "../assets/images/pages/labycity/sshot_labycity-10.jpg",
        "alt": ""
    }
]

console .log(slides.length );
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