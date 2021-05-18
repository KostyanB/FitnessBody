'use strict'

const burgerMenu = () => {
    const menuBtn = document.querySelector('.menu-button'),
        topMenu = document.querySelector('.top-menu'),
        posMenuVert = topMenu.getBoundingClientRect().top,
        style = document.createElement('style');

    const setFix = () => {
        style.textContent = `
        .top-menu {
            position: fixed;
        }
        `;
        document.head.appendChild(style);
    };

    const removeFix = () => {
        style.textContent = `
        .top-menu {
            position: relative;
        }
        `;
        document.head.appendChild(style);
    };
    const trackScroll = () => {
        let scroll = window.pageYOffset;
        if (scroll >= posMenuVert) {
            setFix();
        } else {
            removeFix()
        }
    };
    window.addEventListener('scroll', trackScroll);
};
export default burgerMenu;