#BenGorCookies
> Zero dependencies. Lightweight that provides full featured cookies component

![Snapshot](https://raw.githubusercontent.com/BenGorJS/Cookies/master/snapshot.png)

Everybody needs the cookies component in his website. Style this element is not very complex but the task is quite
repetitive so, keeping in mind this use case BenGorCookies provides a robust and lightweight (less than 3kb) solution
to build cookies component.

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
<link href="/your/path/bengor-cookies/dis/bengor-cookies.min.css" type="text/css" rel="stylesheet">

<script src="/your/path/bengor-cookies/dist/bengor-cookies.min.js"></script>
```
> This library provides a fully usable **scss** file that is very interesting to include cookies component styles inside
your website Sass workflow.

Then you have to construct a HTML component something similar to this. Only the `js-bengor-cookies` class is mandatory,
however the rest of the classes are highly recommended for component to maintain a proper style. 
```html
<div class="bengor-cookies  js-bengor-cookies">
    <div class="bengor-cookies__content">
        <p class="bengor-cookies__text">
            We use bengor-cookies to provide a better browsing experience and a more personalized
            service. If you continue browsing, we consider accepting its use. You can change the
            settings or get more information by consulting our
            <a href="/your-awesome-bengor-cookies-policy" class="bengor-cookies__link" target="_blank">
                Cookies policy
            </a>.
        </p>
    </div>
    <div class="bengor-cookies__actions">
        <a class="bengor-cookies__button">Accept</a>
    </div>
</div>
```

Finally you have to initialize the js. The following code shows the default options.
```js
BenGorCookies({
  links: '.bengor-cookies__actions, .bengor-cookies__button',
  maxPageYOffset: false,
  GTMId: 'undefined'
});
```

##Configuration options
To load the library check the following code. The example provides default values of `BenGorCookies` configuration
options.
* **links**: string that contains all the selectors and tags that interacts with cookies accepting them.
* **maxPageYOffset**: By default scroll interaction is disabled. If this value is an integer value, and the window
scroll-top is higher the cookies will be accepted.
* **GTMId**: The Google Tag Manager id. If value is different to undefined when the cookies are accepted Google Tag
Manager container will be inserted before body tag.

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
```

##Credits
This library is created by:
>
**@benatespina** - [benatespina@gmail.com](mailto:benatespina@gmail.com)<br>
**@gorkalaucirica** - [gorka.lauzirika@gmail.com](mailto:gorka.lauzirika@gmail.com)

##Licensing Options
[![License](https://img.shields.io/badge/License-MIT-yellowgreen.svg)](https://github.com/BenGorJS/Cookies/blob/master/LICENSE)
