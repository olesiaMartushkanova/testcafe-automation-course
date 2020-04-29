import {
    Selector
} from 'testcafe';

fixture `Login`.page `http://zero.webappsecurity.com/`;

test('Login with invalid credentials', async (t) => {
    const signin_btn = Selector('#signin_button');
    const login_field = Selector('#user_login');
    const password_field = Selector('#user_password');
    const submit_login_btn = Selector('input').withAttribute('name', 'submit');
    const login_form = Selector('#login_form');
    const error_message = Selector('.alert-error').innerText;

    await t.click(signin_btn).expect(login_form.visible).ok();

    await t
        .typeText(login_field, 'email@com', {
            paste: true,
        })
        //{paste:true} copies paste the text to optimise tests performance
        .typeText(password_field, 'password', {
            paste: true,
        })
        .click(submit_login_btn)
        .expect(error_message)
        .eql('Login and/or password are wrong.');
});