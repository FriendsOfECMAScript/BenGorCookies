/*
 * This file is part of the BenGorCookies library.
 *
 * (c) Beñat Espiña <benatespina@gmail.com>
 * (c) Gorka Laucirica <gorka.lauzirika@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import * as DomHelpers from './../Helpers/DomHelpers.js';
import Plugin from './Plugin.js';

class GoogleTagManager extends Plugin {
  constructor(id = false) {
    super();

    this.id = id;
    this.element = document.createElement('div');
    this.element.setAttribute('id', 'bengor-cookies-gtm');
  }

  execute() {
    if (this.id === false || this.element.innerHTML) {
      return;
    }

    const
      tagManagerScript =
        '(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({"gtm.start":' +
        'new Date().getTime(),event:"gtm.js"});var f=d.getElementsByTagName(s)[0],' +
        'j=d.createElement(s),dl=l!="dataLayer"?"&l="+l:"";j.async=true;j.src=' +
        '"//www.googletagmanager.com/gtm.js?id="+i+dl;f.parentNode.insertBefore(j,f);' +
        '})(window,document,"script","dataLayer","' + this.id + '");',
      body = document.getElementsByTagName('BODY')[0];

    this.element.innerHTML = `<script>${tagManagerScript}</script>`;
    DomHelpers.prepend(body, this.element, tagManagerScript);
  }
}

export default GoogleTagManager;
