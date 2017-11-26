/*
 * This file is part of the BenGorCookies library.
 *
 * (c) Beñat Espiña <benatespina@gmail.com>
 * (c) Gorka Laucirica <gorka.lauzirika@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import * as CookiesHelpers from './../../../src/js/Helpers/CookieHelpers';

test('should create the cookie', () => {
  expect(CookiesHelpers.get('bengor-cookie')).toBe(false);
  CookiesHelpers.create('bengor-cookie', 'testvalue', 2);
  expect(CookiesHelpers.get('bengor-cookie')).toBe('testvalue');
});

test('should not get non existent cookie', () => {
  expect(CookiesHelpers.get('non-existent-cookie')).toBe(false);
});

test('should get a cookie', () => {
  CookiesHelpers.create('bengor-cookie1', 'testvalue1', 2);
  CookiesHelpers.create('bengor-cookie2', 'testvalue2', 1);
  CookiesHelpers.create('bengor-cookie3', 'testvalue3', 10);

  expect(CookiesHelpers.get('bengor-cookie1')).toBe('testvalue1');
  expect(CookiesHelpers.get('bengor-cookie2')).toBe('testvalue2');
  expect(CookiesHelpers.get('bengor-cookie3')).toBe('testvalue3');
});
