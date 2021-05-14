'use strict'
import animate from './animate';
const showPopupForm = () => {
    const openFreeVisit = document.querySelector('.open-popup'),
        callbackBtn = document.querySelector('.callback-btn'),
        giftBtn = document.querySelector('.fixed-gift').childNodes[1],
        freeVisitForm = document.getElementById('free_visit_form'),
        callbackForm = document.getElementById('callback_form'),
        giftForm = document.getElementById('gift'),
        formWrapper = document.querySelectorAll('.form-wrapper'),
        closefreeVisitForm = formWrapper[2].childNodes[1].childNodes[1],
        closeCallbackForm = formWrapper[1].childNodes[1].childNodes[1],
        closeGiftForm = formWrapper[4].childNodes[1].childNodes[1],
        giftCloseBtn = document.querySelector('.close-btn'),
        stopPosPopup = document.documentElement.clientHeight * 0.2;

    const animForm = (wrapper) => {
        animate({
            duration: 300,
            timing: (timeFraction) => {
                return timeFraction;
            },
            draw: (progress) => {
                const popupPos = wrapper.getBoundingClientRect().top,
                    startPosPopup = -100,
                    posMenu = startPosPopup + (20 - startPosPopup) * progress;
                if (popupPos < stopPosPopup) {
                    wrapper.style.transform = `translateY(${posMenu}%)`;
                }
            },
        });
    };
    const controlForm = (tagetForm, targetWrapper) => {
        tagetForm.style.display = 'block';
        targetWrapper.style.transform = `translateY(-100%)`;
        animForm(targetWrapper);
    };
    document.addEventListener('click', (e) => {
        console.log(e.target);
        if(e.target === openFreeVisit) {
            e.preventDefault();
            controlForm(freeVisitForm, formWrapper[2]);
        } else if(e.target === closefreeVisitForm || e.target.closest('.overlay')) {
            freeVisitForm.style.display = 'none';
        }
        if(e.target === callbackBtn) {
            controlForm(callbackForm, formWrapper[1]);
        } else if(e.target === closeCallbackForm || e.target.closest('.overlay')) {
            callbackForm.style.display = 'none';
        }
        if(e.target === giftBtn) {
            giftBtn.style.display = 'none';
            controlForm(giftForm, formWrapper[4]);
        } else if(e.target === closeGiftForm || giftCloseBtn || e.target.closest('.overlay')) {
            giftForm.style.display = 'none';
            //giftBtn.style.display = 'inline';
        }
    });
};
export default showPopupForm;