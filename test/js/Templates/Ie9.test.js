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

import Ie9 from './../../../src/js/Templates/Ie9';

test('Renders default template passing custom text', () => {
  expect(Ie9({text: 'This is a test cookies'})).toBe((
    `<div class="cookies bengor-cookies js-bengor-cookies">
    <table class="bengor-cookies__content-wrapper" cellpadding="0" cellspacing="0" width="100%">
        <tr>
            <td class="bengor-cookies__content">
                <p class="bengor-cookies__text">
                    This is a test cookies
                    <a href="/cookies" class="bengor-cookies__link" target="_blank">Cookies policy</a>.
                </p>
            </td>
            <td class="bengor-cookies__actions">
                <a class="bengor-cookies__button js-bengor-cookies-accept">Accept</a>
            </td>
        </tr>
    </table>
</div>`
  ));
});
