import { test, expect } from '@playwright/test';

test.describe('Smoke Testing', () => {

    test('Test 1', async ({ page }) => {
        await page.goto('https://jqueryui.com/datepicker/');

        const iframe = page.frameLocator('[class="demo-frame"]');

        // Hardcoding the date value
        await iframe.locator('[id="datepicker"]').fill('04/13/2026');
    });

    test('Test 2', async ({ page }) => {
        await page.goto('https://jqueryui.com/datepicker/');

        const iframe = page.frameLocator('[class="demo-frame"]');

        // Dynamically selecting today's date
        await iframe.locator('[id="datepicker"]').click();
        await iframe.locator('.ui-datepicker-today').click();
    });

});

test.describe('Regression Testing', () => {

    test('Test 3', async ({ page }) => {
        await page.goto('https://jqueryui.com/datepicker/');

        const iframe = page.frameLocator('[class="demo-frame"]');

        // Selecting a past date
        await iframe.locator('[id="datepicker"]').click();
        await iframe.locator('[title="Prev"]').click(); // Go to previous month
        await iframe.locator('text="15"').click(); // or await iframe.getByText('15').click(); // Click on the 15th day of the previous month

    });

    test('Test 4', async ({ page }) => {
        await page.goto('https://jqueryui.com/datepicker/');

        const iframe = page.frameLocator('[class="demo-frame"]');

        // Selecting a future date
        await iframe.locator('[id="datepicker"]').click();
        await iframe.locator('[title="Next"]').click(); // Go to next month
        await iframe.locator('text="15"').click(); // or await iframe.getByText('15').click(); // Click on the 15th day of the next month

    });

});