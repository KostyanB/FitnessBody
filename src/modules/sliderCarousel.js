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

    let slidesToShow = 5;
    let widthSlide = Math.floor(100 / slidesToShow);
    let maxPosition;
    // установка css
    const addStyle = () => {
        let style = document.getElementById('services-style');
        if (!style) {
            style = document.createElement('style');
            style.id = 'services-style';
        }
        style.textContent = `
        .services-wrapper {
            overflow: hidden !important;
            position: relative;
            padding-left: 0;
            padding-right: 0;
        }
        .services-slider {
            will-change: transform !important;
            transition: transform 0.5s !important;
            box-sizing: border-box;
            padding-left: 0;
            padding-right: 0;
        }
        .services-slide_content {
            flex: 0 0 ${widthSlide}%;
            margin-left: 0 !important;;
            margin-right: 0 !important;;
            padding-left: 6px;
            padding-right: 6px;
        }
        .services-wrapper .slider-arrow {
            border: none;
            background: transparent;
            top: 45%
        }
        .services-wrapper .slider-arrow.prev {
            left: 0;
        }
        .services-wrapper .slider-arrow.next {
            right: 0;
        }
        `;
        document.head.appendChild(style);
    };
    addStyle();

    const servicesBtns = new AddArrow({
        wrap: '.services-wrapper',
        wrapName: 'slider',
        placeName: 'services'
    });
    servicesBtns.init();
    // const prevBtn = document.querySelector('.services-prev');
    // const nextBtn = document.querySelector('.services-next');
    // брекпойнты для отображения слайдов
    const responsive = [{
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

    const setOptionPosition = () => {
        widthSlide = 100 / slidesToShow;
        maxPosition = slides.length - slidesToShow;
        const sliderWidth = servicesSlider.clientWidth / slidesToShow;
        slides.forEach(item => {
            item.style.flex = `0 0 ${widthSlide}%`;
            item.style.width = `${sliderWidth}px`;
        });
        servicesSlider.style.transform = 'translateX(0%)';
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
    // прокрутка слайдов
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