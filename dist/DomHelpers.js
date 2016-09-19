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

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasClass = hasClass;
exports.addClass = addClass;
exports.removeClass = removeClass;
function hasClass(element, className) {
  return element.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
}

function addClass(element, className) {
  if (!hasClass(element, className)) element.className += ' ' + className;
}

function removeClass(element, className) {
  if (hasClass(element, className)) {
    var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
    element.className = element.className.replace(reg, ' ');
  }
}