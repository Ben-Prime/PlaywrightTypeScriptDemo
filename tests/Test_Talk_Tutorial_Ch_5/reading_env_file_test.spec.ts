import { test, expect } from '@playwright/test';

/**
 * Author Testers Talk
 */
test('Read ENV file in Playwright', async ({ page }) => {
   //await page.goto(`${process.env.YOUTUBE_URL}`);
   await page.goto(process.env.YOUTUBE_URL as string)

  const acceptButton = page.locator('button:has-text("Accept all")').first();
  if (await acceptButton.isVisible().catch(() => false)) {
    await acceptButton.click();
    await page.waitForLoadState('domcontentloaded');
  }

  await page.getByPlaceholder('Search').first().click();
  await page.getByPlaceholder('Search').first().fill('playwright by testers talk ');
  await page.getByRole('button', { name: 'Search', exact: true }).click();
  await page.getByText('Playwright by Testers Talk ✅').first().click();
  await page.locator('video').first().click();
  await expect(page.getByRole('link', { name: 'Playwright by Testers Talk ✅' })).toBeVisible();
});


