import {test, expect} from '@playwright/test';

test('Date Picker Test - hard coded', async ({page}) => {
    await page.goto('https://jqueryui.com/datepicker/');

    const iframe =  page.frameLocator('[class="demo-frame"]');

    // Hardcoding the date value
    await iframe.locator('[id="datepicker"]').fill('04/13/2026');
});

test('Date Picker Test - dynamic', async ({page}) => {
    await page.goto('https://jqueryui.com/datepicker/');

    const iframe =  page.frameLocator('[class="demo-frame"]');

    // Dynamically selecting today's date
    await iframe.locator('[id="datepicker"]').click();
    await iframe.locator('.ui-datepicker-today').click();
});

test('Date Picker Test - past date', async ({page}) => {
    await page.goto('https://jqueryui.com/datepicker/');

    const iframe =  page.frameLocator('[class="demo-frame"]');

    // Selecting a past date
    await iframe.locator('[id="datepicker"]').click();
    await iframe.locator('[title="Prev"]').click(); // Go to previous month
    await iframe.locator('text="15"').click(); // or await iframe.getByText('15').click(); // Click on the 15th day of the previous month

});

test('Date Picker Test - future date', async ({page}) => {
    await page.goto('https://jqueryui.com/datepicker/');

    const iframe =  page.frameLocator('[class="demo-frame"]');

    // Selecting a future date
    await iframe.locator('[id="datepicker"]').click();
    await iframe.locator('[title="Next"]').click(); // Go to next month
    await iframe.locator('text="15"').click(); // or await iframe.getByText('15').click(); // Click on the 15th day of the next month

});