import gettingStartedPage from '../../support/pages/devexpress/getting-started.page';
import {
    PAGE_URL
} from '../../support/utils/constants';


const USER_NAME = 'John Lennon';

// prettier-ignore
fixture `getting started`
    .page `${PAGE_URL.devExpress}`
// .before(() => {
//     //Test setup goes here
// })
// .beforeEach(() => {
//     //Runs before each test
//     //Slow down the run speed to debug test
//     //await t.setTestSpeed(0.05);
// })
// .after(() => {
//     //after all tests are run
//     //e.g. cleaning testData
// })
// .afterEach(() => {
//     //Runs after each test
// });

test('this test should pass', async (t) => {
    await t.typeText(gettingStartedPage.example_field, USER_NAME);
    await t.click(gettingStartedPage.submit_btn);

    await t
        .expect(gettingStartedPage.thankyou_text.innerText)
        .contains(`Thank you, ${USER_NAME}!`);
});

test('this test should fail', async (t) => {
    await t.typeText(gettingStartedPage.example_field, USER_NAME);
    await t.click(gettingStartedPage.submit_btn);

    await t
        .expect(gettingStartedPage.thankyou_text.innerText)
        .contains(`Thank you, ${USER_NAME}!FAIL`);
});