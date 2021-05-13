'use strict'
import animate from './animate';
const showVisitForm = () => {
    const openPopup = document.querySelector('.open-popup'),
        freeVisitForm = document.getElementById('free_visit_form'),
        freeVisitFormWrapper = document.querySelectorAll('.form-wrapper')[2],
        closefreeVisitForm = freeVisitFormWrapper.childNodes[1].childNodes[1],
        stopPosPopup = document.documentElement.clientHeight * 0.2;

    const animFreeVisitForm = () => {
        animate({
            duration: 300,
            timing: (timeFraction) => {
                return timeFraction;
            },
            draw: (progress) => {
                const popupPos = freeVisitFormWrapper.getBoundingClientRect().top,
                    startPosPopup = -100,
                    posMenu = startPosPopup + (20 - startPosPopup) * progress;
                if (popupPos < stopPosPopup) {
                    freeVisitFormWrapper.style.transform = `translateY(${posMenu}%)`;
                }
            },
        });
    };
    document.addEventListener('click', (e) => {
        if(e.target === openPopup) {
            e.preventDefault();
            freeVisitForm.style.display = 'block';
            freeVisitFormWrapper.style.transform = `translateY(-100%)`;
            animFreeVisitForm();
        }
        if(e.target === closefreeVisitForm || e.target.closest('.overlay')) {
            freeVisitForm.style.display = 'none';
        }
    });
};
export default showVisitForm;