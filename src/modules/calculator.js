'use strict'
const calc = () => {
    const cardOrder = document.getElementById('card_order'),
        priceTotal = cardOrder.querySelector('#price-total'),
        formPromo = document.querySelector('.form-promo');

    let targetClub = 'mozaika',
        targetTime = 1,
        basePrice = 1999,
        sale = 1;

    const price = {
        'mozaika1': 1999,
        'mozaika6': 9990,
        'mozaika9': 13990,
        'mozaika12': 19990,
        'schelkovo1': 2999,
        'schelkovo6': 14990,
        'schelkovo9': 21990,
        'schelkovo12': 24990,
    };

    const calculator = () => {
        if (priceTotal) {
            priceTotal.textContent = Math.round(basePrice * sale);
        }
    };
    calculator();

    const setTarif = () => {
        let tarif = `${targetClub}${targetTime}`;
        basePrice = price[tarif];
        calculator();
    };
    setTarif();

    cardOrder.addEventListener('click', (e) => {
        if (e.target.name === 'card-type') {
            if (e.target.value) {
                targetTime = e.target.value;
                setTarif();
            }
        }
        if (e.target.name === 'club-name') {
            targetClub = e.target.value;
            setTarif();
        }
    });

    const formChange = () => {
        if (formPromo) {
            formPromo.addEventListener('change', (e) => {
                if (e.target.value && /^тело2021$/gi.test(e.target.value)) {
                    sale = 0.7;
                    setTarif();
                } else {
                    sale = 1;
                    setTarif();
                }
            });
        }
    };
    formChange();
};

export default calc;