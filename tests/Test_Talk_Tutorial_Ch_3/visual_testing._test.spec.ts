import {test, expect}  from '@playwright/test';

test('Page Visual Comparison in Playwright', async ({ page }) => {
    test.slow();

    await page.goto('https://github.com/login');
    await page.waitForLoadState('networkidle');

    await expect(page).toHaveScreenshot('GitHubLoginPage.png', { fullPage: true });
    await page.locator('#login_field').fill('testuser');
    //await expect.soft(page).toHaveScreenshot('GitHubLoginPage.png', { fullPage: true }); // wil fail due to dynamic content, but test will continue
});

test('Element Visual Comparison in Playwright', async ({ page }) => {
    test.slow();

    await page.goto('https://github.com/login', {waitUntil: 'networkidle'});

    await expect(page).toHaveScreenshot('GitHubLoginPage.png', { fullPage: true });
    
    const element = page.locator('[class="authentication-body authentication-body--with-form new-session"]');
    await expect(element).toHaveScreenshot('GitHubLoginForm.png');

    await page.locator('#login_field').fill('testuser');
    //await expect.soft(element).toHaveScreenshot('GitHubLoginForm.png');
});

