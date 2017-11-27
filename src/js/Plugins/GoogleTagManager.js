/*
 * This file is part of the BenGorCookies library.
 *
 * (c) Beñat Espiña <benatespina@gmail.com>
 * (c) Gorka Laucirica <gorka.lauzirika@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import * as DomHelpers from './../Helpers/DomHelpers.js';
import Plugin from './Plugin.js';

class GoogleTagManager extends Plugin {
  constructor(id = false, auth = null, preview = null) {
    super();

    this.id = id;
    this.auth = auth;
    this.preview = preview;
    this.scriptElement = document.createElement('div');
    this.scriptElement.setAttribute('id', 'bengor-cookies-script-gtm');
    this.noScriptElement = document.createElement('div');
    this.noScriptElement.setAttribute('id', 'bengor-cookies-no-script-gtm');
  }

  gtmScript() {
    return (`
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({
  "gtm.start":new Date().getTime(),event:"gtm.js"});
  var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!="dataLayer"?"&l="+l:"";
  j.async=true;
  j.src="//www.googletagmanager.com/gtm.js?id="+i+dl;
  f.parentNode.insertBefore(j,f);
})(window,document,"script","dataLayer","${this.id}");
`);
  }

  authGtmScript() {
    return (`
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({
  "gtm.start":new Date().getTime(),event:"gtm.js"});
  var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!="dataLayer"?"&l="+l:"";
  j.async=true;
  j.src="//www.googletagmanager.com/gtm.js?id="+i+dl+"&gtm_auth=${this.auth}&gtm_preview=${
      this.preview
    }&gtm_cookies_win=x";
  f.parentNode.insertBefore(j,f);
})(window,document,"script","dataLayer","${this.id}");
`);
  }

  gtmNoScript() {
    return (`
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=${this.id}"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
`);
  }

  authGtmNoScript() {
    return (`
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=${
      this.id
    }&gtm_auth=${this.auth}&gtm_preview=${this.preview}&gtm_cookies_win=x"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
`);
  }

  script() {
    return this.auth && this.preview
      ? this.authGtmScript()
      : this.gtmScript();
  }

  noScript() {
    return this.auth && this.preview
      ? this.authGtmNoScript()
      : this.gtmNoScript();
  }

  insertScript() {
    this.scriptElement.innerHTML = `<script>${this.script()}</script>`;
    DomHelpers.prepend(document.head, this.scriptElement, this.script());
  }

  insertNoScript() {
    this.noScriptElement.innerHTML = this.noScript();
    DomHelpers.prepend(document.body, this.noScriptElement);
  }

  execute() {
    if (this.id === false || (this.scriptElement.innerHTML && this.noScriptElement.innerHTML)) {
      return;
    }

    this.insertScript();
    this.insertNoScript();
  }
}

export default GoogleTagManager;
