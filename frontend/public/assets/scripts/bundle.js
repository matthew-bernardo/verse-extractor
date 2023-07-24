/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/lil-framework/dist/index.js":
/*!**************************************************!*\
  !*** ./node_modules/lil-framework/dist/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   lilComponent: () => (/* reexport safe */ _lilComponent__WEBPACK_IMPORTED_MODULE_0__.lilComponent)\n/* harmony export */ });\n/* harmony import */ var _lilComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lilComponent */ \"./node_modules/lil-framework/dist/lilComponent.js\");\n\n\n//# sourceURL=webpack://frontend/./node_modules/lil-framework/dist/index.js?");

/***/ }),

/***/ "./node_modules/lil-framework/dist/lilComponent.js":
/*!*********************************************************!*\
  !*** ./node_modules/lil-framework/dist/lilComponent.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   lilComponent: () => (/* binding */ lilComponent)\n/* harmony export */ });\n/* harmony import */ var _stateObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stateObject */ \"./node_modules/lil-framework/dist/stateObject.js\");\n/* harmony import */ var _parseTemplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parseTemplate */ \"./node_modules/lil-framework/dist/parseTemplate.js\");\nfunction lilComponent({name:t,template:e,data:i={},hooks:s={},handlers:a={}}){getImplicitVariables(e).forEach(t=>{i[t]=null!=(t=i[t])?t:\"\"}),i._stateVars=Object.keys(i),e=(0,_parseTemplate__WEBPACK_IMPORTED_MODULE_1__.parseTemplate)(e,i);var r=class extends HTMLElement{constructor(){super()}static get observedAttributes(){return i._stateVars.map(t=>t.toLowerCase())}connectedCallback(){this.innerHTML=e,this.addListeners(),this.dependencyTree=this.parseDependencies();var t=Object.assign(Object.assign({},s),this.getRenderHooks({data:i,hooks:s}));this.state=(0,_stateObject__WEBPACK_IMPORTED_MODULE_0__.stateObject)(this,{data:i,hooks:t}),this.handlers=a,this.state._stateVars.forEach(t=>{this.hasAttribute(t)&&this.state&&(this.state[t]=this.getAttribute(t))})}attributeChangedCallback(e,t,s){var a;this.state&&(a=i._stateVars.find(t=>t.toLowerCase()===e),this.state[a]=s)}parseDependencies(){const r={};return this.querySelectorAll(\"[has-lfdeps]\").forEach(a=>{a.getAttributeNames().filter(t=>t.startsWith(\"lfdep\")).forEach(t=>{let[,e,s]=t.split(\"-\");(s=i._stateVars.find(t=>t.toLowerCase()===s))&&(r[s]||(r[s]=[]),r[s].push({el:a,attribute:e,innerText:!e}))})}),r}getRenderHooks({data:t,hooks:s}){return Object.keys(t).reduce((t,e)=>(t[e]=s[e]||[],t[e].push(s=>{var t;this.dependencyTree&&null!=(t=this.dependencyTree[e])&&t.forEach(({el:t,attribute:e})=>{e?t.setAttribute(e,s):t.innerText=s})}),t),{})}addListeners(){this.querySelectorAll(\"[lfbind]\").forEach(t=>{const[e,s]=t.getAttribute(\"lfbind\").split(\":\");t.addEventListener(s,t=>{this.state[e]=t.detail||t.target.value})}),this.querySelectorAll(\"[lfhandle]\").forEach(t=>{const[e,s]=t.getAttribute(\"lfhandle\").split(\":\");t.addEventListener(s,t=>{this.handlers[e].call(this,t),t.stopImmediatePropagation()})})}};window.customElements.define(t,r)}function getImplicitVariables(t){const e=[];return null!=(t=t.match(/{{([^}}]*)}}/gm))&&t.forEach(t=>{t=t.replace(\"{{\",\"\").replace(\"}}\",\"\");e.push(t)}),e}\n\n//# sourceURL=webpack://frontend/./node_modules/lil-framework/dist/lilComponent.js?");

/***/ }),

/***/ "./node_modules/lil-framework/dist/parseTemplate.js":
/*!**********************************************************!*\
  !*** ./node_modules/lil-framework/dist/parseTemplate.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   parseTemplate: () => (/* binding */ parseTemplate)\n/* harmony export */ });\nfunction parseTemplate(e,p){var a;let r=e;null!=(a=e.match(/[a-zA-Z-]*=\"{{[^}}]*}}\"/gm))&&a.forEach(e=>{var[a,l]=e.split(\"=\"),l=l.replace('\"{{',\"\").replace('}}\"',\"\"),l=`has-lfdeps lfdep-${a}-${l} ${a}=\"${null!=(a=p[l])?a:\"\"}\"`;r=r.replace(e,l)});return null!=(a=e.match(/{{[^}}]*}}/gm))&&a.forEach(e=>{var a=e.replace(\"{{\",\"\").replace(\"}}\",\"\"),a=`<span has-lfdeps lfdep--${a}>${null!=(a=p[a])?a:\"\"}</span>`;r=r.replace(e,a)}),r}\n\n//# sourceURL=webpack://frontend/./node_modules/lil-framework/dist/parseTemplate.js?");

/***/ }),

