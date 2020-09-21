/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/scss/styles.scss":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ref--4-2!./src/scss/styles.scss ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _static_images_artist_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../static/images/artist.svg */ "./static/images/artist.svg");
/* harmony import */ var _static_images_view_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../static/images/view.svg */ "./static/images/view.svg");
/* harmony import */ var _static_images_account_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../static/images/account.svg */ "./static/images/account.svg");
// Imports





var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_static_images_artist_svg__WEBPACK_IMPORTED_MODULE_2__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_static_images_view_svg__WEBPACK_IMPORTED_MODULE_3__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_static_images_account_svg__WEBPACK_IMPORTED_MODULE_4__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0; }\n\n/**\n * Render the `main` element consistently in IE.\n */\nmain {\n  display: block; }\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */ }\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent; }\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  text-decoration: underline dotted;\n  /* 2 */ }\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder; }\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%; }\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -0.25em; }\n\nsup {\n  top: -0.5em; }\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none; }\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */ }\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible; }\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none; }\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; }\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0; }\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText; }\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em; }\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */ }\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline; }\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto; }\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */ }\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */ }\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block; }\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item; }\n\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none; }\n\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none; }\n\nhtml {\n  font-size: 16px; }\n\nbody {\n  margin: 0;\n  font-family: system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  background-color: #ffffff;\n  -webkit-text-size-adjust: 100%;\n  -webkit-tap-highlight-color: transparent; }\n\na {\n  text-decoration: none;\n  color: #0099e5;\n  font-size: 0.875rem; }\n\n.have-icon {\n  position: relative;\n  padding-left: 1rem;\n  font-size: 0.75rem;\n  max-width: 60%;\n  color: #333333; }\n  .have-icon::before {\n    content: '';\n    position: absolute;\n    width: 1.125rem;\n    height: 1.125rem;\n    left: 0;\n    top: 50%;\n    transform: translateY(-50%);\n    background-repeat: no-repeat;\n    background-size: 0.625rem auto; }\n  .have-icon-artist::before {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-position: left center; }\n  .have-icon-view {\n    padding-left: 0;\n    padding-right: 1rem; }\n    .have-icon-view::before {\n      left: auto;\n      right: 0;\n      background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n      background-position: right center; }\n  .have-icon-gallery {\n    display: block;\n    cursor: pointer;\n    white-space: nowrap;\n    font-weight: 500;\n    padding-left: 2.25rem;\n    color: #333333; }\n    .have-icon-gallery::before {\n      width: 1.5rem;\n      height: 1.5rem;\n      background-size: 1.5rem;\n      background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + "); }\n  .have-icon-home {\n    display: block;\n    cursor: pointer;\n    white-space: nowrap;\n    font-weight: 500;\n    padding-left: 2.25rem;\n    color: #333333; }\n    .have-icon-home::before {\n      width: 1.5rem;\n      height: 1.5rem;\n      background-size: 1.5rem;\n      background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + "); }\n\n.loading {\n  display: block;\n  text-align: center;\n  color: white;\n  padding: 1rem;\n  border: 1px solid white;\n  background: #434190;\n  margin: 0 0 1.5rem; }\n\n.error {\n  display: block;\n  text-align: center;\n  color: #c53030;\n  padding: 1rem;\n  border: 1px solid #fc8181;\n  background: #fff5f5;\n  margin: 0 0 1.5rem; }\n\n.hide {\n  display: none;\n  visibility: hidden; }\n\n.page {\n  padding: 6rem 0; }\n  .page-header {\n    background-color: #ffffff;\n    border-bottom: 1px solid #e5e5e5;\n    padding: 1rem 0;\n    box-shadow: rgba(3, 27, 78, 0.1) 0 0.125rem 0.25rem;\n    top: 0;\n    position: fixed;\n    width: 100%;\n    box-sizing: border-box;\n    z-index: 1090; }\n    .page-header .navbar {\n      display: flex;\n      align-items: center; }\n      .page-header .navbar .my_met-gallery {\n        margin-left: auto; }\n\n.container {\n  width: 100%;\n  margin: 0 auto;\n  padding: 0 0.9375rem;\n  box-sizing: border-box; }\n\n.grid {\n  display: grid;\n  grid-template-columns: repeat(1, 1fr);\n  grid-gap: 0.9375rem; }\n\n.met-gallery {\n  list-style: none;\n  padding: 0;\n  margin: 0; }\n  .met-gallery-logo {\n    font-weight: 600;\n    letter-spacing: 2px;\n    color: #000000; }\n  .met-gallery-info {\n    display: flex;\n    justify-content: space-between;\n    padding: 0.875rem 1.25rem 0.9375rem; }\n  .met-gallery-title {\n    padding: 0.9375rem 1.25rem 0;\n    font-weight: 500;\n    font-size: 1rem;\n    margin: 0; }\n  .met-gallery-save {\n    position: absolute;\n    background-color: #0099e5;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    opacity: 0;\n    cursor: pointer;\n    color: #ffffff;\n    font-weight: 500;\n    font-size: 0.875rem;\n    top: 50%;\n    left: 50%;\n    height: 2.75rem;\n    padding: 0 1.25rem;\n    transform: translate3d(-50%, -50%, 0);\n    border-radius: 0.25rem;\n    border: 0;\n    outline: none; }\n  .met-gallery-view {\n    text-transform: capitalize; }\n  .met-gallery figure {\n    margin: 0;\n    display: block;\n    height: 18rem;\n    position: relative; }\n    .met-gallery figure img {\n      display: block;\n      margin: 0;\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n      border-radius: 0.625rem 0.625rem 0 0; }\n  .met-gallery-item {\n    background-color: #ffffff;\n    box-shadow: rgba(0, 0, 0, 0.04) 0 0.125rem 0.75rem;\n    border-radius: 0.625rem;\n    position: relative; }\n    .met-gallery-item:hover .met-gallery-save, .met-gallery-item:focus .met-gallery-save {\n      opacity: 1; }\n    .met-gallery-item input[type=\"checkbox\"] {\n      position: absolute;\n      z-index: 10;\n      left: 1.25rem;\n      top: 1.25rem; }\n      .met-gallery-item input[type=\"checkbox\"]:checked.added-to-gallery {\n        pointer-events: none; }\n        .met-gallery-item input[type=\"checkbox\"]:checked.added-to-gallery + .met-gallery-pic .met-gallery-save {\n          opacity: 0;\n          display: none; }\n\n.save-met-gallery {\n  padding: 2.5rem; }\n  .save-met-gallery input[type=\"text\"] {\n    height: 2.5rem;\n    border: none;\n    border-bottom: 1px solid #eee; }\n\n.my_met-gallery {\n  position: relative;\n  padding: 0.25rem 0 0.25rem 1.25rem; }\n  .my_met-gallery_open {\n    display: block;\n    width: 1.625rem;\n    height: 1.625rem;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    background-size: 1.625rem;\n    background-repeat: no-repeat;\n    opacity: 0.8;\n    cursor: pointer; }\n  .my_met-gallery-list {\n    position: absolute;\n    background-color: #ffffff;\n    box-shadow: rgba(3, 27, 78, 0.1) 0 0.25rem 0.5rem;\n    border: 1px solid #e5e5e5;\n    width: 12rem;\n    right: 0;\n    top: 100%;\n    padding: 0.5rem 1.25rem;\n    display: none; }\n    .my_met-gallery-list p {\n      font-weight: 600;\n      margin: 0.375rem 0 0.75rem;\n      font-size: 0.875rem; }\n    .my_met-gallery-list ul {\n      list-style: none;\n      padding: 0;\n      margin: 0; }\n      .my_met-gallery-list ul li {\n        border-top: 1px solid rgba(0, 0, 0, 0.05);\n        font-size: 0.75rem;\n        cursor: pointer; }\n        .my_met-gallery-list ul li a {\n          display: block;\n          padding: 0.625rem 0;\n          color: rgba(0, 0, 0, 0.8); }\n          .my_met-gallery-list ul li a small {\n            display: block; }\n          .my_met-gallery-list ul li a:hover {\n            color: #0099e5; }\n  .my_met-gallery:hover .my_met-gallery_open {\n    opacity: 1; }\n  .my_met-gallery:hover .my_met-gallery-list {\n    display: block; }\n\n@media screen and (min-width: 576px) {\n  .container {\n    max-width: 540px; } }\n\n@media screen and (min-width: 768px) {\n  .page {\n    padding: 8rem 0; }\n  .container {\n    max-width: 720px; }\n  .grid {\n    grid-template-columns: repeat(2, 1fr);\n    grid-gap: 1.875rem; } }\n\n@media screen and (min-width: 992px) {\n  .container {\n    max-width: 960px; }\n  .grid {\n    grid-template-columns: repeat(3, 1fr); } }\n\n@media screen and (min-width: 1200px) {\n  .container {\n    max-width: 1140px; } }\n\n@media screen and (min-width: 1400px) {\n  .container {\n    max-width: 1320px; }\n  .grid {\n    grid-template-columns: repeat(4, 1fr); } }\n", "",{"version":3,"sources":["webpack://src/scss/_normalize.scss","webpack://src/scss/styles.scss","webpack://src/scss/_common.scss","webpack://src/scss/_layout.scss"],"names":[],"mappings":"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","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}","@import './normalize';\n@import './common';\n@import './layout';","//\n$font-family: system-ui,-apple-system,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";\n$black: #000000;\n$white: #ffffff;\n$theme: #0099e5;\n\n@mixin square($width) {\n    width: $width;\n    height: $width;\n}\n\nhtml {\n    font-size: 16px;\n}\n\nbody {\n    margin: 0;\n    font-family: $font-family;\n    font-size: 1rem;\n    font-weight: 400;\n    line-height: 1.5;\n    background-color: $white;\n    -webkit-text-size-adjust: 100%;\n    -webkit-tap-highlight-color: transparent;\n}\n\na {\n    text-decoration: none;\n    color: $theme;\n    font-size: 0.875rem;\n}\n\n.have-icon {\n    position: relative;\n    padding-left: 1rem;\n    font-size: 0.75rem;\n    max-width: 60%;\n    color: #333333;\n\n    &::before {\n        content: '';\n        position: absolute;\n        @include square(1.125rem);\n        left: 0;\n        top: 50%;\n        transform: translateY(-50%);\n        background-repeat: no-repeat;\n        background-size: 0.625rem auto;\n    }\n\n    &-artist {\n        &::before {\n            background-image: url(../../static/images/artist.svg);\n            background-position: left center;\n        }\n    }\n\n    &-view {\n        padding-left: 0;\n        padding-right: 1rem;\n        &::before {\n            left: auto;\n            right: 0;\n            background-image: url(../../static/images/view.svg);\n            background-position: right center;\n        }\n    }\n\n    &-gallery {\n        display: block;\n        cursor: pointer;\n        white-space: nowrap;\n        font-weight: 500;\n        padding-left: 2.25rem;\n        color: #333333;\n        &::before {\n            @include square(1.5rem);\n            background-size: 1.5rem;\n            background-image: url(../../static/images/account.svg);\n        }\n    }\n\n    &-home {\n        display: block;\n        cursor: pointer;\n        white-space: nowrap;\n        font-weight: 500;\n        padding-left: 2.25rem;\n        color: #333333;\n        &::before {\n            @include square(1.5rem);\n            background-size: 1.5rem;\n            background-image: url(../../static/images/view.svg);\n        }\n    }\n}\n\n.loading {\n    display: block;\n    text-align: center;\n    color: white;\n    padding: 1rem;\n    border: 1px solid white;\n    background: #434190;\n    margin: 0 0 1.5rem;\n}\n\n.error {\n    display: block;\n    text-align: center;\n    color: #c53030;\n    padding: 1rem;\n    border: 1px solid #fc8181;\n    background: #fff5f5;\n    margin: 0 0 1.5rem;\n}\n\n.hide {\n    display: none;\n    visibility: hidden;\n}\n","\n.page {\n    padding: 6rem 0;\n    &-header {\n        background-color: $white;\n        border-bottom: 1px solid #e5e5e5;\n        padding: 1rem 0;\n        box-shadow: rgba(3,27,78,.1) 0 0.125rem 0.25rem;\n        top: 0;\n        position: fixed;\n        width: 100%;\n        box-sizing: border-box;\n        z-index: 1090;\n\n        .navbar {\n            display: flex;\n            align-items: center;\n            .my_met-gallery {\n                margin-left: auto;\n            }\n        }\n    }\n}\n\n.container {\n    width: 100%;\n    margin: 0 auto;\n    padding: 0 0.9375rem;\n    box-sizing: border-box;\n}\n\n.grid {\n    display: grid;\n    grid-template-columns: repeat(1, 1fr);\n    grid-gap: 0.9375rem;\n}\n\n.met-gallery {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n\n    &-logo {\n        font-weight: 600;\n        letter-spacing: 2px;\n        color: $black;\n    }\n\n    &-info {\n        display: flex;\n        justify-content: space-between;\n        padding: 0.875rem 1.25rem 0.9375rem;\n    }\n\n    &-title {\n        padding: 0.9375rem 1.25rem 0;\n        font-weight: 500;\n        font-size: 1rem;\n        margin: 0;\n    }\n\n    &-save {\n        position: absolute;\n        background-color: $theme;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        opacity: 0;\n        cursor: pointer;\n        color: $white;\n        font-weight: 500;\n        font-size: 0.875rem;\n        top: 50%;\n        left: 50%;\n        height: 2.75rem;\n        padding: 0 1.25rem;\n        transform: translate3d(-50%, -50%, 0);\n        border-radius: 0.25rem;\n        border: 0;\n        outline: none;\n    }\n\n    &-view {\n        text-transform: capitalize;\n    }\n\n    figure {\n        margin: 0;\n        display: block;\n        height: 18rem;\n        position: relative;\n\n\n        img {\n            display: block;\n            margin: 0;\n            width: 100%;\n            height: 100%;\n            object-fit: cover;\n            border-radius: 0.625rem 0.625rem 0 0;\n        }\n    }\n    &-item {\n        background-color: $white;\n        box-shadow: rgba($black, 0.04) 0 0.125rem 0.75rem;\n        border-radius: 0.625rem;\n        position: relative;\n\n        &:hover,\n        &:focus {\n            .met-gallery-save {\n                opacity: 1;\n            }\n        }\n\n        input[type=\"checkbox\"] {\n            position: absolute;\n            z-index: 10;\n            left: 1.25rem;\n            top: 1.25rem;\n            &:checked {\n                &.added-to-gallery {\n                    pointer-events: none;\n                    & + .met-gallery-pic .met-gallery-save {\n                        opacity: 0;\n                        display: none;\n                    }\n                }\n            }\n        }\n    }\n}\n\n.save-met-gallery {\n    padding: 2.5rem;\n\n    input[type=\"text\"] {\n        height: 2.5rem;\n        border: none;\n        border-bottom: 1px solid #eee;\n    }\n}\n\n.my_met-gallery {\n    position: relative;\n    padding: 0.25rem 0 0.25rem 1.25rem;\n\n    &_open {\n        display: block;\n        @include square(1.625rem);\n        background-image: url(../../static/images/account.svg);\n        background-size: 1.625rem;\n        background-repeat: no-repeat;\n        opacity: 0.8;\n        cursor: pointer;\n    }\n\n    &-list {\n        position: absolute;\n        background-color: $white;\n        box-shadow: rgba(3,27,78,.1) 0 0.25rem 0.5rem;\n        border: 1px solid #e5e5e5;\n        width: 12rem;\n        right: 0;\n        top: 100%;\n        padding: 0.5rem 1.25rem;\n        display: none;\n        p {\n            font-weight: 600;\n            margin: 0.375rem 0 0.75rem;\n            font-size: 0.875rem;\n        }\n        ul {\n            list-style: none;\n            padding: 0;\n            margin: 0;\n            li {\n                border-top: 1px solid rgba($black, 0.05);\n                font-size: 0.75rem;\n                cursor: pointer;\n                a {\n                    display: block;\n                    padding: 0.625rem 0;\n                    color: rgba($black, 0.8);\n                    small {\n                        display: block;\n                    }\n                    &:hover {\n                        color: $theme;\n                    }\n                }\n            }\n        }\n    }\n    &:hover {\n        .my_met-gallery {\n            &_open {\n                opacity: 1;\n            }\n\n            &-list {\n                display: block;\n            }\n        }\n    }\n}\n\n\n@media screen and (min-width: 576px) {\n    .container {\n        max-width: 540px;\n    }\n}\n\n@media screen and (min-width: 768px) {\n    .page {\n        padding: 8rem 0;\n    }\n    .container {\n        max-width: 720px;\n    }\n\n    .grid {\n        grid-template-columns: repeat(2, 1fr);\n        grid-gap: 1.875rem;\n    }\n}\n\n@media screen and (min-width: 992px) {\n    .container {\n        max-width: 960px;\n    }\n\n    .grid {\n        grid-template-columns: repeat(3, 1fr);\n    }\n}\n\n@media screen and (min-width: 1200px) {\n    .container {\n        max-width: 1140px;\n    }\n}\n\n@media screen and (min-width: 1400px) {\n    .container {\n        max-width: 1320px;\n    }\n\n    .grid {\n        grid-template-columns: repeat(4, 1fr);\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/styles.scss */ "./src/scss/styles.scss");
/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_collection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/collection */ "./src/js/collection.js");
/* harmony import */ var _js_personal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/personal */ "./src/js/personal.js");



