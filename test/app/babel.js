(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,'__esModule',{value:!0}),exports.hasClass=hasClass,exports.addClass=addClass,exports.removeClass=removeClass,exports.prepend=prepend;function hasClass(c,a){return c.className.match(new RegExp('(\\s|^)'+a+'(\\s|$)'))}function addClass(c,a){hasClass(c,a)||(c.className+=' '+a)}function removeClass(d,a){if(hasClass(d,a)){var b=new RegExp('(\\s|^)'+a+'(\\s|$)');d.className=d.className.replace(b,' ')}}function prepend(d,a){var b=2<arguments.length&&arguments[2]!==void 0&&arguments[2];d.insertBefore(a,d.firstChild),!1===b?eval(d.firstChild):eval(b)}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _bengorCookies=__webpack_require__(2);document.addEventListener('DOMContentLoaded',function(){new _bengorCookies.BenGorCookies({triggers:'html',maxPageYOffset:400,plugins:[new _bengorCookies.BenGorCookiesPlugins.GoogleTagManager('GTM-XXXXX')],template:_bengorCookies.BenGorCookiesTemplates.Default({link:'/cookies',linkText:'Cookies policy',text:'We use bengor-cookies to provide a better browsing experience and a more personalized service. If you continue browsing, we consider accepting its use. You can change the settings or get more information by consulting our',acceptText:'Accept'}),onAcceptCallback:function onAcceptCallback(){console.log('Cookies are now accepted!')}})});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,'__esModule',{value:!0}),exports.BenGorCookiesTemplates=exports.BenGorCookiesPlugins=exports.BenGorCookies=void 0;var _Cookies=__webpack_require__(3),_Cookies2=_interopRequireDefault(_Cookies),_Plugins=__webpack_require__(5),BenGorCookiesPlugins=_interopRequireWildcard(_Plugins),_Templates=__webpack_require__(7),BenGorCookiesTemplates=_interopRequireWildcard(_Templates);function _interopRequireWildcard(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b.default=a,b}function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}exports.BenGorCookies=_Cookies2.default,exports.BenGorCookiesPlugins=BenGorCookiesPlugins,exports.BenGorCookiesTemplates=BenGorCookiesTemplates;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _createClass=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,'value'in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),_CookieHelpers=__webpack_require__(4),CookieHelpers=_interopRequireWildcard(_CookieHelpers),_DomHelpers=__webpack_require__(0),DomHelpers=_interopRequireWildcard(_DomHelpers);Object.defineProperty(exports,'__esModule',{value:!0});function _interopRequireWildcard(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b.default=a,b}function _toConsumableArray(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}return Array.from(a)}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}var Cookies=function(){function b(){var f=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},g=f.triggers,h=void 0===g?'html':g,a=f.maxPageYOffset,i=f.plugins,j=void 0===i?[]:i,c=f.template,k=void 0===c?null:c,d=f.onAcceptCallback,l=void 0===d?function(){}:d;if(_classCallCheck(this,b),k&&document.querySelector('body').insertAdjacentHTML('beforeend',k),this.element=document.querySelector('.js-bengor-cookies'),this.triggers=[].concat(_toConsumableArray(document.querySelectorAll(h))),null===this.element)throw new DOMError('"js-bengor-cookies" class is not added to your cookies element');this.cookieName='bengor-cookie',this.scrollMovement=0,this.maxPageYOffset=void 0!==a&&a,this.plugins=j,this.onAcceptCallback=l.bind(this),this.onClickAccept=this.onClickAccept.bind(this),this.onScrollAccept=this.onScrollAccept.bind(this),!1!==this.maxPageYOffset&&this.enableInteraction('mousewheel',this.onScrollAccept),this.enableInteraction(['click','touchstart'],this.onClickAccept),this.show()}return _createClass(b,[{key:'removeEventListeners',value:function removeEventListeners(){var c=this;['click','touchstart','mousewheel'].map(function(d){c.triggers.map(function(a){a.removeEventListener(d,c.onScrollAccept,!0),a.removeEventListener(d,c.onClickAccept,!0)})})}},{key:'onScrollAccept',value:function onScrollAccept(b){this.scrollMovement+=b.deltaY,this.scrollMovement>this.maxPageYOffset&&this.onClickAccept()}},{key:'onClickAccept',value:function onClickAccept(){this.accept(),this.removeEventListeners()}},{key:'enableInteraction',value:function enableInteraction(d,e){d instanceof Array||(d=[d]),this.triggers.map(function(b){d.map(function(c){b.addEventListener(c,e,!0)})})}},{key:'show',value:function show(){CookieHelpers.get(this.cookieName)?this.plugins.map(function(b){b.execute()}):DomHelpers.addClass(this.element,'bengor-cookies--visible')}},{key:'accept',value:function accept(){CookieHelpers.create(this.cookieName,Math.floor(1e8*Math.random()+1),30),this.plugins.map(function(b){b.execute()}),DomHelpers.removeClass(this.element,'bengor-cookies--visible'),this.onAcceptCallback()}}]),b}();exports.default=Cookies;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,'__esModule',{value:!0}),exports.create=create,exports.get=get;function create(f,a,b){var c=new Date,d='expires=';c.setTime(c.getTime()+1e3*(60*(60*(24*b)))),d+=c.toGMTString(),document.cookie=f+'='+a+'; '+d+'; '+location.hostname.split('.').reverse()[1]+'.'+location.hostname.split('.').reverse()[0]+'; path=/'}function get(e){var a=document.cookie.split(';'),b=a.length,c='';for(e+='=';b--;){for(c=a[b];' '==c.charAt(0);)c=c.substring(1);if(0==c.indexOf(e))return c.substring(e.length,c.length)}return!1}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,'__esModule',{value:!0}),exports.GoogleTagManager=void 0;var _GoogleTagManager=__webpack_require__(6),_GoogleTagManager2=_interopRequireDefault(_GoogleTagManager);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}exports.GoogleTagManager=_GoogleTagManager2.default;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _createClass=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,'value'in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),_DomHelpers=__webpack_require__(0),DomHelpers=_interopRequireWildcard(_DomHelpers);Object.defineProperty(exports,'__esModule',{value:!0});function _interopRequireWildcard(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b.default=a,b}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}var GoogleTagManager=function(){function b(){var c=0<arguments.length&&void 0!==arguments[0]&&arguments[0];_classCallCheck(this,b),this.id=c,this.element=document.createElement('div'),this.element.setAttribute('id','bengor-cookies-gtm')}return _createClass(b,[{key:'execute',value:function execute(){if(!(!1===this.id||this.element.innerHTML)){var c='(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({"gtm.start":new Date().getTime(),event:"gtm.js"});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!="dataLayer"?"&l="+l:"";j.async=true;j.src="//www.googletagmanager.com/gtm.js?id="+i+dl;f.parentNode.insertBefore(j,f);})(window,document,"script","dataLayer","'+this.id+'");',a=document.getElementsByTagName('BODY')[0];this.element.innerHTML='<script>'+c+'</script>',DomHelpers.prepend(a,this.element,c)}}}]),b}();exports.default=GoogleTagManager;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,'__esModule',{value:!0}),exports.Ie9=exports.Default=void 0;var _Default=__webpack_require__(8),_Default2=_interopRequireDefault(_Default),_Ie=__webpack_require__(9),_Ie2=_interopRequireDefault(_Ie);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}exports.Default=_Default2.default,exports.Ie9=_Ie2.default;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,'__esModule',{value:!0});var render=function(){var e=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},f=e.link,g=f===void 0?'/cookies':f,a=e.linkText,h=a===void 0?'Cookies policy':a,b=e.text,i=b===void 0?'':b,c=e.acceptText,j=c===void 0?'Accept':c;return'<div class="bengor-cookies js-bengor-cookies">\n      <div class="bengor-cookies__content">\n          <p class="bengor-cookies__text">\n              '+i+'\n              <a href="'+g+'" class="bengor-cookies__link" target="_blank">'+h+'</a>.\n          </p>\n      </div>\n      <div class="bengor-cookies__actions">\n          <a class="bengor-cookies__button js-bengor-cookies-accept">'+j+'</a>\n      </div>\n  </div>'};exports.default=render;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,'__esModule',{value:!0});var render=function(){var e=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},f=e.link,g=f===void 0?'/cookies':f,a=e.linkText,h=a===void 0?'Cookies policy':a,b=e.text,i=b===void 0?'':b,c=e.acceptText,j=c===void 0?'Accept':c;return'<div class="cookies bengor-cookies js-bengor-cookies">\n    <table class="bengor-cookies__content-wrapper" cellpadding="0" cellspacing="0" width="100%">\n        <tr>\n            <td class="bengor-cookies__content">\n                <p class="bengor-cookies__text">\n                    '+i+'\n                    <a href="'+g+'" class="bengor-cookies__link" target="_blank">'+h+'</a>.\n                </p>\n            </td>\n            <td class="bengor-cookies__actions">\n                <a class="bengor-cookies__button js-bengor-cookies-accept">'+j+'</a>\n            </td>\n        </tr>\n    </table>\n</div>'};exports.default=render;

/***/ })
/******/ ]);
});