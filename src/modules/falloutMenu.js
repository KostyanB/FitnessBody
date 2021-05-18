'use strict'

import animate from './animate';
const dropMenu = () => {
    const clubSelector = document.getElementById('club-selector'),
        falloutActivator = document.getElementById('fallout-activator');

    const menuAnim = () => {
        const stopPosMenu = falloutActivator.getBoundingClientRect().bottom + 15;
        animate({
            duration: 500,
            timing: (timeFraction) => {
                return timeFraction;
            },
            draw: (progress) => {
                const menuPos = clubSelector.getBoundingClientRect().top,
                    startPosMenu = -100,
                    posMenu = startPosMenu + (stopPosMenu - startPosMenu) * progress;
                if (menuPos < stopPosMenu) {
                    clubSelector.style.transform = `translateY(${posMenu}%)`;
                }
            },
        });
    };

    document.addEventListener('click', (e) => {
        if (e.target === falloutActivator) {
            clubSelector.style.display = 'block';
            clubSelector.style.transform = `translateY(-100%)`;
            menuAnim();
        } else if (e.target !== falloutActivator) {
            clubSelector.style.display = 'none';
        }
    });
};
export default dropMenu;