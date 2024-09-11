// Función para hacer scroll hacia la galería
function scrollToGallery() {
    document.getElementById("photos").scrollIntoView({ behavior: "smooth" });
}

// Funciones del Lightbox
let currentSlideIndex = 0;

function openLightbox() {
    document.getElementById("lightbox").style.display = "block";
    showSlide(currentSlideIndex);
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function changeSlide(n) {
    showSlide(currentSlideIndex += n);
}

function currentSlide(n) {
    showSlide(currentSlideIndex = n - 1);
}

function showSlide(n) {
    let slides = document.getElementsByClassName("lightbox-slide");
    if (n >= slides.length) { currentSlideIndex = 0 }
    if (n < 0) { currentSlideIndex = slides.length - 1 }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[currentSlideIndex].style.display = "block";
}
