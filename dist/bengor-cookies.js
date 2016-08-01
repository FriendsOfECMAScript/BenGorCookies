(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){


'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _DomHelpers = require('./DomHelpers');

var DomHelpers = _interopRequireWildcard(_DomHelpers);

var _GoogleTagManager = require('./GoogleTagManager');

var _GoogleTagManager2 = _interopRequireDefault(_GoogleTagManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _create(name, value, expirationDays) {
  var date = new Date();
  var expires = 'expires=';

  date.setTime(date.getTime() + expirationDays * 24 * 60 * 60 * 1000);
  expires += date.toGMTString();
  document.cookie = name + '=' + value + '; ' + expires + '; ' + location.hostname.split('.').reverse()[1] + '.' + location.hostname.split('.').reverse()[0] + '; path=/';
}

function _get(name) {
  var cookies = document.cookie.split(';');

  name = name + '=';
  for (var i = 0, length = cookies.length; i < length; i++) {
    var cookie = cookies[i];

    while (cookie.charAt(0) == ' ') {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(name) == 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }

  return false;
}

var Cookies = function () {
  function Cookies() {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, Cookies);

    this.element = document.querySelector('.js-bengor-cookies');
    if (null === this.element) {
      throw new DOMError('"js-bengor-cookies" class is not added to your cookies element');
    }
    this.links = options.links || '.bengor-cookies__actions, .bengor-cookies__button';
    this.maxPageYOffset = options.maxPageYOffset || false;
    this.gtm = new _GoogleTagManager2.default(options.GTMId);

    DomHelpers.addClass(this.element, 'bengor-cookies');
  }

  _createClass(Cookies, [{
    key: 'getLinks',
    value: function getLinks() {
      return this.links;
    }
  }, {
    key: 'show',
    value: function show() {
      if (!_get('username')) {
        DomHelpers.addClass(this.element, 'bengor-cookies--visible');
      } else {
        this.gtm.insertHTML();
      }
    }
  }, {
    key: 'accept',
    value: function accept() {
      _create('username', Math.floor(Math.random() * 100000000 + 1), 30);
      this.gtm.insertHTML();

      DomHelpers.removeClass(this.element, 'bengor-cookies--visible');
    }
  }, {
    key: 'scrollingAccept',
    value: function scrollingAccept() {
      if (false === this.maxPageYOffset) {
        return;
      }

      if (window.pageYOffset > this.maxPageYOffset) {
        this.accept();
      }
    }
  }]);

  return Cookies;
}();

exports.default = Cookies;

},{"./DomHelpers":2,"./GoogleTagManager":3}],2:[function(require,module,exports){


'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasClass = hasClass;
exports.addClass = addClass;
exports.removeClass = removeClass;
function hasClass(element, className) {
  return element.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
}

function addClass(element, className) {
  if (!hasClass(element, className)) element.className += ' ' + className;
}

function removeClass(element, className) {
  if (hasClass(element, className)) {
    var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
    element.className = element.className.replace(reg, ' ');
  }
}

},{}],3:[function(require,module,exports){


'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GoogleTagManager = function () {
  function GoogleTagManager() {
    var id = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

    _classCallCheck(this, GoogleTagManager);

    this.id = id;
    this.element = document.createElement('div');
    this.element.setAttribute('id', 'bengor-cookies-gtm');
  }

  _createClass(GoogleTagManager, [{
    key: 'insertHTML',
    value: function insertHTML() {
      if (this.id === false || this.element.innerHTML) {
        return;
      }

      this.element.innerHTML = '<noscript><iframe src="//www.googletagmanager.com/ns.html?id=' + this.id + '"' + 'height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>' + '<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({"gtm.start":' + 'new Date().getTime(),event:"gtm.js"});var f=d.getElementsByTagName(s)[0],' + 'j=d.createElement(s),dl=l!="dataLayer"?"&l="+l:"";j.async=true;j.src=' + '"//www.googletagmanager.com/gtm.js?id="+i+dl;f.parentNode.insertBefore(j,f);' + '})(window,document,"script","dataLayer","' + this.id + '");</script>';

      var body = document.getElementsByTagName('BODY')[0];
      body.insertBefore(this.element, body.firstChild);
    }
  }]);

  return GoogleTagManager;
}();

exports.default = GoogleTagManager;

},{}],4:[function(require,module,exports){


'use strict';

var _Cookies = require('./Cookies');

var _Cookies2 = _interopRequireDefault(_Cookies);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  window.BenGorCookies = function (options) {
    var cookies = new _Cookies2.default(options);

    window.addEventListener('scroll', function () {
      window.requestAnimationFrame(function () {
        cookies.scrollingAccept();
      });
    });

    cookies.show();
    var elements = document.querySelectorAll(cookies.getLinks());
    for (var i = 0, iLen = elements.length; i < iLen; i++) {
      elements[i].addEventListener('click', function () {
        cookies.accept();
      });
    }
  };
})();

},{"./Cookies":1}]},{},[4]);
