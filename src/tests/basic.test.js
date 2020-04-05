import {
    Selector,
    t
} from 'testcafe'

// prettier-ignore
fixture `Getting started with TestCafe`
    .page `https://devexpress.github.io/testcafe/example/`
    .before(async t => {
        //Test setup goes here
    })
    .beforeEach(async t => {
        //Runs before each test
        //Slow down the run speed to debug test
        //await t.setTestSpeed(0.05);
    })
    .after(async t => {
        //after all tests are run
        //e.g. cleaning testData
    })
    .afterEach(async t => {
        //Runs after each test
    })

test('This test should pass', async t => {
    const exampleField = Selector('#developer-name');
    const submitBtn = Selector('#submit-button');
    const thankYouText = Selector('#article-header');
    const userName = "John Lennon"
    await t.typeText(exampleField, userName);
    await t.click(submitBtn);

    await t.expect(thankYouText.innerText).contains(`Thank you, ${userName}!`);
})

test('This test should fail', async t => {
    const exampleField = Selector('#developer-name');
    const submitBtn = Selector('#submit-button');
    const thankYouText = Selector('#article-header');
    const userName = "John Lennon"
    await t.typeText(exampleField, userName);
    await t.click(submitBtn);

    await t.expect(thankYouText.innerText).contains(`Thank you, ${userName}!FAIL`);
})