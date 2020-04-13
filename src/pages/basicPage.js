import {
    Selector
} from 'testcafe';

class BasicPage {
    constructor() {
        this.exampleField = Selector('#developer-name');
        this.submitBtn = Selector('#submit-button');
        this.thankYouText = Selector('#article-header');
    }

}

export default new BasicPage();