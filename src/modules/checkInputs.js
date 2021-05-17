'use strict'
import sendForm from './sendForm';

const checkInputs = () => {
    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 1.2em';
    const unCheckMessage = 'Вы не отметили согласие',
        unCheckClubMessage = 'Вы не выбрали клуб';
    const checkBoxes = document.querySelectorAll('[type="checkbox"]');
    checkBoxes.forEach(item => item.removeAttribute('required'));
    const formPromo = document.querySelector('.form-promo');
    if(formPromo) {
        formPromo.removeAttribute('required');
    }

    const checkForm = (targetForm) => {
        const inputs = targetForm.querySelectorAll('input');
        const showMessage = (message) => {
            statusMessage.style.color = '#fe193f';
            statusMessage.textContent = message;
            setTimeout(() => statusMessage.textContent = '', 3000);
        };

        if (targetForm.closest('footer')) {
            const clubCheck = targetForm.querySelectorAll('[type="radio"]');
            if (!clubCheck[0].checked && !clubCheck[1].checked) {
                showMessage(unCheckClubMessage);
            } else if (clubCheck[0].checked || clubCheck[1].checked){
                sendForm(targetForm, inputs, statusMessage);
            }
        } else {
            const targetCheck = targetForm.querySelector('[type="checkbox"]');
            targetCheck.removeAttribute('required');
            if (!targetCheck.checked) {
                showMessage(unCheckMessage);
            } else {
                sendForm(targetForm, inputs, statusMessage);
            }
        }
    };

    document.body.addEventListener('submit', (e) => {
        e.preventDefault();
        const targetForm = e.target;
        if (targetForm) {
            targetForm.appendChild(statusMessage);
            checkForm(targetForm);
        }
    });
};
export default checkInputs;