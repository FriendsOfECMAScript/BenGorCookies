/*
 * This file is part of the BenGorCookies library.
 *
 * (c) Beñat Espiña <benatespina@gmail.com>
 * (c) Gorka Laucirica <gorka.lauzirika@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import Dummy from './../../../src/js/Plugins/Dummy.js';
import Plugin from './../../../src/js/Plugins/Plugin.js';

test('Dummy should be a "Plugin" instance"', () => {
  const dummy = new Dummy();

  expect(dummy).toBeInstanceOf(Plugin);
});

test('Dummy should render DOM node with "dummy" class name', () => {
  const dummy = new Dummy();

  expect(document.querySelector('.dummy')).toBeNull();
  dummy.execute();
  expect(document.querySelector('.dummy')).not.toBeNull();
  expect(document.querySelector('.dummy').innerHTML).toBe('Dummy');
});
