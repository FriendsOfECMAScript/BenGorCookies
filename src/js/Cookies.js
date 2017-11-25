/*
 * This file is part of the BenGorCookies library.
 *
 * (c) Beñat Espiña <benatespina@gmail.com>
 * (c) Gorka Laucirica <gorka.lauzirika@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import * as CookieHelpers from './Helpers/CookieHelpers.js';
import * as DomHelpers from './Helpers/DomHelpers.js';

class Cookies {
  constructor({
    triggers = 'html',
    maxPageYOffset = false,
    plugins = [],
    template = null,
    onAcceptCallback = () => {}
  } = {}) {
    if (template) {
      document.querySelector('body').insertAdjacentHTML('beforeend', template);
    }

    this.element = document.querySelector('.js-bengor-cookies');
    this.triggers = [...document.querySelectorAll(triggers)];

    if (null === this.element) {
      throw new DOMError('"js-bengor-cookies" class is not added to your cookies element');
    }

    this.cookieName = 'bengor-cookie';
    this.scrollMovement = 0;
    this.maxPageYOffset = maxPageYOffset;
    this.plugins = plugins;

    this.onAcceptCallback = onAcceptCallback.bind(this);
    this.onClickAccept = this.onClickAccept.bind(this);
    this.onScrollAccept = this.onScrollAccept.bind(this);

    if (false !== this.maxPageYOffset) {
      this.enableInteraction('mousewheel', this.onScrollAccept);
    }

    this.enableInteraction(['click', 'touchstart'], this.onClickAccept);
    this.show();
  }

  removeEventListeners() {
    ['click', 'touchstart', 'mousewheel'].map((event) => {
      this.triggers.map((trigger) => {
        trigger.removeEventListener(event, this.onScrollAccept, true);
        trigger.removeEventListener(event, this.onClickAccept, true);
      })
    });
  }

  onScrollAccept(event) {
    this.scrollMovement += event.deltaY;
    if (this.scrollMovement > this.maxPageYOffset) {
      this.onClickAccept();
    }
  }

  onClickAccept() {
    this.accept();

    this.removeEventListeners();
  }

  enableInteraction(events, callback) {
    if (!(events instanceof Array)) {
      events = [events];
    }
    this.triggers.map((trigger) => {
      events.map((event) => {
        trigger.addEventListener(event, callback, true);
      });
    });
  }

  show() {
    if (!CookieHelpers.get(this.cookieName)) {
      DomHelpers.addClass(this.element, 'bengor-cookies--visible');
    } else {
      this.plugins.map((plugin) => {
        plugin.execute()
      });
    }
  }

  accept() {
    CookieHelpers.create(this.cookieName, Math.floor((Math.random() * 100000000) + 1), 30);

    this.plugins.map((plugin) => {
      plugin.execute()
    });

    DomHelpers.removeClass(this.element, 'bengor-cookies--visible');

    this.onAcceptCallback();
  }
}

export default Cookies;
