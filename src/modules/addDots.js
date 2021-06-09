'use strict';

class AddDots {
    constructor({
        wrap,
        wrapName,
        slidesName,
    })
    {
        this.wrap = document.querySelector(wrap);
        this.dotsWrap = document.createElement('ul');
        this.dotsWrap.className = 'slider-dots';
        this.wrap.append(this.dotsWrap);
        this.wrapName = wrapName;
        this.slidesName = slidesName;
    }

    addDot() {
        const slides = document.querySelectorAll(this.slidesName);
        let newDot = document.createElement('li');
        newDot.className = `${this.wrapName}-dot`;
        slides.forEach((item, i) => {
            item[i] = newDot.cloneNode(true);
            this.dotsWrap.append(item[i]);
        });
        const sliderDot = document.querySelectorAll(`.${this.wrapName}-dot`);
        sliderDot[0].classList.add('slick-active');
    }
    init() {
        this.addDot();
    }
}
export default AddDots;