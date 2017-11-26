/*
 * This file is part of the BenGorCookies library.
 *
 * (c) Beñat Espiña <benatespina@gmail.com>
 * (c) Gorka Laucirica <gorka.lauzirika@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

class Plugin {
  constructor() {
    if (this.constructor.name === 'Plugin') {
      throw new TypeError('"Plugin" is an abstract class, it cannot be instantiate directly');
    }
  }

  execute() {
    throw new Error('"execute" is an abstract method that expects to be implemented by children classes');
  }
}

export default Plugin;
