var slideIndex = 0;
var slides = document.querySelectorAll('.slide');

function showSlides() {
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        if(index === slideIndex) {
            slide.classList.add('active');
        }
    });
    slideIndex++;
    if(slideIndex >= slides.length) {
        slideIndex = 0;
    }
    setTimeout(showSlides, 1500); // Change image every 3 seconds
}

window.onload = function() {
    showSlides();
};
