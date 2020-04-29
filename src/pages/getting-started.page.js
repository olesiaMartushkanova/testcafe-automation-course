import {
    Selector
} from 'testcafe';

class GettingStartedPage {
    constructor() {
        this.example_field = Selector('#developer-name');
        this.submit_btn = Selector('#submit-button');
        this.thankyou_text = Selector('#article-header');
    }

}

export default new GettingStartedPage();