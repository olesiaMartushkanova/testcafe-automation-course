import gettingStartedPage from '../pages/getting-started.page';

const userName = 'John Lennon';

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

test('This test should pass', async (t) => {
  await t.typeText(gettingStartedPage.example_field, userName);
  await t.click(gettingStartedPage.submit_btn);

  await t
    .expect(gettingStartedPage.thankyou_text.innerText)
    .contains(`Thank you, ${userName}!`);
});

test('This test should fail', async (t) => {
  await t.typeText(gettingStartedPage.example_field, userName);
  await t.click(gettingStartedPage.submitBtn);

  await t
    .expect(gettingStartedPage.thankyou_text.innerText)
    .contains(`Thank you, ${userName}!FAIL`);
});
