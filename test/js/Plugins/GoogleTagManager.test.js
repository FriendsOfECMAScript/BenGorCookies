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
  const gtmScriptNode = document.getElementById('bengor-cookies-script-gtm');
  const gtmNoScriptNode = document.getElementById('bengor-cookies-no-script-gtm');

  if (gtmScriptNode) {
    gtmScriptNode.parentNode.removeChild(gtmScriptNode);
  }
  if (gtmNoScriptNode) {
    gtmNoScriptNode.parentNode.removeChild(gtmNoScriptNode);
  }
});

test('GoogleTagManager should be a "Plugin" instance"', () => {
  const googleTagManager = new GoogleTagManager();

  expect(googleTagManager).toBeInstanceOf(Plugin);
});

test('GoogleTagManager should not render GTM block when the id is not defined', () => {
  const googleTagManager = new GoogleTagManager();

  googleTagManager.execute();
  expect(document.getElementById('bengor-cookies-script-gtm')).toBeNull();
  expect(document.getElementById('bengor-cookies-no-script-gtm')).toBeNull();
});

test('GoogleTagManager should render GTM block when the id is defined', () => {
  const googleTagManager = new GoogleTagManager('gtm-id');

  expect(document.getElementById('bengor-cookies-script-gtm')).toBeNull();
  expect(document.getElementById('bengor-cookies-no-script-gtm')).toBeNull();
  googleTagManager.execute();
  expect(document.getElementById('bengor-cookies-script-gtm').parentNode.nodeName).toBe('HEAD');
  expect(document.getElementById('bengor-cookies-no-script-gtm').parentNode.nodeName).toBe('BODY');

  expect(document.getElementById('bengor-cookies-no-script-gtm').innerHTML).toBe(`
<noscript><iframe src=\"https://www.googletagmanager.com/ns.html?id=gtm-id\"
height=\"0\" width=\"0\" style=\"display:none;visibility:hidden\"></iframe></noscript>
`);

  expect(document.getElementById('bengor-cookies-script-gtm').innerHTML).toBe(
    `<script src=\"//www.googletagmanager.com/gtm.js?id=gtm-id\"></script><script src=\"//www.googletagmanager.com/gtm.js?id=gtm-id\"></script><script>
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({
  "gtm.start":new Date().getTime(),event:"gtm.js"});
  var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!="dataLayer"?"&l="+l:"";
  j.async=true;
  j.src="//www.googletagmanager.com/gtm.js?id="+i+dl;
  f.parentNode.insertBefore(j,f);
})(window,document,"script","dataLayer","gtm-id");
</script>`,
  );
});

test('GoogleTagManager should render GTM block when the id, auth and preview is defined', () => {
  const googleTagManager = new GoogleTagManager('gtm-id', 'auth-id', 'preview');

  expect(document.getElementById('bengor-cookies-script-gtm')).toBeNull();
  expect(document.getElementById('bengor-cookies-no-script-gtm')).toBeNull();
  googleTagManager.execute();
  expect(document.getElementById('bengor-cookies-script-gtm').parentNode.nodeName).toBe('HEAD');
  expect(document.getElementById('bengor-cookies-no-script-gtm').parentNode.nodeName).toBe('BODY');

  expect(document.getElementById('bengor-cookies-no-script-gtm').innerHTML).toBe(`
<noscript><iframe src=\"https://www.googletagmanager.com/ns.html?id=gtm-id&gtm_auth=auth-id&gtm_preview=preview&gtm_cookies_win=x\"
height=\"0\" width=\"0\" style=\"display:none;visibility:hidden\"></iframe></noscript>
`);

  expect(document.getElementById('bengor-cookies-script-gtm').innerHTML).toBe(
    `<script src="//www.googletagmanager.com/gtm.js?id=gtm-id&amp;gtm_auth=auth-id&amp;gtm_preview=preview&amp;gtm_cookies_win=x"></script><script>
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({
  "gtm.start":new Date().getTime(),event:"gtm.js"});
  var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!="dataLayer"?"&l="+l:"";
  j.async=true;
  j.src="//www.googletagmanager.com/gtm.js?id="+i+dl+"&gtm_auth=auth-id&gtm_preview=preview&gtm_cookies_win=x";
  f.parentNode.insertBefore(j,f);
})(window,document,"script","dataLayer","gtm-id");
</script>`,
  );
});
