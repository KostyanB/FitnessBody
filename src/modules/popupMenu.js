'use strict';
import animate from './rafAnimate';

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
                const startPosPopup = -100,
                    posMenu = startPosPopup - startPosPopup * progress;
                popMenu.style.transform = `translateY(${posMenu}%)`;
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