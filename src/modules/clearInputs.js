'use strict';

import calc from './calculator';
import { targetForm } from './checkInputs';

export const clearInputs = () => {
    const inputs = targetForm.querySelectorAll('input');
    inputs.forEach(item => {
        if (item.className === 'form-name' || item.className === 'form-phone' || item.className === 'form-promo') {
            item.value = '';
            item.removeAttribute('style');
        }
        if (item.className === 'form-promo') {
            calc();
        }
    });
    const checkBox = targetForm.querySelector('[type="checkbox"]');
    if (checkBox) {
        checkBox.checked = "false";
    }
};