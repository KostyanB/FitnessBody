'use strict';
import animate from './rafAnimate';

const showPopupForm = (thanksForm) => {
    const openFreeVisit = document.querySelector('.open-free'),
        openCallback = document.querySelector('.open-callback'),
        giftBtn = document.querySelector('.fixed-gift img'),
        freeVisitForm = document.getElementById('free_visit_form'),
        callbackForm = document.getElementById('callback_form'),
        formWrapper = document.querySelectorAll('.form-wrapper'),
        closeFormIcons = document.querySelectorAll('.close_icon');

    const animForm = (wrapper) => {
        animate({
            duration: 300,
            timing: (timeFraction) => {
                return timeFraction;
            },
            draw: (progress) => {
                const startPosPopup = -100,
                    posMenu = startPosPopup + (0 - startPosPopup) * progress;
                    wrapper.style.transform = `translateY(${posMenu}%)`;
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
        } else if (e.target === closeFormIcons[1] || e.target.closest('.overlay')) {
            freeVisitForm.style.display = 'none';
        }

        if (e.target === openCallback) {
            controlForm(callbackForm, formWrapper[1]);
        } else if (e.target === closeFormIcons[0] || e.target.closest('.overlay')) {
            callbackForm.style.display = 'none';
        }

        if (giftBtn) {
            const  giftForm = document.getElementById('gift'),
                giftCloseBtn = document.querySelector('.gift-close');
            if (e.target === giftBtn) {
                giftBtn.style.display = 'none';
                controlForm(giftForm, formWrapper[4]);
            } else if (e.target === closeFormIcons[3] || giftCloseBtn || e.target.closest('.overlay')) {
                giftForm.style.display = 'none';
            }
        }

         if (thanksForm) {
            const closeThanksForm = thanksForm.querySelectorAll('.close-form'),
                thanksCloseBtn = document.querySelector('.thanks-close');
            if (e.target === closeFormIcons[2] || thanksCloseBtn || e.target.closest('.overlay')) {
                thanksForm.style.display = 'none';
            }
         }
    });
};
export default showPopupForm;