var gridContainer = null;
var loader = document.querySelector('#loader');
var alert = document.querySelector('#alert');
var resource = 'https://collectionapi.metmuseum.org/public/collection/v1/objects';

var App = page => {
  var MetGallery = new _js_collection__WEBPACK_IMPORTED_MODULE_1__["default"]();
  loader.setAttribute('style', 'display:block');
  gridContainer.setAttribute('style', 'display:none');
  /**
   * Master Gallery init,
   * Get 25 items from Met Museum API
   */

  MetGallery.init(resource, 2500, 25, page).then(items => {
    var loading = MetGallery.loading;
    var error = MetGallery.hasErorr;

    if (error) {
      alert.setAttribute('style', 'display:block');
      loader.setAttribute('style', 'display:none');
      gridContainer.setAttribute('style', 'display:none');
      return;
    }

    if (loading) {
      loader.setAttribute('style', 'display:block');
      gridContainer.setAttribute('style', 'display:none');
    } else {
      loader.setAttribute('style', 'display:none');
      gridContainer.setAttribute('style', 'display:grid');
    }

    var galleryObjectIds = items;
    /**
     * Get gallery item details
     */

    galleryObjectIds.forEach(item => {
      MetGallery.getItemDetails(resource, item).then(gallery => {
        var listItem = "<li class=\"met-gallery-item\">\n                    <figure class=\"met-gallery-pic\">\n                        <img src=\"".concat(gallery.primaryImageSmall !== "" ? gallery.primaryImageSmall : "./images/placeholder.png", "\" alt=\"").concat(gallery.title, "\">\n                        <button type=\"button\" data-objectId=\"").concat(gallery.objectID, "\" class=\"met-gallery-save btnSave\">Add to gallery</button>\n                    </figure>\n                    <h3 class=\"met-gallery-title\">").concat(gallery.title, "</h3>\n                    <div class=\"met-gallery-info\">\n                        <span class=\"have-icon have-icon-artist met-gallery-artist\">").concat(gallery.artistDisplayName !== "" ? gallery.artistDisplayName : "Artist info not available", "</span>\n                        <a href=\"").concat(gallery.objectURL, "\" class=\"have-icon have-icon-view met-gallery-view\" target=\"_blank\" rel=\"noopener noreferrer\">view</a>\n                    </div>\n                </li>");
        gridContainer.innerHTML += listItem;
      });
    });
  });
};

