'use strict'

const dropMenu = () => {
    const clubSelector = document.getElementById('club-selector'),
        falloutActivator = document.getElementById('fallout-activator');

        document.addEventListener('click', (e) => {
            if(e.target === falloutActivator) {
                clubSelector.style.display = 'block';
            } else if(e.target !== falloutActivator) {
                clubSelector.style.display = 'none';
            }
        });
};
export default dropMenu;


