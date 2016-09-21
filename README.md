#BenGorCookies
> Cookie warning banner that request user consent, European law compilant. Zero dependencies, fully customizable

[![npm version](https://img.shields.io/npm/v/bengor-cookies.svg?style=flat-square)](https://www.npmjs.com/package/bengor-cookies)
[![Build Status](http://img.shields.io/travis/BenGorJS/Cookies/master.svg?style=flat-square)](https://travis-ci.org/BenGorJS/Cookies)
[![NPM Status](http://img.shields.io/npm/dm/bengor-cookies.svg?style=flat-square)](https://www.npmjs.org/package/bengor-cookies)
[![devDependency Status](https://img.shields.io/david/BenGorJS/Cookies.svg?style=flat-square)](https://david-dm.org/BenGorJS/Cookies#info=dependencies)

![Snapshot](https://raw.githubusercontent.com/BenGorJS/Cookies/master/snapshot.png)

Everybody needs the cookies component in his website. Style this element is not very complex but the task is quite
repetitive so, keeping in mind this use case BenGorCookies provides a robust and lightweight solution to build
cookies component.

##Installation
The recommended and the most suitable way to install is through *NPM*.
```shell
$ npm install --save bengor-cookies
```

Also, you can install through *Bower*.
```shell
$ bower install --save bengor-cookies
```


After installation process, you have to include the js and css files in your html.
```html
<link href="/your/path/bengor-cookies/dist/bengor-cookies.min.css" type="text/css" rel="stylesheet">

<script src="/your/path/bengor-cookies/dist/bengor-cookies.umd.min.js"></script>
```
> This library provides a fully usable **scss** file that is very interesting to include cookies component styles inside
your website Sass workflow.

Also, it supports ES2015 modules so, you can easily import the library in your js instead loading the UMD version in the DOM.
```js
import {BenGorCookies, BenGorCookiesPlugins, BenGorCookiesTemplates} from 'bengor-cookies';

(...your bengor-cookies initialization);
```

The following code is a fully initialization example code:
```js
new BenGorCookies({
  links: 'html',
  maxPageYOffset: false,
  plugins: [
    new BenGorCookiesPlugins.GoogleTagManager('GTM-XXXXX')
  ],
  template: BenGorCookiesTemplates.Default({
    text: 'We use bengor-cookies to provide a better browsing experience and a more ' +
    'personalized service. If you continue browsing, we consider accepting its use. ' +
    'You can change the settings or get more information by consulting our'
  })
});
```

##Configuration options
To load the library check the following code. The example provides default values of `BenGorCookies` configuration
options.
* **links**: string that contains all the selectors and tags that interacts with cookies accepting them.
* **maxPageYOffset**: by default scroll interaction is disabled. If this value is an integer value, and the window
scroll-top is higher the cookies will be accepted.
* **plugins**: array of plugins that adds some concrete logic. For now, the following plugins are available:
    * *GoogleTagManager*: when the cookies are accepted the GTM snippets will be added after body tag. This plugin
    needs a GTM id passed as argument.
* **template**: string that contains HTML code printing your cookies component. We provide some predefined templates:
    * *Default*: default HTML template

> Also, you can add your cookies component HTML code manually, it only has a requirement:<br>
> it must have a `js-bengor-cookies` class.

##Extension points
Obviously each web needs its theme, so, this library provides some extension points if we are injecting the Sass file
in the project stylesheets workflow. The following Sass variables are self-explanatory:
```scss
$bengor-cookies-background-color: #999 !default;

$bengor-cookies-color: #fff !default;

$bengor-cookies-link-color: $bengor-cookies-color !default;

$bengor-cookies-link-hover-color: darken($bengor-cookies-link-color, 20%) !default;

$bengor-cookies-button-background-color: darken($bengor-cookies-background-color, 20%) !default;

$bengor-cookies-button-hover-background-color: darken($bengor-cookies-button-background-color, 20%) !default;

$bengor-cookies-button-color: $bengor-cookies-color !default;

$bengor-cookies-content-max-width: 850px !default;

@import 'your/node_modules/root/path/bengor-cookies/src/scss/bengor-cookies';
```

##Credits
This library is created by:
>
**@benatespina** - [benatespina@gmail.com](mailto:benatespina@gmail.com)<br>
**@gorkalaucirica** - [gorka.lauzirika@gmail.com](mailto:gorka.lauzirika@gmail.com)

##Licensing Options
[![License](https://img.shields.io/badge/License-MIT-yellowgreen.svg?style=flat-square)](https://github.com/BenGorJS/Cookies/blob/master/LICENSE)
