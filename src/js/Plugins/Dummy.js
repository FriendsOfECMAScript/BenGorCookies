/*
 * This file is part of the BenGorCookies library.
 *
 * (c) Beñat Espiña <benatespina@gmail.com>
 * (c) Gorka Laucirica <gorka.lauzirika@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import Plugin from './Plugin.js';

class Dummy extends Plugin {
  execute() {
    const element = document.createElement('div');

    element.innerHTML = '<div class="dummy">Dummy</div>';

    document.body.appendChild(element);
  }
}

export default Dummy;
