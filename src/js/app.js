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

import Cookies from './Cookies';
import GoogleTagManager from './Renderers/GoogleTagManager';

(() => {
  window.BenGorCookies = (options) => {
    const cookies = new Cookies(options);

    window.addEventListener('scroll', () => {
      window.requestAnimationFrame(() => {
        cookies.scrollingAccept();
      });
    });

    cookies.show();
    const elements = document.querySelectorAll(cookies.getLinks());
    for (let i = 0, iLen = elements.length; i < iLen; i++) {
      elements[i].addEventListener('click', () => {
        cookies.accept();
      });
    }
  };

  window.BenGorCookiesRenderers = {
    GoogleTagManager
  }
})();
