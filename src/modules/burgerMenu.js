'use strict'

const burgerMenu = () => {
    const topMenu = document.querySelector('.top-menu'),
        posMenuVert = topMenu.getBoundingClientRect().top,
        style = document.createElement('style');


    const setFixBurger = () => {
        style.textContent = `
        #club-selector {
            z-index: 5000;
        }
        .top-menu {
            position: fixed;
        }
        `;
        document.head.appendChild(style);
    };

    const removeFixBurger = () => {
        style.textContent = `
        #club-selector {
            z-index: 5000;
        }
        .top-menu {
            position: relative;
        }
        `;
        document.head.appendChild(style);
    };

    const trackScroll = () => {
        let scroll = window.pageYOffset;
        if (scroll >= posMenuVert) {
            setFixBurger();
        } else {
            removeFixBurger();
        }
    };
    window.addEventListener('scroll', trackScroll);
};
export default burgerMenu;