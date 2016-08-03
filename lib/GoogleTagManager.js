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