'use strict'
import AddArrow from './addArrow';
import AddDots from './addDots';
const photoSlider = () => {
    const gallerySlider = document.querySelector('.gallery-slider'),
        photoSlides = document.querySelectorAll('.photo-slide');

    for (let i = 1; i < photoSlides.length; i++) {
        photoSlides[i].style.display = 'none';
    }
    // установка css
    const addClass = () => {
        const style = document.createElement('style');
        style.textContent = `
            .gallery-slider {
                position: relative;
            }
            .gallery-slider .slider-arrow {
                background: transparent;
                border: none;
                cursor: default !important;
            }
            .gallery-slider .slider-arrow span {
                cursor: pointer;
            }
            `;
        document.head.appendChild(style);
    };
    addClass();
    // добавление dot на страницу
    const galleryDots = new AddDots({
        wrap: '.gallery-slider',
        wrapName: 'slider',
        slidesName: '.photo-slide',
    });
    galleryDots.init();
    // добавление кнопок на страницу
    const galleryBtns = new AddArrow({
        wrap: '.gallery-slider',
        wrapName: 'slider',
        placeName: 'gallery'
    });
    galleryBtns.init();

    const galleryPrevBtn = document.querySelector('.slider-arrow.prev'),
        galleryNextBtn = document.querySelector('.slider-arrow.next');

    // смена слайдов и dot
    const prevSlide = (elem, index) => {
        elem[index].style.display = 'none';
    };
    const nextSlide = (elem, index) => {
        elem[index].style.display = 'block';
    };
    const prevDot = (elem, index, strClass) => {
        elem[index].classList.remove(strClass);
    };
    const nextDot = (elem, index, strClass) => {
        elem[index].classList.add(strClass);
    };
    // автопрокрутка слайдов и dot
    let currentSlide = 0,
        interval;
    const sliderDot = document.querySelectorAll('.slider-dot');

    const playSlide = () => {
        prevSlide(photoSlides, currentSlide);
        prevDot(sliderDot, currentSlide, 'slick-active');
        currentSlide++;
        if (currentSlide >= photoSlides.length) {
            currentSlide = 0;
        }
        nextSlide(photoSlides, currentSlide);
        nextDot(sliderDot, currentSlide, 'slick-active');
    };

    const startSlidePlay = () => {
        interval = setInterval(playSlide, 2000);
    };
    startSlidePlay();

    const stopSlidePlay = () => {
        clearInterval(interval);
    };
    // переключение слайдов кнопками и дотами
    gallerySlider.addEventListener('click', (e) => {
        prevSlide(photoSlides, currentSlide);
        prevDot(sliderDot, currentSlide, 'slick-active');
        if (e.target.closest('.gallery-next')) {
            currentSlide++;
        } else if (e.target.closest('.gallery-prev')) {
            currentSlide--;
        } else if (e.target.closest('.slider-dot')) {
            sliderDot.forEach((elem, index) => {
                if (elem === e.target.parentNode) {
                    currentSlide = index;
                }
            });
        }

        if (currentSlide < 0) {
            currentSlide = photoSlides.length - 1;
        } else if (currentSlide >= photoSlides.length) {
            currentSlide = 0;
        }

        nextSlide(photoSlides, currentSlide);
        nextDot(sliderDot, currentSlide, 'slick-active');
    });

    // остановка прокрутки при наведении мышки на кнопки и доты
    gallerySlider.addEventListener('mouseenter', (e) => {
        if (e.target.parentNode.classList.contains('slider-arrow') || e.target.parentNode.classList.contains('slider-dot')) {
            stopSlidePlay();
        }
    });

    gallerySlider.addEventListener('mouseleave', (e) => {
        if (e.target === galleryNextBtn.firstChild || e.target === galleryPrevBtn.firstChild || e.target.parentNode.className === 'slider-dot') {
            startSlidePlay();
        }
    });
};
export default photoSlider;