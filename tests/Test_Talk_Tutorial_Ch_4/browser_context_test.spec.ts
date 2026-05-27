import {test, expect} from '@playwright/test';

test('Multiple browsers/tabs in Playwright Typescript', async ({ page, browser }) => {
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

  // Open a new browser session and navigate to the url
  const newContext = await browser.newContext();
  const newPage = await newContext.newPage();

  await newPage.goto('https://youtube.com/');

  const acceptButton2 = newPage.locator('button:has-text("Accept all")').first();
  if (await acceptButton2.isVisible().catch(() => false)) {
    await acceptButton2.click();
    await newPage.waitForLoadState('networkidle');
  }

  const searchInput2 = newPage.getByPlaceholder('Search', { exact: true }).first();
  await searchInput2.click();
  await searchInput2.fill('playwright by testers talk');
  await searchInput2.press('Enter');
  await expect(newPage).toHaveTitle(/playwright by testers talk - YouTube/);

  // Open a new tab in the same browser session and navigate to the url
  const newTab = await newContext.newPage();
  //const newTab = await page.context().newPage(); or when using the same browser context as the first page
  await newTab.goto('https://youtube.com/');

});