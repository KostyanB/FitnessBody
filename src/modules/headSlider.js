'use strict'

const sliderHead = () => {
    const mainSlider = document.querySelector('.main-slider'),
    headSlideContent = document.querySelectorAll('.head-slide-content');

    const prevSlide = (elem, index) => {
        elem[index].style.display = 'none';
    };

    const nextSlide = (elem, index) => {
        elem[index].style.display = 'flex';
    };

    let currentSlide = 0, interval;
    const playSlide = () => {
        prevSlide(headSlideContent, currentSlide);
        currentSlide++;
        if(currentSlide >= headSlideContent.length) {
            currentSlide = 0;
        }
        nextSlide(headSlideContent, currentSlide);
    };

    const timeSlider = 2000;
    const startSlidePlay = (time = 1500) => {
        interval = setInterval(playSlide, time);
    };
    startSlidePlay(timeSlider);
};
export default sliderHead;