document.addEventListener('DOMContentLoaded', function () {
  var _window;

  var page = (_window = window) === null || _window === void 0 ? void 0 : _window.__MetPage__;

  switch (page) {
    case 'home':
      gridContainer = document.querySelector('#collection');
      break;

    case 'gallery':
      gridContainer = document.querySelector('#savedItems');
      break;

    default:
      break;
  }

  App(page);
  var MyPersonalGallery = new _js_personal__WEBPACK_IMPORTED_MODULE_2__["default"]();
  MyPersonalGallery.init(gridContainer);
});

/***/ }),

/***/ "./src/js/collection.js":
/*!******************************!*\
  !*** ./src/js/collection.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
/**
 * Collections
 */


class Collections {
  constructor() {
    this.objectIDs = [];
    this.savedItems = [];
    this.loading = false;
    this.hasErorr = false;
  }

  init(url, start) {
    var limit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    var page = arguments.length > 3 ? arguments[3] : undefined;
    this.loading = true;

    if (page === 'gallery') {
      var savedItemsIds = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getCookie"])('objectIDs');
      savedItemsIds ? savedItemsIds = JSON.parse(savedItemsIds) : savedItemsIds = [];
      this.loading = false;
      return new Promise(function (resolve, reject) {
        resolve(savedItemsIds);
      });
    }

    var galleryObjects = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getData"])(url).then(objects => {
      this.loading = false;

      if (!objects.objectIDs) {
        this.hasErorr = true;
        return;
      }

      return this.objectIDs = objects === null || objects === void 0 ? void 0 : objects.objectIDs.slice(start, start + limit);
    });
    return galleryObjects;
  }

  getItemDetails(url, objectID) {
    var galleryItem = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getData"])("".concat(url, "/").concat(objectID)).then(item => {
      return item;
    });
    return galleryItem;
  }

}

