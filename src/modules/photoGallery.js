'use strict'

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
            .slider-arrow {
                background: transparent;
                border: none;
                cursor: default !important;
            }
            .slider-arrow span {
                cursor: pointer;
            }
            `;
        document.head.appendChild(style);
    };
    addClass();
    // добавление dot на страницу
    const galleryDots = document.createElement('ul');
    galleryDots.className = 'slider-dots';
    gallerySlider.append(galleryDots);
    const addDot = () => {

        let newDot = document.createElement('li');
        newDot.innerHTML = '<button></button>';
        newDot.className = 'slider-dot';
        photoSlides.forEach((item, i) => {
            item[i] = newDot.cloneNode(true);
            galleryDots.append(item[i]);
        });
        const sliderDot = document.querySelectorAll('.slider-dot');
        sliderDot[0].classList.add('slick-active');
    };
    addDot();
    // добавление кнопок на страницу
    const addBnt = () => {
        const prevBtn = document.createElement('button'),
            nextBtn = document.createElement('button');
        prevBtn.className = 'slider-arrow prev';
        nextBtn.className = 'slider-arrow next';
        prevBtn.innerHTML = '<span><img src="./images/arrow-left.png"></span>';
        nextBtn.innerHTML = '<span><img src="./images/arrow-right.png"></span>';
        gallerySlider.prepend(prevBtn);
        gallerySlider.append(nextBtn);
    };
    addBnt();

    const galleryPrevBtn = document.querySelector('.slider-arrow.prev'),
        galleryNextBtn = document.querySelector('.slider-arrow.next');

    // автопрокрутка слайдов
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
        if (!e.target.parentNode.matches('.slider-arrow, .slider-dot')) {
            return;
        }

        prevSlide(photoSlides, currentSlide);
        prevDot(sliderDot, currentSlide, 'slick-active');
        if (e.target.closest('.next')) {
            currentSlide++;
        } else if (e.target.closest('.prev')) {
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
    gallerySlider.addEventListener('mouseover', (e) => {
        if (e.target.parentNode.classList.contains('slider-arrow') || e.target.parentNode.classList.contains('slider-dot')) {
            stopSlidePlay();
        }
    });
    galleryPrevBtn.firstChild.addEventListener('mouseleave', (e) => {
        startSlidePlay();
    });
    galleryNextBtn.firstChild.addEventListener('mouseleave', (e) => {
        startSlidePlay();
    });
    gallerySlider.addEventListener('mouseout', (e) => {
        if (e.target.parentNode.className === 'slider-dot') {
            startSlidePlay();
        }
    });
};
export default photoSlider;