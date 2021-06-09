'use strict';
import sendForm from './sendForm';
import { showMessage, statusMessage } from './showMessage';

export let targetForm; //форма из которой отправлена заявка

// проверка инпутов
export const checkInputs = () => {
    const checkBoxes = document.querySelectorAll('[type="checkbox"]'),
        formPromo = document.querySelector('.form-promo'),
        unCheckMessage = 'Вы не отметили согласие',
        unCheckClubMessage = 'Вы не выбрали клуб';

    checkBoxes.forEach(item => item.removeAttribute('required'));

    if(formPromo) {
        formPromo.removeAttribute('required');
    }

    const checkForm = () => {

        if (targetForm.closest('footer')) {
            const clubCheck = targetForm.querySelectorAll('[type="radio"]');
            // проверка выбран ли клуб в футере
            if (!clubCheck[0].checked && !clubCheck[1].checked) {
                showMessage('#fe193f', unCheckClubMessage);
            } else if (clubCheck[0].checked || clubCheck[1].checked) {
                sendForm();
            }
        } else {
            const targetCheck = targetForm.querySelector('[type="checkbox"]');
            targetCheck.removeAttribute('required');
            // проверка выбран ли чекбокс перс. данных
            if (!targetCheck.checked) {
                showMessage('#fe193f', unCheckMessage);
            } else {
                sendForm();
            }
        }
    };

    document.body.addEventListener('submit', (e) => {
        e.preventDefault();
        const target = e.target;
        if (target) {
            targetForm = target;
            targetForm.appendChild(statusMessage);
            checkForm();
        }
    });
};