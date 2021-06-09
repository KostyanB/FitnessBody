'use strict';

import dropMenu from './modules/falloutMenu';
import showPopupForm from './modules/showPopup';
import sliderHead from './modules/headSlider';
import photoSlider from './modules/photoGallery';
import sliderCarousel from './modules/sliderCarousel';
import maskInput from './modules/maskInput';
import validInput from './modules/validInput';
import { checkInputs } from './modules/checkInputs';
import calc from './modules/calculator';
import burgerMenu from './modules/burgerMenu';
import popupMenu from './modules/popupMenu';
import scrollCursor from './modules/scrollCursor';
import scrollToLink from './modules/scrollLink';

// выпадающее меню
dropMenu();
// popups
showPopupForm();
// слайдер на главной
sliderHead();
// фотогалерея
photoSlider();
// карусель
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
// плавный скролл
scrollToLink();