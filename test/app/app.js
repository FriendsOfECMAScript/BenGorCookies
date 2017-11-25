/*
 * This file is part of the BenGorCookies library.
 *
 * (c) Beñat Espiña <benatespina@gmail.com>
 * (c) Gorka Laucirica <gorka.lauzirika@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {BenGorCookies, BenGorCookiesPlugins, BenGorCookiesTemplates} from 'bengor-cookies';

document.addEventListener('DOMContentLoaded', () => {
  new BenGorCookies({
    triggers: 'html',
    maxPageYOffset: 400,
    plugins: [
      new BenGorCookiesPlugins.GoogleTagManager('GTM-XXXXX'),
    ],
    template: BenGorCookiesTemplates.Default({
      link: '/cookies',
      linkText: 'Cookies policy',
      text: 'We use bengor-cookies to provide a better browsing experience and a more ' +
      'personalized service. If you continue browsing, we consider accepting its use. ' +
      'You can change the settings or get more information by consulting our',
      acceptText: 'Accept',
    }),
    onAcceptCallback: () => {
      console.log('Cookies are now accepted!')
    },
  });
});
