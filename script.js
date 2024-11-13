const sliderWrapper = document.querySelector('.slider-wrapper');
const sliderTrack = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentSlide = 0;
let slideWidth = slides[0].offsetWidth;
let translateX = 0;

const moveSlider = () => {
  translateX = -currentSlide * slideWidth;
  sliderWrapper.style.transform = `translateX(${translateX}px)`;
};

const nextSlide = () => {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  moveSlider();
};

const prevSlide = () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  moveSlider();
};


moveSlider();

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

window.addEventListener('resize', () => {
  slideWidth = slides[0].offsetWidth;
  moveSlider();
});




document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("burger").addEventListener("click",function(){
        document.querySelector(".headr-wrapper").classList.toggle("open")
    })
})