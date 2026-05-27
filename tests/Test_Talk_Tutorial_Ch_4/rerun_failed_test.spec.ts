import {test, expect} from '@playwright/test';

// or for more context npx playwright test --project="Google Chrome" --last-failed
// To run only failed tests from the previous test run, use the command: npx playwright test --retries=0 --last-failed
test('Test 1', async ({ page, browser }) => {
    // Navigate to the url and handle cookie consent if present
  await page.goto('https://youtube.com/');

  const acceptButton = page.locator('button:has-text("Accept all")').first();
  if (await acceptButton.isVisible().catch(() => false)) {
    await acceptButton.click();
    await page.waitForLoadState('networkidle');
  }

  const searchInput = page.getByPlaceholder('Search', { exact: true }).first();
  await searchInput.click();
  await searchInput.fill('playwright by testers talk');
  await searchInput.press('Enter');
  await expect(page).toHaveTitle(/playwright by testers talk - YouTube/);

});

test('Test 2', async ({ page, browser }) => {
    expect('2').toBe(2);
});

test('Test 3', async ({ page, browser }) => {
    expect(true).toBe(false);
});

