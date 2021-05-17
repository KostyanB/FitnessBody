'use strict'
import animate from './animate';

const showPopupForm = (thanksForm) => {
    const openFreeVisit = document.querySelector('.open-free'),
        openCallback = document.querySelector('.open-callback'),
        fixedGift = document.querySelector('.fixed-gift'),
        freeVisitForm = document.getElementById('free_visit_form'),
        callbackForm = document.getElementById('callback_form'),
        formWrapper = document.querySelectorAll('.form-wrapper'),
        closefreeVisitForm = formWrapper[2].childNodes[1].childNodes[1],
        closeCallbackForm = formWrapper[1].childNodes[1].childNodes[1],
        thanksForm1 = document.getElementById('thanks'),
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

    const closeThanks = () => thanksForm.style.display = 'none';
    if (thanksForm) {
        controlForm(thanksForm, formWrapper[3]);
        setTimeout(closeThanks, 5000);
    }

    document.addEventListener('click', (e) => {
        if (e.target === openFreeVisit) {
            e.preventDefault();
            controlForm(freeVisitForm, formWrapper[2]);
        } else if (e.target === closefreeVisitForm || e.target.closest('.overlay')) {
            freeVisitForm.style.display = 'none';
        }
        if (e.target === openCallback) {
            controlForm(callbackForm, formWrapper[1]);
        } else if (e.target === closeCallbackForm || e.target.closest('.overlay')) {
            callbackForm.style.display = 'none';
        }
        if (fixedGift) {
            const giftBtn = fixedGift.childNodes[1],
                closeGiftForm = formWrapper[4].childNodes[1].childNodes[1],
                giftForm = document.getElementById('gift'),
                giftCloseBtn = document.querySelector('.gift-close');
            if (e.target === giftBtn) {
                giftBtn.style.display = 'none';
                controlForm(giftForm, formWrapper[4]);
            } else if (e.target === closeGiftForm || giftCloseBtn || e.target.closest('.overlay')) {
                giftForm.style.display = 'none';
                //giftBtn.style.display = 'inline';
            }
        }
        if (thanksForm) {
            const closeThanksForm = thanksForm.querySelectorAll('.close-form'),
                thanksCloseBtn = document.querySelector('.thanks-close');
            if (e.target === closeThanksForm || thanksCloseBtn || e.target.closest('.overlay')) {
                thanksForm.style.display = 'none';
            }
        }
    });
};
export default showPopupForm;