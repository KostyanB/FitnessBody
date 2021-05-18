'use strict'

import animate from './animate';
const popupMenu = () => {
    const popMenu = document.querySelector('.popup-menu'),
        menuBtn = document.getElementById('menu-button');

    const popMenuAnim = () => {
        animate({
            duration: 500,
            timing: (timeFraction) => {
                return timeFraction;
            },
            draw: (progress) => {
                const posPopup = popMenu.getBoundingClientRect().top,
                    startPosPopup = -100;
                let posMenu = startPosPopup - startPosPopup * progress;
                if (posPopup < 0) {
                    popMenu.style.transform = `translateY(${posMenu}%)`;
                }
            },
        });
    };

    const controlLink = (target) => {
        const posTarget = target.offsetTop - 20;
        animate({
            duration: 300,
            timing: (timeFraction) => {
                return timeFraction;
            },
            draw: (progress) => {
                const step = posTarget * progress;
                document.documentElement.scrollTo(0, step);
            },
        });
    };

    document.addEventListener('click', (e) => {
        if (e.target === menuBtn) {
            popMenu.style.display = 'flex';
            popMenu.style.transform = `translateY(-100%)`;
            popMenuAnim();
        }
        if (e.target.closest('.close-menu-btn')) {
            popMenu.style.display = 'none';
        }
        if (e.target.closest('.popup-links')) {
            popMenu.style.display = 'none';
            /*
            const checkLinkArr = e.target.href.split('/')[3].split('#')[0];
            if (checkLinkArr !== 'mozaika.html' || checkLinkArr !== 'schelkovo.html') {
                e.preventDefault();
                const idElem = e.target.href.split('#').substr(1);
                const rargetElem = document.getElementById(idElem);
                controlLink(rargetElem);
            }
            */
        }
    });
};
export default popupMenu;