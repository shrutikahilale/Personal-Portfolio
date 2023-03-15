// CAROUSEL
var currentSlide = 0;

function changeSlide(incr) {
    currentSlide += incr;
    slideShow(currentSlide);
}

function slideShow(idx) {
    var slides = document.getElementsByClassName("carousel-item");

    if (idx >= slides.length) {
        currentSlide = 0;
    } else if (idx < 0) {
        currentSlide = slides.length - 1;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[currentSlide].style.display = "flex";
    slides[currentSlide].style.flexdirection = "column";
    slides[currentSlide].style.gap = "16px";
}