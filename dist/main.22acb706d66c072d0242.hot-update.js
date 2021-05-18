/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateDiplom"]("main",{

/***/ "./src/modules/burgerMenu.js":
/*!***********************************!*\
  !*** ./src/modules/burgerMenu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nvar burgerMenu = function burgerMenu() {\n  var menuBtn = document.querySelector('.menu-button'),\n      topMenu = document.querySelector('.top-menu');\n  var posMenuVert = topMenu.getBoundingClientRect().top,\n      posBtnVert = menuBtn.getBoundingClientRect().top,\n      posBtnGoris = menuBtn.getBoundingClientRect().left,\n      rasnPosVert = posBtnVert - posMenuVert;\n  console.log('posMenuVert: ', posMenuVert);\n  console.log('posBtnVert: ', posBtnVert);\n\n  var setFix = function setFix() {\n    var style = document.createElement('style');\n    style.textContent = \"\\n        .top-menu, .menu-button, .menu-button img {\\n            position: fixed;\\n            top: 0;\\n            right: 0;\\n            z-index: 9999\\n        }\\n        \";\n    document.head.appendChild(style);\n  };\n\n  var trackScroll = function trackScroll() {\n    var scroll = window.pageYOffset;\n    console.log('scroll: ', scroll);\n\n    if (scroll >= posMenuBtn) {\n      //menuBtn.style.position = 'fixed';\n      setFix();\n    }\n  };\n\n  window.addEventListener('scroll', trackScroll);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (burgerMenu);\n\n//# sourceURL=webpack://Diplom/./src/modules/burgerMenu.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2052a81f1dc365ce330d")
/******/ })();
/******/ 
/******/ }
);