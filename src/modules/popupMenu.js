'use strict'

import animate from './animate';

const popupMenu = () => {
    const popMenu = document.querySelector('.popup-menu'),
        menuBtn = document.getElementById('menu-button');
    let menuBlocks = document.querySelectorAll('.menu-block');

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

    const menuLinkAnim = (target, editPos) => {
        const posTarget = target.offsetTop - editPos;
        animate({
            duration: 500,
            timing: (timeFraction) => {
                return timeFraction;
            },
            draw: (progress) => {
                const step = posTarget * progress;
                document.documentElement.scrollTo(0, step);
            },
        });
    };

    const linkControl = (e, block, editPos) => {
        block.forEach(item => {
            const idElem = e.target.href.split('#')[1];
            if (item.id === idElem) {
                e.preventDefault();
             const rargetElem = document.getElementById(idElem);
                 menuLinkAnim(rargetElem, editPos);
                 return;
            }
         });
    };

    document.addEventListener('click', (e) => {
        menuBlocks = document.querySelectorAll('.menu-block')
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
            linkControl(e, menuBlocks, 20);
        }
        if (e.target.closest('.main-links')) {
            linkControl(e, menuBlocks, 50);
        }
    });
};
export default popupMenu;