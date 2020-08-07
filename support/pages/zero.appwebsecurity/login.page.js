import { Selector } from 'testcafe';

class LoginPage {
  constructor() {
    this.signin_btn = Selector('#signin_button');
    this.login_field = Selector('#user_login');
    this.password_field = Selector('#user_password');
    this.submit_login_btn = Selector('input').withAttribute('name', 'submit');
    this.login_form = Selector('#login_form');
    this.error_message = Selector('.alert-error');
  }
}

export default new LoginPage();
