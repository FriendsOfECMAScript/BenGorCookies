/*
 * This file is part of the BenGorCookies library.
 *
 * (c) Beñat Espiña <benatespina@gmail.com>
 * (c) Gorka Laucirica <gorka.lauzirika@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const render = ({link = '/cookies', linkText = 'Cookies policy', text = '', acceptText = 'Accept'} = {}) => (
  `<div class="bengor-cookies js-bengor-cookies">
      <div class="bengor-cookies__content">
          <p class="bengor-cookies__text">
              ${text}
              <a href="${link}" class="bengor-cookies__link" target="_blank">${linkText}</a>.
          </p>
      </div>
      <div class="bengor-cookies__actions">
          <a class="bengor-cookies__button js-bengor-cookies-accept">${acceptText}</a>
      </div>
  </div>`
);

export default render;
