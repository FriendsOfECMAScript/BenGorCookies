const render = ({link = '/cookies', text = '', acceptText = 'Accept'} = {}) => (
  `<div class="bengor-cookies js-bengor-cookies">
      <div class="bengor-cookies__content">
          <p class="bengor-cookies__text">
              ${text}
              <a href="${link}" class="bengor-cookies__link" target="_blank">
                  Cookies policy
              </a>.
          </p>
      </div>
      <div class="bengor-cookies__actions">
          <a class="bengor-cookies__button js-bengor-cookies-accept">${acceptText}</a>
      </div>
  </div>`
);

export default render;
