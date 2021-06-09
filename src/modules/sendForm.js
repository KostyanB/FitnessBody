'use strict';

import { showMessage } from './showMessage';
import { targetForm } from './checkInputs';
import { successResult, errorResult } from './showSendResult';

const sendForm = () => {
    const loadMessage = 'Отправка...',
        loadColor = '#19b5fe';

    //отправка данных на сервер
    const formData = new FormData(targetForm);
    let body = {};
    formData.forEach((item, key) => {
        body[key] = item;
    });
    const postData = (body) => {
        showMessage(loadColor, loadMessage);
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