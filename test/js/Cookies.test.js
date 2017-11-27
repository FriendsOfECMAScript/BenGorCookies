/*
 * This file is part of the BenGorCookies library.
 *
 * (c) Beñat Espiña <benatespina@gmail.com>
 * (c) Gorka Laucirica <gorka.lauzirika@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

jest.mock('./../../src/js/Helpers/CookieHelpers.js', () => ({
  get: jest.fn(),
  create: jest.fn(),
}));

import Cookies from './../../src/js/Cookies.js';
import Dummy from './../../src/js/Plugins/Dummy.js';
import {get, create} from './../../src/js/Helpers/CookieHelpers.js';

let eventListeners = [];
const addEventListener = EventTarget.prototype.addEventListener;
EventTarget.prototype.addEventListener = function(type, fn, capture) {
  this.f = addEventListener;
  this.f(type, fn, capture);
  if (this.nodeName === 'HTML') {
    eventListeners.push(type);
  }
};
const removeEventListener = EventTarget.prototype.addEventListener;
EventTarget.prototype.removeEventListener = function(type, fn, capture) {
  this.f = removeEventListener;
  this.f(type, fn, capture);
  eventListeners = eventListeners.filter(item => item !== type);
};

beforeEach(() => {
  document.cookie.split(';').forEach(cookie => {
    document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, '=;expires=' + new Date().toUTCString() + ';path=/');
  });

  const dummyNode = document.querySelector('.dummy');
  if (dummyNode) {
    dummyNode.parentNode.removeChild(dummyNode);
  }
});

test('should not create cookies without template', () => {
  expect(() => new Cookies()).toThrowError('"js-bengor-cookies" class is not added to your cookies element');
});

test('should not create cookies with a template that does not have ".js-bengor-cookies" DOM node', () => {
  expect(
    () =>
      new Cookies({
        template: '<div></div>',
      })
  ).toThrowError('"js-bengor-cookies" class is not added to your cookies element');
});

test('should not show cookies', () => {
  get.mockImplementation(() => 'testvalue');

  new Cookies({
    template: '<div class="js-bengor-cookies"></div>',
  });

  expect(document.querySelector('.bengor-cookies--visible')).toBeNull();
});

test('should show cookies', () => {
  get.mockImplementation(() => false);

  expect(document.querySelector('.bengor-cookies--visible')).toBeNull();

  new Cookies({
    template: '<div class="js-bengor-cookies"></div>',
  });

  expect(document.querySelector('.bengor-cookies--visible')).not.toBeNull();
});
test('should accept cookies with a click', () => {
  create.mockImplementation(() => (document.cookie = 'bengor-cookie=testvalue'));
  get.mockReturnValueOnce(false);
  get.mockReturnValue('testvalue');

  eventListeners = [];

  const uuid = Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
  const instance = new Cookies({
    triggers: 'html',
    plugins: [new Dummy()],
    template: '<div class="js-bengor-cookies"></div>',
    onAcceptCallback: () => {
      document.querySelector('body').insertAdjacentHTML('beforeend', `<div id="${uuid}">`);
    },
  });

  expect(eventListeners).toEqual(['click', 'touchstart']);
  expect(document.querySelector('.bengor-cookies--visible')).not.toBeNull();
  expect(document.querySelector('.dummy')).toBeNull();
  expect(document.getElementById(uuid)).toBeNull();
  instance.onClickAccept();
  expect(eventListeners).toEqual([]);
  expect(document.querySelector('.bengor-cookies--visible')).toBeNull();
  expect(document.querySelector('.dummy')).not.toBeNull();
  expect(document.getElementById(uuid)).not.toBeNull();
});

test('should accept cookies with a scroll', () => {
  create.mockImplementation(() => (document.cookie = 'bengor-cookie=testvalue'));
  get.mockReturnValueOnce(false);
  get.mockReturnValue('testvalue');

  eventListeners = [];

  const uuid = Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
  const instance = new Cookies({
    triggers: 'html',
    maxPageYOffset: 400,
    plugins: [new Dummy()],
    template: '<div class="js-bengor-cookies"></div>',
    onAcceptCallback: () => {
      document.querySelector('body').insertAdjacentHTML('beforeend', `<div id="${uuid}">`);
    },
  });

  expect(eventListeners).toEqual(['wheel', 'click', 'touchstart']);
  expect(document.querySelector('.bengor-cookies--visible')).not.toBeNull();
  expect(document.querySelector('.dummy')).toBeNull();
  expect(document.getElementById(uuid)).toBeNull();
  instance.onScrollAccept({deltaY: 400});
  expect(eventListeners).toEqual(['wheel', 'click', 'touchstart']);
  expect(document.querySelector('.bengor-cookies--visible')).not.toBeNull();
  expect(document.querySelector('.dummy')).toBeNull();
  expect(document.getElementById(uuid)).toBeNull();
});

test('should accept cookies with a scroll', () => {
  create.mockImplementation(() => (document.cookie = 'bengor-cookie=testvalue'));
  get.mockReturnValueOnce(false);
  get.mockReturnValue('testvalue');

  eventListeners = [];

  const uuid = Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
  const instance = new Cookies({
    triggers: 'html',
    maxPageYOffset: 400,
    plugins: [new Dummy()],
    template: '<div class="js-bengor-cookies"></div>',
    onAcceptCallback: () => {
      document.querySelector('body').insertAdjacentHTML('beforeend', `<div id="${uuid}">`);
    },
  });

  expect(eventListeners).toEqual(['wheel', 'click', 'touchstart']);
  expect(document.querySelector('.bengor-cookies--visible')).not.toBeNull();
  expect(document.querySelector('.dummy')).toBeNull();
  expect(document.getElementById(uuid)).toBeNull();
  instance.onScrollAccept({deltaY: 401});
  expect(eventListeners).toEqual([]);
  expect(document.querySelector('.bengor-cookies--visible')).toBeNull();
  expect(document.querySelector('.dummy')).not.toBeNull();
  expect(document.getElementById(uuid)).not.toBeNull();
});