;
/* harmony default export */ __webpack_exports__["default"] = (Collections);

/***/ }),

/***/ "./src/js/personal.js":
/*!****************************!*\
  !*** ./src/js/personal.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
/**
 * Personal Gallery
 */


class PersonalGallery {
  constructor() {
    count: 0;

    this.counterElm = document.querySelector('#savedCounter');
    this.saveBtn = document.querySelector('.btnSave');
  }

  init(gridContainer) {
    var existingIDs = this.parseSavedIDs();
    this.counterElm.innerText = existingIDs.length;
    this.toggleSaveBtn();
    gridContainer.addEventListener('click', e => {
      if (e.target.classList.contains('btnSave')) {
        this.saveItems(e.target);
      }
    });
  }

  parseSavedIDs() {
    var existingIDs = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getCookie"])('objectIDs');
    existingIDs ? existingIDs = JSON.parse(existingIDs) : existingIDs = [];
    return existingIDs;
  }

  toggleSaveBtn() {
    var existingIDs = this.parseSavedIDs();

    if (existingIDs.length < 5) {
      return false;
    }

    var styles = document.createElement('style');
    styles.setAttribute('id', 'btnSaveToggle');
    styles.innerHTML = ".btnSave{display:none}";

    if (existingIDs.length >= 5) {
      document.head.appendChild(styles);
    } else {
      document.head.removeChild(styles);
    }
  }

