'use strict'
import calc from './calculator';
import showPopupForm from './showForm';

const sendForm = (form, inputs, statusMessage) => {
    const errorMessage = 'Произошла ошибка отправки. Попробуйте еще раз позже',
        loadMessage = 'Отправка...',
        loadColor = '#19b5fe',
        errorColor = '#fe193f',
        thanksForm = document.getElementById('thanks');

    // clear inputs
    const clearInputs = () => {
        inputs.forEach(item => {
            if (item.className === 'form-name' || item.className === 'form-phone' || item.className === 'form-promo') {
                item.value = '';
                item.removeAttribute('style');
            }
            if (item.className === 'form-promo') {
                calc();
            }
        });
        const checkBox = form.querySelector('[type="checkbox"]');
        if (checkBox) {
            checkBox.checked = "false";
        }
    };

    // сообщение ОК и очистка формы
    const successResult = () => {
        const formElem = form.children;
        for (let i = 0; i < formElem.length - 1; i++) {
            formElem[i].removeAttribute('hidden');
        }
        statusMessage.textContent = '';
        clearInputs();
        const fullForm = form.closest('.popup');
        if (form.closest('.popup')) {
            fullForm.style.display = 'none';
        }
        showPopupForm(thanksForm);
    };
    // отображение результата отправки
    const showResult = (color, message) => {
        statusMessage.style.color = color;
        statusMessage.textContent = message;
        setTimeout(() => {
            statusMessage.textContent = '';
        }, 3000);
    };

    const errorResult = (error) => {
        if (error) {
            console.error(error);
        }
        if (form.id === 'banner-form') {
            const messageForm = document.getElementById('thanks-text');
            messageForm.textContent = errorMessage;
            statusMessage.textContent = '';
            showPopupForm(thanksForm);
        } else {
            showResult(errorColor, errorMessage);
        }
    };

    //отправка данных на сервер
    const formData = new FormData(form);
    let body = {};
    formData.forEach((item, key) => {
        body[key] = item;
    });
    const postData = (body) => {
        showResult(loadColor, loadMessage);
        return fetch('server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        });
    };
    postData(body)
        .then((response) => {
            if (response.status !== 200) {
                throw new Error('Status network not 200');
            }
            successResult();
        })
        .catch((error) => {
            errorResult(error);
        });
};
export default sendForm;