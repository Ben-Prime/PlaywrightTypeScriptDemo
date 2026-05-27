import { test, expect } from '@playwright/test';

test('should perform keyboard actions', async ({ page }) => {
    // Navigate to the page with the input field
    test.slow()
    await page.goto('https://www.youtube.com')
    // Handle cookie consent by clicking "Accept all" button
    const acceptButton = page.locator('button:has-text("Accept all")').first();
    // If the cookie/consent popup appears, accept it
    if (await acceptButton.isVisible({ timeout: 5000 }).catch(() => false)) {
        await acceptButton.click();
        await page.waitForLoadState('networkidle');
    }

    await page.getByRole('combobox', { name: 'Search' }).click();
    await page.getByRole('combobox', { name: 'Search' }).fill('Hello World');
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');
    await expect(page).toHaveURL(/results\?search_query=Hello\+World/);  // regex expression
   

    await page.getByRole('combobox', { name: 'Search' }).click();
    await page.keyboard.press('Control+A'); // Select all text in the search box
    await page.keyboard.press('Backspace'); // Clear the search box
    await expect(page.getByRole('combobox', { name: 'Search' })).toBeEmpty(); // Verify the search box is empty

});

test('should perform keyboard actions with modifiers', async ({ page }) => {
    // Navigate to the page with the input field
    test.slow()
    await page.goto('https://www.youtube.com')
    // Handle cookie consent by clicking "Accept all" button
    const acceptButton = page.locator('button:has-text("Accept all")').first();
    // If the cookie/consent popup appears, accept it
    if (await acceptButton.isVisible({ timeout: 5000 }).catch(() => false)) {
        await acceptButton.click();
        await page.waitForLoadState('networkidle');
    }

     await page.getByRole('combobox', { name: 'Search' }).click();
     await page.keyboard.press('Tab'); // Move focus to the next element (e.g., search button)
     await page.keyboard.press('Tab'); // Move focus to the next element (e.g., search button)
     await page.keyboard.press('Enter');
});