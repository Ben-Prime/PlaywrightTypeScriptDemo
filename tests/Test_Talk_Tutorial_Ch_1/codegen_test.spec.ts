import { test, expect } from '@playwright/test';

/**
 * Author Testers Talk
 */
test('Codegen test case', { tag: ['@PlaywrightWithJenkins'] }, async ({ page }) => {
   await page.goto('https://youtube.com/');

  const acceptButton = page.locator('button:has-text("Accept all")').first();
  if (await acceptButton.isVisible().catch(() => false)) {
    await acceptButton.click();
    await page.waitForLoadState('domcontentloaded');
  }

  await page.getByPlaceholder('Search').first().click();
  await page.getByPlaceholder('Search').first().fill('playwright by testers talk ');
  await page.getByRole('button', { name: 'Search', exact: true }).click();
  await page.getByText('Playwright by Testers Talk ✅').first().click();
  await page.locator('video').click();
  await expect(page.getByRole('link', { name: 'Playwright by Testers Talk ✅' })).toBeVisible();
});

/**
 * Author Testers Talk
 */
test('Test 2 will fail', { tag: ['@PlaywrightWithJenkins'] }, async ({ page }) => {
  await page.goto('https://www.youtube.com/@testerstalk');

  const acceptButton = page.locator('button:has-text("Accept all")').first();
  if (await acceptButton.isVisible().catch(() => false)) {
    await acceptButton.click();
    await page.waitForLoadState('domcontentloaded');
  }
  expect(true).toBe(false);
});