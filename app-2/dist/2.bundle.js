"use strict";
(self["webpackChunkexercice"] = self["webpackChunkexercice"] || []).push([[2],[
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helloButton_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


class helloButton {
    render(){
        const button = document.createElement('button');
        button.innerHTML = 'Hello World';
        button.classList.add('hello-button');
        const body = document.querySelector('body');
        // Use 'addEventListener' instead of 'onClick'
        button.addEventListener('click', function () {
            const p = document.createElement('p'); // Specify the tag name 'p'
            p.innerHTML = 'Hello everyone! We are learning webpack'; // Fix the innerHTML
            p.classList.add('hello-world-text');
            body.appendChild(p);
        });
        body.appendChild(button);
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (helloButton); 

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })
]]);