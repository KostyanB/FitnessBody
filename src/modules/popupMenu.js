'use strict'

import animate from './animate';

const popupMenu = () => {
    const popMenu = document.querySelector('.popup-menu'),
        menuBtn = document.getElementById('menu-button');

    const popMenuAnim = () => {
        animate({
            duration: 300,
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

    document.addEventListener('click', (e) => {
        if (e.target === menuBtn) {
            popMenu.style.display = 'flex';
            popMenu.style.transform = `translateY(-100%)`;
            popMenuAnim();
        }
        if (e.target.closest('.close-menu-btn')) {
            popMenu.style.display = 'none';
        }
    });
};
export default popupMenu;