'use strict';
import maskPhone from './maskPhone';

const maskInput = () => {
    document.body.addEventListener('input', (e) => {

        // числовые input
        if (e.target.placeholder === 'Общая площадь*' || e.target.placeholder === 'Количество помещений' || e.target.placeholder === 'Срок исполнения (в днях)') {
            e.target.value = e.target.value.replace(/[^0-9]/g, '');
        }
        // Ваше имя
        if (e.target.className === 'form-name') {
            e.target.value = e.target.value.replace(/[^а-яА-ЯёЁ-\s]/g, '');
        }
        // Номер телефона
        if (e.target.className === 'form-phone') {
            //e.target.setAttribute('type', 'text');
            maskPhone('.form-phone');
        }
        // Промокод
        if (e.target.className === 'form-promo') {
            e.target.value = e.target.value.replace(/[^а-яА-ЯёЁ0-9]/gm, '');
        }
    });
};
export default maskInput;