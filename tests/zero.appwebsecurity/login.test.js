import loginPage from '../../support/pages/zero.appwebsecurity/login.page';
import {
    PAGE_URL
} from '../../support/utils/constants';


fixture `login`.page `${PAGE_URL.zeroWebsecurity}`;

test('user cannot login with invalid credentials', async (t) => {
    await t.click(loginPage.signin_btn).expect(loginPage.login_form.visible).ok();

    await t
        .typeText(loginPage.login_field, 'email@com', {
            paste: true,
        })
        // {paste:true} copies paste the text to optimise tests performance
        .typeText(loginPage.password_field, 'password', {
            paste: true,
        })
        .click(loginPage.submit_login_btn)
        .expect(loginPage.error_message.innerText)
        .eql('Login and/or password are wrong.');
});