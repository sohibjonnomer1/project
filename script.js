function moon() {
    document.body.style.backgroundColor = "#333";
    document.body.style.color = "#fff";
}

function sun() {
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#000";
}

function orderItem(item) {
    alert(item + ' ordered successfully!');
}
function moon(){
    document.querySelector(".container").style.backgroundColor = "black"
    document.querySelector("p").style.color = "white"
}
function buyNow(sweet) {
    alert(`You have selected: ${sweet}`);
}
let slideIndex = 0;
showSlides();

// Auto-slide function
function showSlides() {
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    setTimeout(showSlides, 5000); // Change slide every 5 seconds
}

// Manual slide control
function moveSlide(n) {
    slideIndex += n;
    if (slideIndex < 1) {
        slideIndex = document.getElementsByClassName("slide").length;
    } else if (slideIndex > document.getElementsByClassName("slide").length) {
        slideIndex = 1;
    }
    showCurrentSlide(slideIndex);
}

// Direct navigation to the specific slide
function currentSlide(n) {
    showCurrentSlide((slideIndex = n));
}

// Show specific slide
function showCurrentSlide(n) {
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[n - 1].style.display = "block";
    dots[n - 1].className += " active";
}
// Example JavaScript to handle any interactivity or dynamic content
document.addEventListener('DOMContentLoaded', function () {
    console.log('Footer loaded');
    // Add any JavaScript functionality here
});
