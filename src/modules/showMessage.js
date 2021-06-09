'use strict';

// показ сообщения об отправке
export const statusMessage = document.createElement('div');
statusMessage.style.cssText = 'font-size: 1.2em';

export const showMessage = (color, message) => {
    statusMessage.style.color = color;
    statusMessage.textContent = message;
    setTimeout(() => {
        statusMessage.textContent = '';
    }, 3000);
};
