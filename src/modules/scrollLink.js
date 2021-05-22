'use strict'

const scrollToLink = () => {
    const popMenu = document.querySelector('.popup-menu'),
        topMenu = document.querySelector('.main-links'),
        footerLogo = document.getElementById('footer-logo');

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
    const addLink = (e, menuClass) => {
        const menu = document.querySelector(menuClass);
        console.log('menu: ', menu);

        const idElem = e.target.href.split('#')[1];
        if (idElem) {
            const links = menu.querySelectorAll('a[href^="#"]');
            links.forEach(item => {
                let href = item.getAttribute('href').substring(1);
                if (idElem === href) {
                    e.preventDefault();
                    goLink(href);
                }
            });
        }
    };

    document.addEventListener('click', (e) => {
        if (e.target.closest('.popup-links')) {
            popMenu.style.display = 'none';
            //const menu = document.querySelector('.popup-links');
            addLink(e, '.popup-links');
        }

        if (e.target.closest('.main-links')) {
            if (e.target === topMenu || e.target.matches('.scroll')) {
                return;
            } else {
                //const menu = document.querySelector('.main-links');
                addLink(e, '.main-links');
            }
        }

        if (e.target.closest('.footer-left')) {
            if (e.target.matches('a[href]')) {
                //const menu = document.querySelector('.footer-left');
                addLink(e, '.footer-left');
            }
        }
    });

};
export default scrollToLink;