# BenGorCookies
> Cookie warning banner that request user consent, European law compilant.
Zero dependencies, fully customizable JavaScript library for [IE9+](#browser-support).

[![npm version](https://img.shields.io/npm/v/bengor-cookies.svg?style=flat-square)](https://www.npmjs.com/package/bengor-cookies)
[![Build Status](http://img.shields.io/travis/FriendsOfECMAScript/BenGorCookies/master.svg?style=flat-square)](https://travis-ci.org/FriendsOfECMAScript/BenGorCookies)
[![NPM Status](http://img.shields.io/npm/dm/bengor-cookies.svg?style=flat-square)](https://www.npmjs.org/package/bengor-cookies)
[![devDependency Status](https://img.shields.io/david/FriendsOfECMAScript/BenGorCookies.svg?style=flat-square)](https://david-dm.org/FriendsOfECMAScript/BenGorCookies#info=dependencies)

![Snapshot](https://raw.githubusercontent.com/FriendsOfECMAScript/BenGorCookies/master/snapshot.png)

![Snapshot2](https://raw.githubusercontent.com/FriendsOfECMAScript/BenGorCookies/master/snapshot2.png)
> Check the following [section](#modern-theme) that explains the implementation process related to this banner.

Everybody needs the cookies component in his website. Style this element is not very complex but the task is quite
repetitive so, keeping in mind this use case BenGorCookies provides a robust and lightweight solution to build
cookies component.

## Installation
The recommended and the most suitable way to install is through *Yarn*.
```shell
$ yarn add bengor-cookies
```
Or alternatively, through *NPM*.
```shell
$ npm install --save bengor-cookies
```

After installation process, you have to include the js and css files in your html.
```html
<link href="/your/path/bengor-cookies/dist/bengor-cookies.css" type="text/css" rel="stylesheet">

<script src="/your/path/bengor-cookies/dist/bengor-cookies.umd.js"></script>
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
  triggers: 'html',
  maxPageYOffset: false,
  plugins: [
    new BenGorCookiesPlugins.GoogleTagManager('GTM-XXXXX')
  ],
  template: BenGorCookiesTemplates.Default({
    link: '/cookies',
    linkText: 'Cookies policy',
    text: 'We use bengor-cookies to provide a better browsing experience and a more ' +
    'personalized service. If you continue browsing, we consider accepting its use. ' +
    'You can change the settings or get more information by consulting our',
    acceptText: 'Accept'
  }),
  onAcceptCallback: function() {
    console.log('Cookies are now accepted!')
  }
});
```

## Configuration options
To load the library check the following code. The example provides default values of `BenGorCookies` configuration
options.
* **triggers**: string that contains all the selectors and tags that interacts with cookies accepting them.
* **maxPageYOffset**: by default scroll interaction is disabled. If this value is an integer value, and the window
scroll-top is higher the cookies will be accepted.
* **plugins**: array of plugins that adds some concrete logic. For now, the following plugins are available:
    * *GoogleTagManager*: when the cookies are accepted the GTM snippets will be added after body tag. This plugin
    needs a GTM id passed as argument.
* **template**: string that contains HTML code printing your cookies component. We provide some predefined templates:
    * *Default*: default HTML template
* **onAcceptCallback**: function reference that will be called once Cookies are accepted.

> Also, you can add your cookies component HTML code manually, it only has a requirement:<br>
> it must have a `js-bengor-cookies` class.

## Extension points
Obviously each web needs its theme, so, this library provides some extension points if we are injecting the Sass file
in the project stylesheets workflow. The following Sass variables are self-explanatory:
```scss
$bengor-cookies-background-color: #999 !default;

$bengor-cookies-border-color: #999 !default;

$bengor-cookies-color: #fff !default;

$bengor-cookies-link-color: $bengor-cookies-color !default;

$bengor-cookies-link-hover-color: darken($bengor-cookies-link-color, 20%) !default;

$bengor-cookies-button-background-color: darken($bengor-cookies-background-color, 20%) !default;

$bengor-cookies-button-hover-background-color: darken($bengor-cookies-button-background-color, 20%) !default;

$bengor-cookies-button-color: $bengor-cookies-color !default;

$bengor-cookies-content-max-width: 850px !default;

$bengor-cookies-transition-duration: .4s !default;

$bengor-cookies-transition: transform $bengor-cookies-transition-duration cubic-bezier(.94, .06, .32, .95) 0s !default;

$bengor-cookies-z-index: 1000 !default;

@import 'your/node_modules/root/path/bengor-cookies/src/scss/bengor-cookies';
```

## Modern theme
At the beginning of the document, two images are shown. If we like to implement the second one we need to include the
`<link href="/your/path/bengor-cookies/dist/bengor-cookies.modern.css" type="text/css" rel="stylesheet">` CSS or use
`@import 'your/node_modules/root/path/bengor-cookies/src/scss/bengor-cookies-modern';` Sass import.
However, with only this step you can't obtain the same result of the image so, if you have a really special interest
in getting the same banner you have to the following.

```html
<!-- ... -->
<head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans" />
    <link rel="stylesheet" href="node_modules/bengor-cookies/dist/bengor-cookies.modern.css" />
    <style>
        .bengor-cookies {
            background-color: #f7f7f7;
            border-bottom: 1px solid #dadada;
            color: #999;
            font-family: Open Sans, sans-serif;
        }

        .bengor-cookies__link {
            color: #444;
        }

        .bengor-cookies__svg {
            fill: #999;
        }
    </style>

<!-- ... -->
    template: BenGorCookiesTemplates.Default({
      link: '/cookies',
      linkText: 'cookies policy',
      text: 'We use bengor-cookies to provide a better browsing experience and a more ' +
      'personalized service. If you continue browsing, we consider accepting its use. ' +
      'You can get more information by consulting our',
      acceptText: (`
<span>
    <svg class="bengor-cookies__svg" width="10px" height="10px" viewBox="0 0 16.264 16.264">
        <polygon fill-rule="evenodd" clip-rule="evenodd" points="16.264,2.122 14.142,0 8.132,6.01 2.121,0 0,2.121
        6.01,8.132 0,14.142 2.122,16.264 8.132,10.253 14.142,16.264 16.264,14.142 10.253,8.132 "></polygon>
    </svg>
</span>
      `),
<!-- ... -->
``` 
Obviously all the code related to CSS it can be easily override if you are using Sass with its variables.

## Browser Support
**BenGorCookies supports all modern browsers and IE9+.**

The library uses the last CSS features like **flexbox** to build the component in an easy and clean way.
However, sometimes our project must run in legacy browsers so, keeping this limitation in mind,
the package provides an alternative of `BenGorCookiesTemplates.Default` and its corresponding *scss* file.

To make work you only have to pass the `BenGorCookiesTemplates.Ie9` instance inside `template` option
instead of the default.
```js
new BenGorCookies({
  (...)

  template: BenGorCookiesTemplates.Ie9({
    link: '/cookies',
    linkText: 'Cookies policy',
    text: 'We use bengor-cookies to provide a better browsing experience and a more ' +
    'personalized service. If you continue browsing, we consider accepting its use. ' +
    'You can change the settings or get more information by consulting our',
    acceptText: 'Accept'
  })
});
```
And you have to updated the inclusion of the CSS:
```html
<link href="/your/path/bengor-cookies/dist/bengor-cookies.ie9.css" type="text/css" rel="stylesheet">
```
or in case you are using the Scss file:
```scss
@import 'your/node_modules/root/path/bengor-cookies/src/scss/bengor-cookies-ie9';
```

# Tests
Apart of the obvious set of tests, this library provides a simple node application to demonstrate the different
usages about resultant JavaScript.
```bash
$ yarn test             # or npm test
```

To run the demo application you have to type the following:
```bash
$ cd test/app
$ node_modules/light-server/bin/light-server -s . -p 7000
$ open 127.0.0.1:7000/babel.html
$ open 127.0.0.1:7000/module.html
$ open 127.0.0.1:7000/umd.html
```

## Contributing
This library follows the modern JavaScript coding standards, so pull requests need to pass the [Stylelint][1],
[ESLint][2] and [Prettier][3]. This task can be very boring but, in the `package.json` there are some useful
npm-scripts that becomes this process simpler and faster.
```bash
$ yarn eslint           # or npm run eslint
$ yarn prettier         # or npm run prettier
$ yarn stylelint        # or npm run stylelint
```
There is also a policy for contributing to this library. Pull requests must be explained step by step to make the
review process easy in order to accept and merge them. New methods or code improvements must come paired with
tests. We are using [Jest][4] test framework for that purpose.

## Thanks
We need to thank [Mikel Tuesta](https://github.com/mktoast) for his great job **optimizing and
advising the JavaScript** code with the best practices, and also to thank
[Aritz Olabarrieta](https://github.com/aritzolaba) for his master class about legacy styling
that he **makes BenGorCookies compatible with IE9+** browsers.

Sincerely, thank you guys! ;)

## Credits
This library is created by:
>
**@benatespina** - [benatespina@gmail.com](mailto:benatespina@gmail.com)<br>
**@gorkalaucirica** - [gorka.lauzirika@gmail.com](mailto:gorka.lauzirika@gmail.com)

## Licensing Options
[![License](https://img.shields.io/badge/License-MIT-yellowgreen.svg?style=flat-square)](https://github.com/FriendsOfECMAScript/BenGorCookies/blob/master/LICENSE)

[1]: http://stylelint.io/
[2]: http://eslint.org/
[3]: https://prettier.io/ 
[4]: https://facebook.github.io/jest/
