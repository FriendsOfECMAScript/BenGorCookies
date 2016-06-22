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

(function () {

  var BenGorCookies = function (selector, options) {
    return new Cookies(selector, options);
  };

  function hasClass(el, className) {
    return el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
  }

  function addClass(el, className) {
    if (!hasClass(el, className)) el.className += " " + className;
  }

  function removeClass(el, className) {
    if (hasClass(el, className)) {
      var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
      el.className = el.className.replace(reg, ' ');
    }
  }

  var GoogleTagManager = function (id) {
    var element = document.createElement('div'), add, remove;

    id = id || 'undefined';
    element.setAttribute('id', 'bengor-cookies-gtm');

    add = function () {
      var body = document.getElementsByTagName('BODY')[0];

      if (typeof id === 'undefined' || id === 'undefined' || element.innerHTML) {
        return;
      }
      element.innerHTML =
        '<noscript><iframe src="//www.googletagmanager.com/ns.html?id=' + id + '"' +
        'height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>' +
        '<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({"gtm.start":' +
        'new Date().getTime(),event:"gtm.js"});var f=d.getElementsByTagName(s)[0],' +
        'j=d.createElement(s),dl=l!="dataLayer"?"&l="+l:"";j.async=true;j.src=' +
        '"//www.googletagmanager.com/gtm.js?id="+i+dl;f.parentNode.insertBefore(j,f);' +
        '})(window,document,"script","dataLayer","' + id + '");</script>';

      body.insertBefore(element, body.firstChild);
    };

    remove = function () {
      element.innerHTML = '';
    };

    return {
      add: add,
      remove: remove
    };
  };

  var Cookies = function (selector, options) {
    options = options || {};

    var
      mainElement = document.querySelector(selector),
      links = options.links || 'a, button, .bengor-cookies__actions, .bengor-cookies__button',
      maxPageYOffset = options.maxPageYOffset || false,
      GTM = GoogleTagManager(options.GTMId);

    function setCookie(name, value, expirationDays) {
      var
        date = new Date(),
        expires = 'expires=';

      date.setTime(date.getTime() + (expirationDays * 24 * 60 * 60 * 1000));
      expires += date.toGMTString();
      document.cookie = name + '=' + value + '; ' + expires + '; ' +
        location.hostname.split('.').reverse()[1] + '.' +
        location.hostname.split('.').reverse()[0] + '; path=/';
    }

    function getCookie(name) {
      var cookies = document.cookie.split(';');

      name = name + '=';
      for (var i = 0, length = cookies.length; i < length; i++) {
        var cookie = cookies[i];

        while (cookie.charAt(0) == ' ') {
          cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) == 0) {
          return cookie.substring(name.length, cookie.length);
        }
      }

      return false;
    }

    function acceptCookies() {
      setCookie('username', Math.floor((Math.random() * 100000000) + 1), 30);
      GTM.add();

      removeClass(mainElement, 'bengor-cookies--visible');
    }

    function scrollingAcceptCookies() {
      if (false === maxPageYOffset) {
        return;
      }

      if (window.pageYOffset > maxPageYOffset) {
        acceptCookies();
      }
    }

    window.addEventListener('scroll', function () {
      if (typeof window.requestAnimationFrame !== 'undefined') {
        window.requestAnimationFrame(scrollingAcceptCookies);
      } else {
        scrollingAcceptCookies();
      }
    });

    document.addEventListener('DOMContentLoaded', function () {
      if (!getCookie('username')) {
        GTM.remove();
        addClass(mainElement, 'bengor-cookies--visible');
      } else {
        GTM.add();
      }

      var elements = document.querySelectorAll(links);
      for (var i = 0, iLen = elements.length; i < iLen; i++) {
        elements[i].addEventListener('click', function () {
          acceptCookies();
        });
      }
    });
  };

  if (!window.BenGorCookies) {
    window.BenGorCookies = BenGorCookies;
  }

}());
