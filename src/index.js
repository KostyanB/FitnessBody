'use strict'

import dropMenu from './modules/falloutMenu';
import showPopupForm from './modules/showForm';
import sliderHead from './modules/headSlider';
import photoSlider from './modules/photoGallery';
import sliderCarousel from './modules/sliderCarousel';
import maskInput from './modules/maskInput';
import validInput from './modules/validInput';
import checkInputs from './modules/checkInputs';
import calc from './modules/calculator';
import burgerMenu from './modules/burgerMenu';
import popupMenu from './modules/popupMenu';
import scrollCursor from './modules/scrollCursor';

// п.2 выпадающее меню
dropMenu();
// п.3, 4, 6 popups
showPopupForm();
// п.7 слайдер на главной
sliderHead();
// п.10 фотогалерея
photoSlider();
// п.9 карусель
sliderCarousel();
// маски инпутов
maskInput();
//validInput();
validInput();
// проверка чекбоксов при сабмитах
checkInputs();
// калькулятор
calc();
// скролл бургер-меню
burgerMenu();
// poup-menu
popupMenu();
// стрелка при скролле
scrollCursor();