/*
 * This file is part of the BenGorCookies library.
 *
 * (c) Beñat Espiña <benatespina@gmail.com>
 * (c) Gorka Laucirica <gorka.lauzirika@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import GoogleTagManager from './../../../src/js/Plugins/GoogleTagManager.js';
import Plugin from './../../../src/js/Plugins/Plugin.js';

beforeEach(() => {
  const gtmScriptNodes = document.getElementsByTagName('script');
  const gtmNoScriptNodes = document.getElementsByTagName('noscript');

  Array.from(gtmScriptNodes).forEach(gtmScriptNode => gtmScriptNode.parentNode.removeChild(gtmScriptNode));
  Array.from(gtmNoScriptNodes).forEach(gtmNoScriptNode => gtmNoScriptNode.parentNode.removeChild(gtmNoScriptNode));
});

test('GoogleTagManager should be a "Plugin" instance"', () => {
  const googleTagManager = new GoogleTagManager();

  expect(googleTagManager).toBeInstanceOf(Plugin);
});

test('GoogleTagManager should not render GTM block when the id is not defined', () => {
  const googleTagManager = new GoogleTagManager();

  googleTagManager.execute();
  expect(document.getElementsByTagName('script')[0]).toBeUndefined();
  expect(document.getElementsByTagName('noscript')[0]).toBeUndefined();
});

test('GoogleTagManager should render GTM block when the id is defined', () => {
  const googleTagManager = new GoogleTagManager('gtm-id');

  expect(document.getElementsByTagName('script')[0]).toBeUndefined();
  expect(document.getElementsByTagName('noscript')[0]).toBeUndefined();
  googleTagManager.execute();
  expect(document.getElementsByTagName('script')[0].parentNode.nodeName).toBe('HEAD');
  expect(document.getElementsByTagName('noscript')[0].parentNode.nodeName).toBe('BODY');
  expect(document.getElementsByTagName('noscript')[0].innerHTML).toBe(
    `<iframe src=\"https://www.googletagmanager.com/ns.html?id=gtm-id\" style=\"height: 0px; width: 0px; display: none; visibility: hidden;\"></iframe>`
  );
  expect(document.getElementsByTagName('script')[0].getAttribute('src')).toBe(
    '//www.googletagmanager.com/gtm.js?id=gtm-id'
  );
  expect(document.getElementsByTagName('script')[1].innerHTML).toBe(`
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({
  "gtm.start":new Date().getTime(),event:"gtm.js"});
  var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!="dataLayer"?"&l="+l:"";
  j.async=true;
  j.src="//www.googletagmanager.com/gtm.js?id="+i+dl;
  f.parentNode.insertBefore(j,f);
})(window,document,"script","dataLayer","gtm-id");
`);
});

test('GoogleTagManager should render GTM block when the id, auth and preview is defined', () => {
  const googleTagManager = new GoogleTagManager('gtm-id', 'auth-id', 'preview');

  expect(document.getElementsByTagName('script')[0]).toBeUndefined();
  expect(document.getElementsByTagName('noscript')[0]).toBeUndefined();
  googleTagManager.execute();
  expect(document.getElementsByTagName('script')[0].parentNode.nodeName).toBe('HEAD');
  expect(document.getElementsByTagName('noscript')[0].parentNode.nodeName).toBe('BODY');
  expect(document.getElementsByTagName('noscript')[0].innerHTML).toBe(
    `<iframe src=\"https://www.googletagmanager.com/ns.html?id=gtm-id&amp;gtm_auth=auth-id&amp;gtm_preview=preview&amp;gtm_cookies_win=x&quot;\" style=\"height: 0px; width: 0px; display: none; visibility: hidden;\"></iframe>`
  );
  //  expect(document.getElementsByTagName('script')[0].innerHTML).toBe(
  //    '//www.googletagmanager.com/gtm.js?id=gtm-id&gtm_auth=auth-id&gtm_preview=preview',
  //  );
  expect(document.getElementsByTagName('script')[0].innerHTML).toBe(`
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({
  "gtm.start":new Date().getTime(),event:"gtm.js"});
  var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!="dataLayer"?"&l="+l:"";
  j.async=true;
  j.src="//www.googletagmanager.com/gtm.js?id="+i+dl+"&gtm_auth=auth-id&gtm_preview=preview&gtm_cookies_win=x";
  f.parentNode.insertBefore(j,f);
})(window,document,"script","dataLayer","gtm-id");
`);
});
