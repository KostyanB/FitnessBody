'use strict'

import animate from './animate';
const scrollCursor = () => {
    const toTop = document.getElementById('totop'),
        wrapToTop = toTop.parentNode,
        firstSection = document.querySelector('section');

    wrapToTop.setAttribute('hidden', 'true');

    const trackToTop = () => {
        toTop.addEventListener('click', (e) => {
            e.preventDefault();
            const docScrollPos = document.documentElement.scrollTop;
            animate({
                duration: 300,
                timing: (timeFraction) => {
                    return timeFraction;
                },
                draw: (progress) => {
                    const docPos = docScrollPos * (1 - progress);
                    if (docPos >= 0) {
                        document.documentElement.scrollTo(0, docPos);
                    }
                },
            });

        });
    };

    window.addEventListener('scroll', () => {
        const firstSectionPos = firstSection.getBoundingClientRect().bottom;
        if (firstSectionPos < 50) {
            wrapToTop.removeAttribute('hidden');
            trackToTop();
        } else {
            wrapToTop.setAttribute('hidden', 'true');
        }
    });

};
export default scrollCursor;