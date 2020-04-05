import {
    Selector
} from 'testcafe'

// prettier-ignore
fixture `Getting started with TestCafe`
    .page `https://devexpress.github.io/testcafe/example/`

test('My firs testcafe test', async t => {
    const exampleField = Selector('#developer-name');
    const submitBtn = Selector('#submit-button');
    const thankYouText = Selector('#article-header');
    const userName = "John Lennon"
    await t.typeText(exampleField, userName);
    await t.click(submitBtn);

    await t.expect(thankYouText.innerText).contains(`Thank you, ${userName}!`);
})