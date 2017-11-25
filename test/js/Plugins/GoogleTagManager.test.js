/*
 * This file is part of the BenGorCookies library.
 *
 * (c) Beñat Espiña <benatespina@gmail.com>
 * (c) Gorka Laucirica <gorka.lauzirika@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import GoogleTagManager from './../../../src/js/Plugins/GoogleTagManager';

test('GoogleTagManager should not render GTM block when the id is not defined', () => {
  const googleTagManager = new GoogleTagManager();
  googleTagManager.execute();

  expect(document.getElementById('bengor-cookies-gtm')).toBeNull();
});

test('GoogleTagManager should render GTM block when the id is defined', () => {
  const googleTagManager = new GoogleTagManager('gtm-id');
  googleTagManager.execute();


  expect().not.toBe(null);
  expect(document.getElementById('bengor-cookies-gtm').parentNode.nodeName).toBe('BODY');

  expect(document.getElementById('bengor-cookies-gtm').innerHTML).toBe(
    '<script src=\"//www.googletagmanager.com/gtm.js?id=gtm-id\"></script>' +
    '<script src=\"//www.googletagmanager.com/gtm.js?id=gtm-id\"></script>' +
    '<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({\"gtm.start\":' +
    'new Date().getTime(),event:\"gtm.js\"});var f=d.getElementsByTagName(s)[0],' +
    'j=d.createElement(s),dl=l!=\"dataLayer\"?\"&l=\"+l:\"\";j.async=true;' +
    'j.src=\"//www.googletagmanager.com/gtm.js?id=\"+i+dl;f.parentNode.insertBefore(j,f);' +
    '})(window,document,\"script\",\"dataLayer\",\"gtm-id\");</script>'
  );
});
