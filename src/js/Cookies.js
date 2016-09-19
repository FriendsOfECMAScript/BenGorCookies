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

  constructor({links = '.js-bengor-cookies-accept', maxPageYOffset = false, renderers = [], template = null} = {}) {
    if (template) {
      document.querySelector('body').insertAdjacentHTML('beforeend', template);
    }

    this.element = document.querySelector('.js-bengor-cookies');

    if (null === this.element) {
      throw new DOMError('"js-bengor-cookies" class is not added to your cookies element');
    }

    this.links = links;
    this.maxPageYOffset = maxPageYOffset;
    this.renderers = renderers;

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
      this.renderers.forEach((renderer) => {
        renderer.render()
      });
    }
  }

  accept() {
    CookieHelpers.create(this.cookieName, Math.floor((Math.random() * 100000000) + 1), 30);

    this.renderers.forEach((renderer) => {
      renderer.render()
    });

    DomHelpers.removeClass(this.element, 'bengor-cookies--visible');
  }

  enableScrollAccept() {
    window.addEventListener('scroll', () => {
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
      elements[i].addEventListener('click', () => {
        this.accept();
      });
    }
  }
}

export default Cookies;
