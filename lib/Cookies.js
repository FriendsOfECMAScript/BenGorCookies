/*
 * This file is part of the BenGorCookies library.
 *
 * (c) Beñat Espiña <benatespina@gmail.com>
 * (c) Gorka Laucirica <gorka.lauzirika@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

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