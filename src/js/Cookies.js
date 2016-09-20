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

import * as CookieHelpers from './Helpers/CookieHelpers';
import * as DomHelpers from './Helpers/DomHelpers';

class Cookies {
  cookieName = 'bengor-cookie';

  constructor({links = 'html', maxPageYOffset = false, plugins = [], template = null} = {}) {
    if (template) {
      document.querySelector('body').insertAdjacentHTML('beforeend', template);
    }

    this.element = document.querySelector('.js-bengor-cookies');

    if (null === this.element) {
      throw new DOMError('"js-bengor-cookies" class is not added to your cookies element');
    }

    this.links = links;
    this.maxPageYOffset = maxPageYOffset;
    this.plugins = plugins;

    if (false !== this.maxPageYOffset) {
      this.enableScrollAccept()
    }

    this.enableClickAccept();
    this.show();
  }

  show() {
    if (!CookieHelpers.get(this.cookieName)) {
      DomHelpers.addClass(this.element, 'bengor-cookies--visible');
    } else {
      this.plugins.forEach((plugin) => {
        plugin.execute()
      });
    }
  }

  accept() {
    CookieHelpers.create(this.cookieName, Math.floor((Math.random() * 100000000) + 1), 30);

    this.plugins.forEach((plugin) => {
      plugin.execute()
    });

    DomHelpers.removeClass(this.element, 'bengor-cookies--visible');
  }

  enableScrollAccept() {
    DomHelpers.one(window, ['scroll', 'mousewheel'], () => {
      window.requestAnimationFrame(() => {
        if (window.pageYOffset > this.maxPageYOffset) {
          this.accept();
        }
      });
    });
  }

  enableClickAccept() {
    const elements = document.querySelectorAll(this.links);
    for (let i = 0, iLen = elements.length; i < iLen; i++) {
      DomHelpers.one(elements[i], ['click', 'touchstart', 'mousewheel'], () => {
        this.accept();
      });
    }
  }
}

export default Cookies;
