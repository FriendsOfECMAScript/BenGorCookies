/*
 * This file is part of the BenGorCookies library.
 *
 * (c) Beñat Espiña <benatespina@gmail.com>
 * (c) Gorka Laucirica <gorka.lauzirika@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

export function hasClass(element, className) {
  return element.className.match(new RegExp(`(\\s|^)${className}(\\s|$)`));
}

export function addClass(element, className) {
  if (!hasClass(element, className)) element.className += ` ${className}`;
}

export function removeClass(element, className) {
  if (hasClass(element, className)) {
    const reg = new RegExp(`(\\s|^)${className}(\\s|$)`);
    element.className = element.className.replace(reg, ' ');
  }
}

export function prepend(element, content, evalContent = false) {
  element.insertBefore(content, element.firstChild);
  false === evalContent ? eval(element.firstChild) : eval(evalContent);
}
