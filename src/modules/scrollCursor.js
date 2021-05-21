'use strict'

const scrollCursor = () => {
    const toTop = document.getElementById('totop'),
        wrapToTop = toTop.parentNode,
        firstSection = document.querySelector('section'),
        topBtn = document.querySelector('.fa-arrow-up');

    wrapToTop.setAttribute('hidden', 'true');

    const goTop = () => {
        document.addEventListener('click', (e) => {
            if (e.target === topBtn) {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth' //плавный скролл
                });
            }
        });
    };

    window.addEventListener('scroll', () => {
        const firstSectionPos = firstSection.getBoundingClientRect().bottom;
        if (firstSectionPos < 50) {
            wrapToTop.removeAttribute('hidden');
            goTop();
        } else {
            wrapToTop.setAttribute('hidden', 'true');
        }
    });
};
export default scrollCursor;