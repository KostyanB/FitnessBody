'use strict'

import calc from './calc';
const validInput = () => {
    const correctBase = {
        correctName: true,
        correctTel: true,
    };
    document.body.addEventListener('change', (e) => {

        // Показ некорректного ввода и блок submit
        const showError = (error) => {
            const selectForm = e.target.closest('form');

            if (selectForm) {
                const submitBtn = selectForm.querySelector('.btn');
                //подсветка ошибок
                if (error) {
                    e.target.style.border = '2px solid #fe193f'; //error
                } else {
                    e.target.style.border = '2px solid #19fe52';
                }
                // сводная проверка всех полей
                if (Object.values(correctBase).every(item => item)) {
                    submitBtn.removeAttribute('disabled');
                } else {
                    submitBtn.setAttribute('disabled', 'true');
                }
            }
        };
        // Корректировка ФИО
        if (e.target.className === 'form-name') {
            e.target.value = e.target.value.replace(/\s+/g, ' ');
            let nameData = e.target.value.trim().split(' '),
                userName = '';
            nameData.forEach(item => {
                userName += `${item.charAt(0).toUpperCase() + item.substring(1)} `;
            });
            if (userName === ' ') { //если только пробелы - value ''
                e.target.value = '';
                correctBase.correctName = false;
                showError(true);
            } else if (userName.length < 3) {
                e.target.value = userName;
                correctBase.correctName = false;
                showError(true);
            } else {
                e.target.value = userName;
                correctBase.correctName = true;
                showError(false);
            }
        }
        // валидация телефона
        if (e.target.className === 'form-phone') {
            e.target.value = e.target.value.replace(/^\+\d{1}\s/g, '+7 ');
            // проверка на количество цифр
            const corrNum = e.target.value.replace(/[\s\+\(\)-]*/g, '');
            if (corrNum.length < 11) {
                correctBase.correctTel = false;
                showError(true);
            } else {
                correctBase.correctTel = true;
                showError(false);
            }
        }
        // проверка промокода
        if (e.target.className === 'form-promo') {
            if(e.target.value && !/^тело2021$/gi.test(e.target.value)) {
                e.target.style.border = '2px solid #fe193f';
                calc(false);
            } else if (e.target.value && /^тело2021$/gi.test(e.target.value)) {
                e.target.style.border = '2px solid #19fe52';
                calc(true);
            } else {
                e.target.style.border = '1px solid #b7b7b7';
                calc(false);
            }
        }
    });
};
export default validInput;