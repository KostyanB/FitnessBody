'use strict'
import AddArrow from './addArrow';
const sliderCarousel = () => {

    const servicesSlider = document.querySelector('.services-slider'),
        servicesWrapper = document.querySelector('.services-wrapper'),
        sliderChild = document.querySelector('.services-slider').children;
    for (let i = 0; i < sliderChild.length; i++) {
        sliderChild[i].classList.add('services-slide_content');
    }
    const slides = document.querySelectorAll('.services-slide_content');

    const servicesBtns = new AddArrow({
        wrap: '.services-wrapper',
        wrapName: 'slider',
        placeName: 'services'
    });
    servicesBtns.init();
    const prevBtn = document.querySelector('.services-prev');
    const nextBtn = document.querySelector('.services-next');
    // установка css
    const addStyleArrow = () => {
        const style = document.createElement('style');
        style.textContent = `
        .services-wrapper .slider-arrow {
            border: none;
            background: transparent;
            top: 45%
        }
        .services-wrapper .slider-arrow.prev {
            left: 5%
        }
        .services-wrapper .slider-arrow.next {
            right: 5%
        }
        `;
        document.head.appendChild(style);
    };
    addStyleArrow();
    const responsive = [{
            breakpoint: 1400,
            slidesToShow: 5,
        },
        {
            breakpoint: 1200,
            slidesToShow: 4,
        },
        {
            breakpoint: 992,
            slidesToShow: 3,
        },
        {
            breakpoint: 768,
            slidesToShow: 2,
        },
        {
            breakpoint: 576,
            slidesToShow: 1,
        }
    ];
    let slidesToShow = 6;
    let widthSlide = Math.floor(100 / slidesToShow);
    let maxPosition;

    const addStyle = () => {
        const style = document.createElement('style');
        style.textContent = `

        .services-wrapper {
            overflow: hidden !important;
            position: relative;
        }
        .services-slider {
            will-change: transform !important;
            transition: transform 0.5s !important;
            box-sizing: border-box;
        }
        .services-slide_content {
            flex: 0 0 ${widthSlide}%;
        }
        `;
        document.head.appendChild(style);
    };

    const setOptionPosition = () => {
        widthSlide = Math.floor(100 / slidesToShow);
        maxPosition = slides.length - slidesToShow;

        addStyle();
    };
    setOptionPosition();
    // количество слайдов от разрешения экрана
    const responseInit = () => {
        const slidesDefault = slidesToShow;
        const allResponse = responsive.map(item => item.breakpoint);
        const maxResponse = Math.max(...allResponse);

        const checkResponse = () => {
        const widthWindow = document.documentElement.clientWidth;

            if (widthWindow < maxResponse) {
                for (let i = 0; i < allResponse.length; i++) {
                    if (widthWindow < allResponse[i]) {
                        slidesToShow = responsive[i].slidesToShow;
                        setOptionPosition();
                    }
                }
            } else {
                slidesToShow = slidesDefault;
                setOptionPosition();
            }
        };
        checkResponse();
        window.addEventListener('resize', checkResponse);
    };
    responseInit();

    let position = 0;
    const prevSlider = () => {
        if (position > 0) {
            --position;
            servicesSlider.style.transform = `translateX(-${position * widthSlide}%)`;
        } else if (position === 0) {
            position = maxPosition;
            servicesSlider.style.transform = `translateX(-${position * widthSlide}%)`;
        }
    };

    const nextSlider = () => {

        if (position < maxPosition) {
            ++position;
            servicesSlider.style.transform = `translateX(-${position * widthSlide}%)`;
        } else if (position === maxPosition) {
            position = 0;
            servicesSlider.style.transform = 'translateX(0%)';
        }
    };
    document.addEventListener('click', (e) => {
        if (e.target.closest('.services-prev')) {
            prevSlider();
        } else if (e.target.closest('.services-next')) {
            nextSlider();
        }
    });
};
export default sliderCarousel;