'use strict'

const scrollToLink = () => {
    const popMenu = document.querySelector('.popup-menu'),
        topMenu = document.querySelector('.main-links');

    const linkGo = (menu, e) => {
        const links = menu.querySelectorAll('a[href^="#"]');
        const idElem = e.target.href.split('#')[1];
        const topOffset = document.querySelector('.top-menu').offsetHeight;
        if (idElem) {
            links.forEach(item => {
                let href = item.getAttribute('href').substring(1);
                if (href === idElem) {
                    e.preventDefault();
                    const scrollTarget = document.getElementById(href);
                    const elementPosition = scrollTarget.getBoundingClientRect().top;
                    const offsetPosition = elementPosition - topOffset;
                    window.scrollBy({
                        top: offsetPosition, // 0 если не нужен отступ сверху
                        behavior: 'smooth' //плавный скролл
                    });
                }
            });
        }
    };

    document.addEventListener('click', (e) => {
        if (e.target.closest('.popup-links')) {
            popMenu.style.display = 'none';
            const menu = document.querySelector('.popup-links');
            linkGo(menu, e);
        }

        if (e.target.closest('.main-links')) {
            console.log('e.target: ', e.target);
            if (e.target === topMenu || e.target.matches('.scroll')) {
                return;
            } else {
                const menu = document.querySelector('.main-links');
                linkGo(menu, e);
            }
        }
    });

};
export default scrollToLink;