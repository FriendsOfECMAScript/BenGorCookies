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

var _Cookies = require('./Cookies');

var _Cookies2 = _interopRequireDefault(_Cookies);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BenGorCookies = function BenGorCookies(options) {
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

exports.default = BenGorCookies;