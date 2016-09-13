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
  constructor({links = '.js-bengor-cookies-accept', maxPageYOffset = false, renderers = [], template = null} = {}) {
    if(template) {
      document.querySelector('body').insertAdjacentHTML('beforeend', template);
    }
    
    this.element = document.querySelector('.js-bengor-cookies');

    if (null === this.element) {
      throw new DOMError('"js-bengor-cookies" class is not added to your cookies element');
    }
    
    this.links = links;
    this.maxPageYOffset = maxPageYOffset;
    this.renderers = renderers;
  }

  getLinks() {
    return this.links;
  }

  show() {
    if (!CookieHelpers.get('username')) {
      DomHelpers.addClass(this.element, 'bengor-cookies--visible');
    } else {
      this.renderers.forEach((renderer) => {
        renderer.render()
      });
    }
  }

  accept() {
    CookieHelpers.create('username', Math.floor((Math.random() * 100000000) + 1), 30);
    
    this.renderers.forEach((renderer) => {
      renderer.render()
    });

    DomHelpers.removeClass(this.element, 'bengor-cookies--visible');
  }

  scrollingAccept() {
    if (false === this.maxPageYOffset) {
      return;
    }

    if (window.pageYOffset > this.maxPageYOffset) {
      this.accept();
    }
  }
}

export default Cookies;
