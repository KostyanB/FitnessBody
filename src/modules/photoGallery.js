'use strict'
const photoSlider = () => {
    const gallerySlider = document.querySelector('.gallery-slider'),
    galleryWrapper = document.querySelector('.gallery-wrapper'),
    photoSlides = document.querySelectorAll('.photo-slide'),
    prevBtn = document.createElement('button'),
    nextBtn = document.createElement('button');
    //console.log('photoSlides: ', photoSlides);


        //prevBtn.className = 'slider-dots';
        //nextBtn.className = 'slider-dots';



        //galleryWrapper.appendChild(prevBtn);
       //galleryWrapper.appendChild(nextBtn);

    for(let i = 1; i < photoSlides.length; i++) {
        photoSlides[i].style.display = 'none';
    }
    const prevSlide = (elem, index) => {
        elem[index].style.display = 'none';
    };

    const nextSlide = (elem, index) => {
        elem[index].style.display = 'block';
    };

    let currentSlide = 0, interval;
    const playSlide = () => {
        prevSlide(photoSlides, currentSlide);
        currentSlide++;
        if(currentSlide >= photoSlides.length) {
            currentSlide = 0;
        }
        nextSlide(photoSlides, currentSlide);
    };

    const timeSlider = 2000;
    const startSlidePlay = (time = 1500) => {
        interval = setInterval(playSlide, time);
    };
    startSlidePlay(timeSlider);


};
export default photoSlider;