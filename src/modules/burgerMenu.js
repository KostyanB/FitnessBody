'use strict';

const burgerMenu = () => {
    const topMenu = document.querySelector('.top-menu'),
        posMenuVert = topMenu.getBoundingClientRect().top;

    const trackScroll = () => {
        const scroll = window.pageYOffset;
        if (scroll >= posMenuVert) {
            topMenu.style.position = 'fixed';
        } else {
            topMenu.style.position = 'relative';
        }
    };
    window.addEventListener('scroll', trackScroll);
};
export default burgerMenu;