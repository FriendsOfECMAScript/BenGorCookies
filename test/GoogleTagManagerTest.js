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

import test from 'ava';
import {jsdom} from 'jsdom';
import 'babel-core/register'

import GoogleTagManager from './../src/js/GoogleTagManager';

test('GoogleTagManager should not render GTM block when the id is not defined', (t) => {
  const googleTagManager = new GoogleTagManager();
  googleTagManager.insertHTML();

  t.is(document.getElementById('bengor-cookies-gtm'), null)
});

test('GoogleTagManager should render GTM block when the id is defined', (t) => {
  const googleTagManager = new GoogleTagManager('gtm-id');
  googleTagManager.insertHTML();

  t.is(
    document.getElementById('bengor-cookies-gtm').innerHTML,
    "<noscript><iframe src=\"//www.googletagmanager.com/ns.html?id=gtm-id\"height=\"0\" width=\"0\" " +
    "style=\"display:none;visibility:hidden\"></iframe></noscript><script " +
    "src=\"//www.googletagmanager.com/gtm.js?id=gtm-id\"></script><script>" +
    "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({\"gtm.start\":new Date().getTime(),event:\"gtm.js\"});" +
    "var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!=\"dataLayer\"?\"&l=\"+l:\"\";j.async=true;" +
    "j.src=\"//www.googletagmanager.com/gtm.js?id=\"+i+dl;f.parentNode.insertBefore(j,f);})(window,document," +
    "\"script\",\"dataLayer\",\"gtm-id\");</script>"
  )
});
