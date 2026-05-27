import { test, expect } from '@playwright/test';

test('Test 1', async ({ page }) => {
    test.setTimeout(1 * 60 * 1000); // overrides the default timeout for this test to 1 minute
    await page.goto('https://jqueryui.com/datepicker/');

    const iframe = page.frameLocator('[class="demo-frame"]');

    // Hardcoding the date value
    await iframe.locator('[id="datepicker"]').fill('04/13/2026');

    //await page.waitForTimeout(60000); // Wait for 60 seconds to observe the filled date
});

test('Test 2', async ({ page }) => {
    // Navigate to the page with the input field
    test.slow() // overrides the default timeout for this test to 3 times the default timeout
    
    await page.goto('https://www.youtube.com')
    // Handle cookie consent by clicking "Accept all" button
    const acceptButton = page.locator('button:has-text("Accept all")').first();
    // If the cookie/consent popup appears, accept it
    if (await acceptButton.isVisible({ timeout: 5000 }).catch(() => false)) {
        await acceptButton.click();
        await page.waitForLoadState('networkidle');
    }

    await page.getByRole('combobox', { name: 'Search' }).click({timeout: 10000}); // overrides the default timeout for this action to 15 seconds
    await page.getByRole('combobox', { name: 'Search' }).fill('Hello World');
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');
    await expect(page).toHaveURL(/results\?search_query=Hello\+World/, { timeout: 5000 }); // overrides the default timeout for this assertion to 5 seconds

});