/***/ "./node_modules/lil-framework/dist/stateObject.js":
/*!********************************************************!*\
  !*** ./node_modules/lil-framework/dist/stateObject.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   stateObject: () => (/* binding */ stateObject)\n/* harmony export */ });\nfunction stateObject(n,t){const{data:e={},hooks:r={}}=t;return new Proxy(e,{get(t,e){return\"addHook\"===e?(t,e)=>{r[t]||(r[t]=[]),r[t].push(e)}:Reflect.get(t,e)},set(t,e,o){const c=t[e];return Reflect.set(t,e,o),null!=(t=r[e])&&t.forEach(t=>t.call(n,o,c)),o}})}\n\n//# sourceURL=webpack://frontend/./node_modules/lil-framework/dist/stateObject.js?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://frontend/./src/styles/main.scss?");

/***/ }),

/***/ "./src/scripts/components/email-input.ts":
/*!***********************************************!*\
  !*** ./src/scripts/components/email-input.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lil_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lil-framework */ \"./node_modules/lil-framework/dist/index.js\");\n// @ts-ignore\n\nconst name = \"email-input\";\nconst template = /*html*/ `\n<h3>Paste the body of the email here</h3>\n<textarea lfbind=\"emailBody:input\"></textarea>\n`;\n(0,lil_framework__WEBPACK_IMPORTED_MODULE_0__.lilComponent)({\n    name,\n    template,\n    data: {\n        isUntouched: false,\n    },\n    hooks: {\n        emailBody: [\n            function (newEmailBody) {\n                if (!newEmailBody) {\n                    return;\n                }\n                const germanVerses = newEmailBody\n                    .match(getGermanVerseRegex())\n                    .map((v) => v.trim());\n                let englishVerses = germanVerses.map((germanVerse) => {\n                    const bookName = germanVerse\n                        .match(/[0-9]?\\.? ?[\\u00C0-\\u017FA-Za-z]+/)[0]\n                        .replace(\".\", \"\");\n                    const englishBook = getGermanEnglishMap()[bookName];\n                    let replacementRegex = bookName;\n                    if (Number(bookName[0])) {\n                        [1, 2, 3, 4, 5].forEach((bookNumber) => {\n                            replacementRegex = replacementRegex.replace(bookNumber.toString(), `${bookNumber}\\.?`);\n                        });\n                    }\n                    return germanVerse.replace(new RegExp(replacementRegex), englishBook);\n                });\n                this.dispatchEvent(new CustomEvent(\"englishVerses\", { detail: englishVerses }));\n            },\n        ],\n    },\n});\nfunction getGermanVerseRegex() {\n    const germanBooks = Object.keys(getGermanEnglishMap());\n    const prefix = germanBooks\n        .reduce((acc, book) => {\n        // Handle cases where someone might put a \".\" after a book name, e.g., \"2. Samuel\"\n        [1, 2, 3, 4, 5].forEach((bookNumber) => {\n            book = book.replace(bookNumber.toString(), `${bookNumber}\\.?`);\n        });\n        acc.push(book);\n        return acc;\n    }, [])\n        .join(\"|\");\n    const suffix = \"[0-9|:| |,|-]+\"; // Matches with the verses, e.g [BOOK NAME] 2:8-10, 14\n    return new RegExp(`(${prefix})${suffix}`, \"gmi\");\n}\nfunction getGermanEnglishMap() {\n    return {\n        \"1 Mose\": \"Genesis\",\n        \"2 Mose\": \"Exodus\",\n        \"3 Mose\": \"Leviticus\",\n        \"4 Mose\": \"Numbers\",\n        \"5 Mose\": \"Deuteronomy\",\n        Josua: \"Joshua\",\n        Richter: \"Judges\",\n        Rut: \"Ruth\",\n        \"1 Samuel\": \"1 Samuel\",\n        \"2 Samuel\": \"2 Samuel\",\n        \"1 Könige\": \"1 Kings\",\n        \"2 Könige\": \"2 Kings\",\n        \"1 Chronik\": \"1 Chronicles\",\n        \"2 Chronik\": \"2 Chronicles\",\n        Esra: \"Ezra\",\n        Nehemia: \"Nehemiah\",\n        Esther: \"Esther\",\n        Hiob: \"Job\",\n        Psalm: \"Psalms\",\n        Sprüche: \"Proverbs\",\n        Prediger: \"Ecclesiastes\",\n        Hoheslied: \"Song of Solomon\",\n        Jesaja: \"Isaiah\",\n        Jeremia: \"Jeremiah\",\n        Klagelieder: \"Lamentations\",\n        Hesekiel: \"Ezekiel\",\n        Daniel: \"Daniel\",\n        Hosea: \"Hosea\",\n        Joel: \"Joel\",\n        Amos: \"Amos\",\n        Obadja: \"Obadiah\",\n        Jona: \"Jonah\",\n        Micha: \"Micah\",\n        Nahum: \"Nahum\",\n        Habakuk: \"Habakkuk\",\n        Zefanja: \"Zephaniah\",\n        Haggai: \"Haggai\",\n        Sacharja: \"Zechariah\",\n        Maleachi: \"Malachi\",\n        Matthäus: \"Matthew\",\n        Markus: \"Mark\",\n        Lukas: \"Luke\",\n        Johannes: \"John\",\n        Apostelgeschichte: \"Acts\",\n        Römer: \"Romans\",\n        \"1 Korinther\": \"1 Corinthians\",\n        \"2 Korinther\": \"2 Corinthians\",\n        Galater: \"Galatians\",\n        Epheser: \"Ephesians\",\n        Philipper: \"Philippians\",\n        Kolosser: \"Colossians\",\n        \"1 Thessalonicher\": \"1 Thessalonians\",\n        \"2 Thessalonicher\": \"2 Thessalonians\",\n        \"1 Timotheus\": \"1 Timothy\",\n        \"2 Timotheus\": \"2 Timothy\",\n        Titus: \"Titus\",\n        Philemon: \"Philemon\",\n        Hebräer: \"Hebrews\",\n        Jakobus: \"James\",\n        \"1 Petrus\": \"1 Peter\",\n        \"2 Petrus\": \"2 Peter\",\n        \"1 Johannes\": \"1 John\",\n        \"2 Johannes\": \"2 John\",\n        \"3 Johannes\": \"3 John\",\n        Judas: \"Jude\",\n        Offenbarung: \"Revelation\",\n    };\n}\n\n\n//# sourceURL=webpack://frontend/./src/scripts/components/email-input.ts?");

