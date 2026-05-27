import { test, expect } from '@playwright/test'

const acceptCookies = async (page: any) => {
    const acceptButton = page.locator('button:has-text("Accept all")').first();
    if (await acceptButton.isVisible({ timeout: 120000 }).catch(() => false)) {
        await acceptButton.click();
        await page.waitForLoadState('networkidle');
    }
};

test.beforeAll(async () => {
    console.log('This will run before all tests...');
});

test.beforeEach(async ({page}) => {
    console.log('This will run before each test...');
    // Go to the URL
    await page.goto('https://youtube.com/@testerstalk');
});

test.afterAll(async () => {
    console.log('This will run after all tests...');
});

test.afterEach(async () => {
    console.log('This will run after each test...');
});

test('Test 1', async ({ page }) => {
    test.slow();

    console.log('This is Test 1...');

    await acceptCookies(page);

    await page.getByPlaceholder('Search').fill('placeholder locator');
});

test('Test 2', async ({ page }) => {
    test.slow();

    console.log('This is Test 2...');

    await acceptCookies(page);

    await page.locator('input[name="search_query"]').fill('css selector');
});