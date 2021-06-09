'use strict';

const calc = () => {
    const cardOrder = document.getElementById('card_order');
    if (cardOrder.className !== 'calc-card-order') {
        return;
    } else {
        const priceTotal = cardOrder.querySelector('#price-total'),
            formPromo = document.querySelector('.form-promo'),
            clubs = cardOrder.querySelectorAll('[name="club-name"]'),
            cards = cardOrder.querySelectorAll('[name="card-type"]');

        let targetClub, targetTime, price;

        const basePrice = {
            'mozaika1': 1999,
            'mozaika6': 9990,
            'mozaika9': 13990,
            'mozaika12': 19990,
            'schelkovo1': 2999,
            'schelkovo6': 14990,
            'schelkovo9': 21990,
            'schelkovo12': 24990,
        };

        const calculator = (sale, price) => {
            if (priceTotal) {
                priceTotal.textContent = Math.round(price * sale);
            }
        };

        const setTarif = (sale = 1) => {
            cards.forEach(item => {
                if (item.checked) {
                    targetTime = item.value;
                }
            });
            clubs.forEach(item => {
                if (item.checked) {
                    targetClub = item.value;
                }
            });
            const tarif = `${targetClub}${targetTime}`;
            price = basePrice[tarif];
            calculator(sale, price);
        };
        setTarif();

        const checkPromo = () => {
            const promo = formPromo.value;
            if (promo && /^тело2021$/gi.test(promo)) {
                setTarif(0.7);
            } else {
                setTarif(1);
            }
        };
        checkPromo();

        cardOrder.addEventListener('click', (e) => {

            if (e.target.name === 'card-type') {
                if (e.target.value) {
                    checkPromo();
                }
            }
            if (e.target.name === 'club-name') {
                checkPromo();
            }
        });

        const formChange = () => {
            if (formPromo) {
                formPromo.addEventListener('change', () => {
                    checkPromo();
                });
            }
        };
        formChange();
    }
};

export default calc;