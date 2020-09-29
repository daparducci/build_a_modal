const nextButton = document.getElementById("carousel-button-next")
const prevButton = document.getElementById("carousel-button-prev")
const slides = document.getElementsByClassName("carousel-item");
let slidePosition = 0;
const totalSlides = slides.length;

/* Handle Functions */
console.log(slides)
let hideAllSlides = () => {
    for(const slide of slides) {
       slide.classList.remove("carousel-item-visible");
       slide.classList.add("carousel-item-hidden");
    }
}

let moveToNextSlide = () => {
    hideAllSlides();
    if(slidePosition === totalSlides - 1) {
        slidePosition = 0;
    }else {
        slidePosition++;
    }
    slides[slidePosition].classList.add('carousel-item-visible');
}

let moveToPrevSlide = () => {
    hideAllSlides();
    if(slidePosition === 0) {
        slidePosition = totalSlides - 1;
    }else {
        slidePosition--;
    }
    slides[slidePosition].classList.add('carousel-item-visible');
}



nextButton.addEventListener('click', moveToNextSlide);
prevButton.addEventListener('click', moveToPrevSlide);