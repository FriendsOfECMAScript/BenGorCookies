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

import * as DomHelpers from './DomHelpers';
import GoogleTagManager from './GoogleTagManager';

function _create(name, value, expirationDays) {
  const date = new Date();
  let expires = 'expires=';

  date.setTime(date.getTime() + (expirationDays * 24 * 60 * 60 * 1000));
  expires += date.toGMTString();
  document.cookie = name + '=' + value + '; ' + expires + '; ' +
    location.hostname.split('.').reverse()[1] + '.' +
    location.hostname.split('.').reverse()[0] + '; path=/';
}

function _get(name) {
  const cookies = document.cookie.split(';');

  name = `${name}=`;
  for (let i = 0, length = cookies.length; i < length; i++) {
    let cookie = cookies[i];

    while (cookie.charAt(0) == ' ') {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(name) == 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }

  return false;
}

class Cookies {
  constructor(options = {}) {
    this.element = document.querySelector('.js-bengor-cookies');
    if (null === this.element) {
      throw new DOMError('"js-bengor-cookies" class is not added to your cookies element');
    }
    this.links = options.links || '.bengor-cookies__actions, .bengor-cookies__button';
    this.maxPageYOffset = options.maxPageYOffset || false;
    this.gtm = new GoogleTagManager(options.GTMId);

    DomHelpers.addClass(this.element, 'bengor-cookies');
  }

  getLinks() {
    return this.links;
  }

  show() {
    if (!_get('username')) {
      this.gtm.remove();
      DomHelpers.addClass(this.element, 'bengor-cookies--visible');
    } else {
      this.gtm.add();
    }
  }

  accept() {
    _create('username', Math.floor((Math.random() * 100000000) + 1), 30);
    this.gtm.add();

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
