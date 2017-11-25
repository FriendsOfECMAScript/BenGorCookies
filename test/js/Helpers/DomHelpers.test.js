/*
 * This file is part of the BenGorCookies library.
 *
 * (c) Beñat Espiña <benatespina@gmail.com>
 * (c) Gorka Laucirica <gorka.lauzirika@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import * as DomHelpers from './../../../src/js/Helpers/DomHelpers';

test('should contain the class', () => {
  expect(DomHelpers.hasClass(document.querySelector('body'), 'this-is-test')).toBeNull();

  document.querySelector('body').className = 'this-is-test';
  expect(DomHelpers.hasClass(document.querySelector('body'), 'this-is-test')).not.toBeNull();
});

test('should add the class', () => {
  expect(document.querySelector('body').className).toBe('this-is-test');

  DomHelpers.addClass(document.querySelector('body'), 'this-is-test-2');
  expect(document.querySelector('body').className).toBe('this-is-test this-is-test-2');
});

test('should remove the class', () => {
  expect(document.querySelector('body').className).toBe('this-is-test this-is-test-2');

  DomHelpers.removeClass(document.querySelector('body'), 'this-is-test-2');
  expect(document.querySelector('body').className).toBe('this-is-test ');

  DomHelpers.removeClass(document.querySelector('body'), 'this-is-test');
  expect(document.querySelector('body').className).toBe(' ');
});
