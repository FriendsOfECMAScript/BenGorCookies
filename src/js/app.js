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

import BenGorCookies from './index';
import GoogleTagManager from './Renderers/GoogleTagManager';
import Default from './Templates/Default';

(() => {
  window.BenGorCookies = BenGorCookies;

  window.BenGorCookiesRenderers = {
    GoogleTagManager
  };

  window.BenGorCookiesTemplates = {
    Default
  };
})();
