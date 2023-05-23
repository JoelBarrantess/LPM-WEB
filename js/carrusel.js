const carousel = document.querySelector('.carousel');
const slider = carousel.querySelector('.slider');
const slides = slider.querySelectorAll('img');
const slideNav = carousel.querySelector('.slide-nav');
const navButtons = slideNav.querySelectorAll('button');

let currentSlide = 0;

navButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    showSlide(index);
  });
});

function showSlide(slideIndex) {
  slider.style.transform = `translateX(-${slideIndex * (100 / slides.length)}%)`;
  navButtons[currentSlide].classList.remove('active');
  navButtons[slideIndex].classList.add('active');
  currentSlide = slideIndex;
}