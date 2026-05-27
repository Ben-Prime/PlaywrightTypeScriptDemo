import { test, expect } from '@playwright/test';


test('should add two numbers correctly', () => {
    const add = (a: number, b: number): number => a + b;
    expect(add(2, 3)).toBe(5);
});

const searchKeywords = ['playwright by testers talk', 'API Testing by testers talk', 'cypress by testers talk'];

for (const searchKeyword of searchKeywords) {  // a for of loop to iterate over the search keywords
    test(`Parameterized test in playwright ${searchKeyword}`, async ({ page }) => {
    test.slow();
    // Navigate to the url and handle cookie consent if present
    await page.goto('https://youtube.com/');

    const acceptButton = page.locator('button:has-text("Accept all")').first();
    if (await acceptButton.isVisible().catch(() => false)) {
        await acceptButton.click();
        await page.waitForLoadState('networkidle');
    }

    const searchInput = page.getByPlaceholder('Search', { exact: true }).first();
    await searchInput.fill(searchKeyword);
    await searchInput.press('Enter');

    await expect(page).toHaveTitle(new RegExp(`${searchKeyword} - YouTube`));
});
}
