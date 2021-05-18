'use strict'
const calc = (promo = false) => {
    const cardOrder = document.getElementById('card_order'),
        priceTotal = cardOrder.querySelector('#price-total');

    let targetClub = 'mozaika',
        targetTime = 1,
        basePrice = 1999;

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

    const calculator = (sale) => {
        let tarif = `${targetClub}${targetTime}`;
        basePrice = price[tarif];
        if (priceTotal) {
            priceTotal.textContent = Math.round(basePrice); // * sale);
        }

    };
    calculator();
    /*
    const checkPromo = () => {
        if (promo) {
            calculator(0.7);
        } else {
            calculator(1);
        }
    };
    checkPromo();
    */
    cardOrder.addEventListener('click', (e) => {
        if (e.target.name === 'card-type') {
            if (e.target.value) {
                targetTime = e.target.value;
                calculator();
                //checkPromo();
            }
        }
        if (e.target.name === 'club-name') {
            targetClub = e.target.value;
            calculator();
            //checkPromo();
        }
    });
};
export default calc;