/***/ }),

/***/ "./src/scripts/components/index.ts":
/*!*****************************************!*\
  !*** ./src/scripts/components/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _email_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./email-input */ \"./src/scripts/components/email-input.ts\");\n/* harmony import */ var _verse_renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verse-renderer */ \"./src/scripts/components/verse-renderer.ts\");\n\n\n\n\n//# sourceURL=webpack://frontend/./src/scripts/components/index.ts?");

/***/ }),

/***/ "./src/scripts/components/verse-renderer.ts":
/*!**************************************************!*\
  !*** ./src/scripts/components/verse-renderer.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lil_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lil-framework */ \"./node_modules/lil-framework/dist/index.js\");\n// @ts-ignore\n\nconst name = \"verse-renderer\";\nconst template = /*html*/ ``;\n(0,lil_framework__WEBPACK_IMPORTED_MODULE_0__.lilComponent)({\n    name,\n    template,\n    data: {\n        verses: \"[]\",\n    },\n    hooks: {\n        verses: [function (versesString) {\n                let verses = JSON.parse(versesString);\n                // TODO: Handle cases where verse references might contain multiple passages, e.g., John 1:1-2,4\n                this.innerHTML = verses.map((v) => {\n                    return /*html*/ `<a target=\"_blank\" href=\"${getBibleGatewayHref(v)}\" class=\"verse chip\">${v}</a>`;\n                }).join(\"\");\n            }]\n    }\n});\nfunction getBibleGatewayHref(verse, version = \"ESV\") {\n    // Here's an example of the link format.\n    // https://www.biblegateway.com/passage/?search=Romans+8%3A38-39&version=ESV\n    return `http://www.biblegateway.com/passage/?search=${verse}&version=${version}`;\n}\n\n\n//# sourceURL=webpack://frontend/./src/scripts/components/verse-renderer.ts?");

/***/ }),

/***/ "./src/scripts/main.ts":
/*!*****************************!*\
  !*** ./src/scripts/main.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ \"./src/scripts/components/index.ts\");\n\nconst emailInput = document.querySelector(\"email-input\");\nconst verseRenderer = document.querySelector(\"verse-renderer\");\nemailInput.addEventListener(\"englishVerses\", (event) => {\n    verseRenderer.setAttribute(\"verses\", JSON.stringify(event.detail));\n});\n\n\n//# sourceURL=webpack://frontend/./src/scripts/main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./src/scripts/main.ts");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/styles/main.scss");
/******/ 	
/******/ })()
;