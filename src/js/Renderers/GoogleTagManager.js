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

class GoogleTagManager {
  constructor(id = false) {
    this.id = id;
    this.element = document.createElement('div');
    this.element.setAttribute('id', 'bengor-cookies-gtm');
  }

  render() {
    if (this.id === false || this.element.innerHTML) {
      return;
    }

    this.element.innerHTML =
      '<noscript><iframe src="//www.googletagmanager.com/ns.html?id=' + this.id + '"' +
      'height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>' +
      '<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({"gtm.start":' +
      'new Date().getTime(),event:"gtm.js"});var f=d.getElementsByTagName(s)[0],' +
      'j=d.createElement(s),dl=l!="dataLayer"?"&l="+l:"";j.async=true;j.src=' +
      '"//www.googletagmanager.com/gtm.js?id="+i+dl;f.parentNode.insertBefore(j,f);' +
      '})(window,document,"script","dataLayer","' + this.id + '");</script>';

    const body = document.getElementsByTagName('BODY')[0];

    body.insertBefore(this.element, body.firstChild);

    const
      insertedScript = body.firstChild,
      script = insertedScript.querySelector('script').innerHTML;

    eval(script);
  }
}

export default GoogleTagManager;
