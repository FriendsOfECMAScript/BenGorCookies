const render = ({link = '/cookies', linkText = 'Cookies policy', text = '', acceptText = 'Accept'} = {}) => (
  `<div class="cookies bengor-cookies js-bengor-cookies">
    <table class="bengor-cookies__content-wrapper" cellpadding="0" cellspacing="0" width="100%">
        <tr>
            <td class="bengor-cookies__content">
                <p class="bengor-cookies__text">
                    ${text}
                    <a href="${link}" class="bengor-cookies__link" target="_blank">${linkText}</a>.
                </p>
            </td>
            <td class="bengor-cookies__actions">
                <a class="bengor-cookies__button js-bengor-cookies-accept">${acceptText}</a>
            </td>
        </tr>
    </table>
</div>`
);

export default render;