  saveItems(item) {
    var existingIDs = this.parseSavedIDs();
    var objectID = item === null || item === void 0 ? void 0 : item.dataset.objectid;
    existingIDs.push(objectID);
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["setCookie"])('objectIDs', JSON.stringify(existingIDs));
    this.counterElm.innerText = existingIDs.length;
    this.toggleSaveBtn();
  }

}

/* harmony default export */ __webpack_exports__["default"] = (PersonalGallery);

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! exports provided: getData, setCookie, getCookie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getData", function() { return getData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCookie", function() { return setCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCookie", function() { return getCookie; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);



/**
 * Utils
 */
var getData = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(url) {
    var response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch(url).then(res => {
              if (!res.ok) {
                throw Error(res.statusText);
              }

              return res;
            }).then(res => res.json()).catch(err => err);

          case 2:
            response = _context.sent;
            return _context.abrupt("return", response);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getData(_x) {
    return _ref.apply(this, arguments);
  };
}();

var setCookie = (name, value) => {
  document.cookie = "".concat(name, "=").concat(value);
};

var getCookie = name => {
  var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
  return matches ? decodeURIComponent(matches[1]) : undefined;
};



/***/ }),

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??ref--4-2!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/scss/styles.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./static/images/account.svg":
/*!***********************************!*\
  !*** ./static/images/account.svg ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "account.svg");

/***/ }),

/***/ "./static/images/artist.svg":
/*!**********************************!*\
  !*** ./static/images/artist.svg ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "artist.svg");

/***/ }),

/***/ "./static/images/view.svg":
/*!********************************!*\
  !*** ./static/images/view.svg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "view.svg");

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map