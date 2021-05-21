'use strict'

const scrollToLink = () => {
    const popMenu = document.querySelector('.popup-menu'),
        topMenu = document.querySelector('.main-links');

    // скролл на секцию
    const goLink = (href) => {
        const topOffset = document.querySelector('.top-menu').offsetHeight,
            scrollTarget = document.getElementById(href),
            elementPosition = scrollTarget.getBoundingClientRect().top,
            offsetPosition = elementPosition - topOffset;
        window.scrollBy({
            top: offsetPosition, // 0 если не нужен отступ сверху
            behavior: 'smooth' //плавный скролл
        });
    };
    // получение ссылки на секцию
    const addLink = (menu, e) => {
        const idElem = e.target.href.split('#')[1];
        if (idElem) {
            const links = menu.querySelectorAll('a[href^="#"]');
            links.forEach(item => {
                let href = item.getAttribute('href').substring(1);
                if (href === idElem) {
                    e.preventDefault();
                    goLink(href);
                }
            });
        }
    };

    document.addEventListener('click', (e) => {
        if (e.target.closest('.popup-links')) {
            popMenu.style.display = 'none';
            const menu = document.querySelector('.popup-links');
            addLink(menu, e);
        }

        if (e.target.closest('.main-links')) {
            if (e.target === topMenu || e.target.matches('.scroll')) {
                return;
            } else {
                const menu = document.querySelector('.main-links');
                addLink(menu, e);
            }
        }
    });

};
export default scrollToLink;