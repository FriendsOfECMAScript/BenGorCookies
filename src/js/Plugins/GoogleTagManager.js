/*
 * This file is part of the BenGorCookies library.
 *
 * (c) Beñat Espiña <benatespina@gmail.com>
 * (c) Gorka Laucirica <gorka.lauzirika@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import Plugin from './Plugin.js';

class GoogleTagManager extends Plugin {
  constructor(id = false, auth = null, preview = null) {
    super();

    this.id = id;
    this.auth = auth;
    this.preview = preview;
    this.scriptElement = document.createElement('script');
    this.noScriptElement = document.createElement('noscript');
  }

  gtmScript() {
    return `
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({
  "gtm.start":new Date().getTime(),event:"gtm.js"});
  var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!="dataLayer"?"&l="+l:"";
  j.async=true;
  j.src="//www.googletagmanager.com/gtm.js?id="+i+dl;
  f.parentNode.insertBefore(j,f);
})(window,document,"script","dataLayer","${this.id}");
`;
  }

  authGtmScript() {
    return `
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({
  "gtm.start":new Date().getTime(),event:"gtm.js"});
  var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!="dataLayer"?"&l="+l:"";
  j.async=true;
  j.src="//www.googletagmanager.com/gtm.js?id="+i+dl+"&gtm_auth=${this.auth}&gtm_preview=${
      this.preview
    }&gtm_cookies_win=x";
  f.parentNode.insertBefore(j,f);
})(window,document,"script","dataLayer","${this.id}");
`;
  }

  gtmNoScript() {
    return `id=${this.id}`;
  }

  authGtmNoScript() {
    return `id=${this.id}&gtm_auth=${this.auth}&gtm_preview=${this.preview}&gtm_cookies_win=x"`;
  }

  script() {
    return this.auth && this.preview ? this.authGtmScript() : this.gtmScript();
  }

  noScript() {
    return this.auth && this.preview ? this.authGtmNoScript() : this.gtmNoScript();
  }

  insertScript() {
    this.scriptElement.innerHTML = this.script();
    document.head.insertBefore(this.scriptElement, document.head.firstChild);
  }

  insertNoScript() {
    const iframe = document.createElement('iframe');

    iframe.setAttribute('src', `https://www.googletagmanager.com/ns.html?${this.noScript()}`);
    iframe.style.height = '0';
    iframe.style.width = '0';
    iframe.style.display = 'none';
    iframe.style.visibility = 'hidden';

    this.noScriptElement.appendChild(iframe);
    document.body.insertBefore(this.noScriptElement, document.body.firstChild);
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
