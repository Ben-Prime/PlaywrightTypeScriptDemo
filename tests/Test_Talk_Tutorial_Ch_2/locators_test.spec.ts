import { test, expect } from '@playwright/test';

test('Locators in playwright: role, label, text, alt-text, test-id', async ({ page }) => {

    await test.step('navigate to url and call locator', async () => {
        test.slow()

        // Go to the URL
        await page.goto('https://github.com/benjegs');

        //Get by role
        //await page.getByRole('link', {name: 'Sign in'}).click();

        //Get by label
        //await page.getByLabel('Homepage', {exact: true}).first().click();

        //Get by Alt text
        //await page.getByAltText("View benjegs's full-sized avatar").click();

        //Get by testId
        //await page.getByTestId('projects').first().click(); //or use await page.locator('[data-tab-item="projects"]').first().click();

        //Get by text
        //await page.getByText('Sign up').click();

    });
    
});

test('Locators in playwright: placeholder, xpath, css-selector', async({page})=>{

    await test.step('navigate to url and call locator', async () => {
        test.slow()

        // Go to the URL
        await page.goto('https://youtube.com/@testerstalk');

        const acceptButton = page.locator('button:has-text("Accept all")').first();
        // If the cookie/consent popup appears, accept it
        if (await acceptButton.isVisible({ timeout: 5000 }).catch(() => false)) {
            await acceptButton.click();
            await page.waitForLoadState('networkidle');
        }

        //Get by placeholder
        await page.getByPlaceholder('Search').fill('placeholder locator');

        // Get by xpath
        await page.locator('//input[@name="search_query"]').fill('xpath locator');

        // Get by css selector
        await page.locator('input[name="search_query"]').fill('css selector');
    });

});

test('Locators in playwright: title', async({page})=>{

    await test.step('navigate to url and call locator', async () => {
        test.slow()

        // Go to the URL
        await page.goto('https://google.com');

        const acceptButton = page.locator('button:has-text("Accept all")').first();
        // If the cookie/consent popup appears, accept it
        if (await acceptButton.isVisible({ timeout: 5000 }).catch(() => false)) {
            await acceptButton.click();
            await page.waitForLoadState('networkidle');
        }

        //Get by title
        await page.getByTitle('Search').fill('title locator');

    });

});