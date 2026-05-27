import {test, expect} from '@playwright/test';

//CMD command to run tests with @SmokeTesting tag : npx playwright test --grep '@SmokeTesting'
//CMD command to run tests with @RegressionTesting tag : npx playwright test --grep '@RegressionTesting'
//CMD command to run tests with both @SmokeTesting and @RegressionTesting tags : npx playwright test --grep '(?=.*@SmokeTesting)(?=.*@RegressionTesting)'
//CMD command to run tests with either @SmokeTesting or @RegressionTesting tags : npx playwright test --grep '@SmokeTesting|@RegressionTesting'

// To run the entire test suite x times: npx playwright test --repeat=x
// To run each test in the test suite x times before going to the next one: npx playwright test --repeat-each=x

test('Test 1', {tag: ['@SmokeTesting']} ,async ({page}) => {  // or test('Test 1 @SmokeTesting', async ({page}) => {
    await page.goto('https://jqueryui.com/datepicker/');

    const iframe =  page.frameLocator('[class="demo-frame"]');

    // Hardcoding the date value
    await iframe.locator('[id="datepicker"]').fill('04/13/2026');
});

test('Test 2', {tag: ['@SmokeTesting','@RegressionTesting']}  ,async ({page}) => {
    await page.goto('https://jqueryui.com/datepicker/');

    const iframe =  page.frameLocator('[class="demo-frame"]');

    // Dynamically selecting today's date
    await iframe.locator('[id="datepicker"]').click();
    await iframe.locator('.ui-datepicker-today').click();
});

test('Test 3', {tag: ['@RegressionTesting']} ,async ({page}) => {
    await page.goto('https://jqueryui.com/datepicker/');

    const iframe =  page.frameLocator('[class="demo-frame"]');

    // Selecting a past date
    await iframe.locator('[id="datepicker"]').click();
    await iframe.locator('[title="Prev"]').click(); // Go to previous month
    await iframe.locator('text="15"').click(); // or await iframe.getByText('15').click(); // Click on the 15th day of the previous month

});


