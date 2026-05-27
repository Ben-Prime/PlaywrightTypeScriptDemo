import { test, expect } from '@playwright/test';

test('Hard Assertions in playwright', async ({ page }) => {
  test.slow();
  // Navigate to the url and handle cookie consent if present
  await page.goto('https://youtube.com/');

  const acceptButton = page.locator('button:has-text("Accept all")').first();
  if (await acceptButton.isVisible().catch(() => false)) {
    await acceptButton.click();
    await page.waitForLoadState('networkidle');
  }

  const searchInput = page.getByPlaceholder('Search', { exact: true }).first();
  // Visible, editable, enabled, empty
  await expect(searchInput).toBeVisible();
  await expect(searchInput).toBeEditable();
  await expect(searchInput).toBeEnabled();
  await expect(searchInput).toBeEmpty();

  // Fill the search input and assert URL, title, text, count
  await searchInput.click();
  await searchInput.fill('playwright by testers talk');
  await searchInput.press('Enter');
  await expect(page).toHaveURL(/results\?search_query=playwright\+by\+testers\+talk/);
  await expect(page).toHaveTitle(/playwright by testers talk - YouTube/);
  await expect(page.locator('[id="text"]').nth(2)).toHaveText('Testers Talk'); // Assert that the third result contains "Testers Talk"
  await expect(page.getByPlaceholder('Search')).toHaveCount(1); // Assert that there are 20 results on the page
});

test('Soft Assertions in playwright', async ({ page }) => {
  test.slow();

  await page.goto('https://youtube.com/');

  const acceptButton = page.getByRole('button', { name: 'Accept all' }).first();
  if (await acceptButton.isVisible().catch(() => false)) {
    await acceptButton.click();
    await page.waitForLoadState('networkidle');
  }
  const searchInput = page.getByPlaceholder('Search', { exact: true }).first();
  await expect.soft(searchInput).toBeHidden();
  await expect(searchInput).toBeEditable();
});