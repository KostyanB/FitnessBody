'use strict'

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
                userName = '', baseName = '';
            nameData.forEach(item => {
                baseName += `${item.charAt(0).toUpperCase() + item.substring(1)} `;
                userName = baseName.trim();

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

    });
};
export default validInput;