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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nvar burgerMenu = function burgerMenu() {\n  var menuBtn = document.querySelector('.menu-button'),\n      topMenu = document.querySelector('.top-menu'),\n      posMenuVert = topMenu.getBoundingClientRect().top,\n      style = document.createElement('style');\n\n  var setFix = function setFix() {\n    style.textContent = \"\\n        .top-menu {\\n            position: fixed;\\n        }\\n        \";\n    document.head.appendChild(style);\n  };\n\n  var removeFix = function removeFix() {\n    style.textContent = \"\\n        .top-menu {\\n            position: relative;\\n        }\\n        \";\n    document.head.appendChild(style);\n  };\n\n  var trackScroll = function trackScroll() {\n    var scroll = window.pageYOffset;\n\n    if (scroll >= posMenuVert) {\n      setFix();\n    } else {\n      removeFix();\n    }\n  };\n\n  window.addEventListener('scroll', trackScroll);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (burgerMenu);\n\n//# sourceURL=webpack://Diplom/./src/modules/burgerMenu.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("af2ce8895304cc5cdd92")
/******/ })();
/******/ 
/******/ }
);