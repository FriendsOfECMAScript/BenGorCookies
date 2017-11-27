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
  constructor(
    {triggers = 'html', maxPageYOffset = false, plugins = [], template = null, onAcceptCallback = () => {}} = {},
  ) {
    this.triggers = [...document.querySelectorAll(triggers)];
    this.cookieName = 'bengor-cookie';
    this.scrollMovement = 0;
    this.maxPageYOffset = maxPageYOffset;
    this.plugins = plugins;

    this.injectTemplate(template);
    this.setDomNode(document.querySelector('.js-bengor-cookies'));
    this.bindListeners(onAcceptCallback);
    this.init();
  }

  injectTemplate(template) {
    if (template) {
      document.querySelector('body').insertAdjacentHTML('beforeend', template);
    }
  }

  setDomNode(node) {
    this.checkDomNodeExists(node);
    this.element = node;
  }

  checkDomNodeExists(node) {
    if (null === node) {
      throw new Error('"js-bengor-cookies" class is not added to your cookies element');
    }
  }

  bindListeners(onAcceptCallback) {
    this.onAcceptCallback = onAcceptCallback.bind(this);
    this.onClickAccept = this.onClickAccept.bind(this);
    this.onScrollAccept = this.onScrollAccept.bind(this);
  }

  init() {
    if (false !== this.maxPageYOffset) {
      this.enableInteraction('wheel', this.onScrollAccept);
    }
    this.enableInteraction(['click', 'touchstart'], this.onClickAccept);
    this.show();
  }

  onClickAccept() {
    this.accept();
    this.removeEventListeners();
  }

  onScrollAccept(event) {
    this.scrollMovement += event.deltaY;
    if (this.scrollMovement > this.maxPageYOffset) {
      this.onClickAccept();
    }
  }

  accept() {
    CookieHelpers.create(this.cookieName, Math.floor(Math.random() * 100000000 + 1), 30);
    this.plugins.map(plugin => plugin.execute());
    DomHelpers.removeClass(this.element, 'bengor-cookies--visible');
    this.onAcceptCallback();
  }

  removeEventListeners() {
    ['click', 'touchstart', 'wheel'].map(event =>
      this.triggers.map(trigger => {
        trigger.removeEventListener(event, this.onScrollAccept, true);
        trigger.removeEventListener(event, this.onClickAccept, true);
      }),
    );
  }

  enableInteraction(events, callback) {
    if (!(events instanceof Array)) {
      events = [events];
    }
    this.triggers.map(trigger => events.map(event => trigger.addEventListener(event, callback, true)));
  }

  show() {
    !CookieHelpers.get(this.cookieName)
      ? DomHelpers.addClass(this.element, 'bengor-cookies--visible')
      : this.plugins.map(plugin => plugin.execute());
  }
}

export default Cookies;
