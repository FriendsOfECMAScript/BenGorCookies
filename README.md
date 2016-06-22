#BenGorCookies
> No dependencies JavaScript library that provided full featured cookies component

```html
<div class="cookies">
    <div class="cookies__content">
        <p class="cookies__text">
            We use cookies to provide a better browsing experience and a more personalized service. If you
            continue browsing, we consider accepting its use. You can change the settings or get more information
            by consulting our
            <a href="/your-awesome-cookies-policy" class="cookies__link" target="_blank">Cookies policy</a>.
        </p>
    </div>
    <div class="cookies__actions">
        <a class="cookies__button">Accept</a>
    </div>
</div>
```

To load the library check the following code. The example provides default values of `BenGorCookies` configuration
options.
* `links`: string that contains all the selectors and tags that interacts with cookies accepting them.
* `maxPageYOffset`: By default scroll interaction is disabled. If this value is an integer value, and the window
scroll-top is higher the cookies will be accepted.
* `GTMId`: The Google Tag Manager id. If value is different to undefined when the cookies are accepted Google Tag
Manager container will be inserted before body tag.
```js
BenGorCookies('.bengor-cookies', {
  links: 'a, button, .bengor-cookies__actions, .bengor-cookies__button',
  maxPageYOffset: false,
  GTMId: 'undefined'
});
```



##Credits
This library is created by:
>
**@benatespina** - [benatespina@gmail.com](mailto:benatespina@gmail.com)<br>
**@gorkalaucirica** - [gorka.lauzirika@gmail.com](mailto:gorka.lauzirika@gmail.com)

##Licensing Options
MIT
