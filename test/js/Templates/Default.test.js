/*
 * This file is part of the BenGorCookies library.
 *
 * (c) Beñat Espiña <benatespina@gmail.com>
 * (c) Gorka Laucirica <gorka.lauzirika@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import Default from './../../../src/js/Templates/Default';

test('Renders default template passing custom text', () => {
  expect(Default({text: 'This is a test cookies'})).toBe((
    `<div class="bengor-cookies js-bengor-cookies">
      <div class="bengor-cookies__content">
          <p class="bengor-cookies__text">
              This is a test cookies
              <a href="/cookies" class="bengor-cookies__link" target="_blank">Cookies policy</a>.
          </p>
      </div>
      <div class="bengor-cookies__actions">
          <a class="bengor-cookies__button js-bengor-cookies-accept">Accept</a>
      </div>
  </div>`
  ));
});
