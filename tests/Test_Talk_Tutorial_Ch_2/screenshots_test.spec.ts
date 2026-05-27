import { test, expect } from '@playwright/test'

test('Capture screenshots in playwright', async ({ page }) => {

    await test.step('navigate to url', async () => {
        test.slow()
        await page.goto('https://www.youtube.com/@testerstalk')
        //await page.goto('https://www.youtube.com/@testerstalk', { waitUntil: 'networkidle' }) or use page.waitForLoadState('networkidle') after navigation to ensure the page has fully loaded before proceeding with the test steps.
        // Handle cookie consent by clicking "Accept all" button
        const acceptButton = page.locator('button:has-text("Accept all")').first();
        // If the cookie/consent popup appears, accept it
        if (await acceptButton.isVisible({ timeout: 5000 }).catch(() => false)) {
            await acceptButton.click();
            await page.waitForLoadState('networkidle');
        }
    });

 //Element screenshot
    await test.step('capture screenshot for an element', async () => {
        test.slow()
        const pageHeaderBanner = page.locator('#page-header-container');

        await pageHeaderBanner.waitFor({ state: 'visible' });
        //await pageHeaderBanner.waitFor({ state: 'visible', timeout: 10000 });
        await expect(pageHeaderBanner).toBeVisible();
        await pageHeaderBanner.screenshot({ path: './screenshots/ElementScreenshot.png' });
    });

    //Page screenshot
    await test.step('capture screenshot for the page', async () => {
        test.slow()
        await page.screenshot({ path: './screenshots/PageScreenshot.png' });
    });

    //Full page screenshot
    await test.step('capture screenshot for the full page', async () => {
        test.slow()
        await page.screenshot({ path: './screenshots/FullPageScreenshot.png', fullPage: true });
    });

});