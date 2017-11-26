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

class Dummy extends Plugin {
  execute() {
    const body = document.getElementsByTagName('BODY')[0];
    const element = document.createElement('div');

    element.innerHTML = '<div class="dummy"></div>';

    DomHelpers.prepend(body, element);
  }
}

export default Dummy;
