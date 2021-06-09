'use strict';

import showPopupForm from './showPopup';
import { targetForm } from './checkInputs';
import { showMessage, statusMessage } from './showMessage';
import { clearInputs } from './clearInputs';

const errorMessage = 'Ошибка отправки. Попробуйте еще раз позже.',
        errorColor = '#fe193f',
        thanksForm = document.getElementById('thanks');

export const successResult = () => {
    const formElem = targetForm.children;
    for (let i = 0; i < formElem.length - 1; i++) {
        formElem[i].removeAttribute('hidden');
    }
    statusMessage.textContent = '';
    clearInputs();
    const fullForm = targetForm.closest('.popup');
    if (targetForm.closest('.popup')) {
        fullForm.style.display = 'none';
    }
    showPopupForm(thanksForm);
};

export const errorResult = (error) => {
    if (error) {
        console.error(error);
    }
    if (targetForm.id === 'banner-form') {
        const messageForm = document.getElementById('thanks-text');
        messageForm.textContent = errorMessage;
        statusMessage.textContent = '';
        showPopupForm(thanksForm);
    } else {
        showMessage(errorColor, errorMessage);
    }
};