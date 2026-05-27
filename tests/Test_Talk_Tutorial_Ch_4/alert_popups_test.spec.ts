import { test, expect } from '@playwright/test';

test('Handling Alerts in Playwright', async ({ page }) => {
    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');

    page.once('dialog', async dialog => {
        await dialog.accept(); // clicks on okay button
        console.log(`Alert message is: ${dialog.message()}`);
        console.log(`Dialog type is: ${dialog.type()}`);
    });

    await page.getByText('See an example alert', { exact: true }).click();
});

test('Handling Confirm boxes in Playwright', async ({ page }) => {
    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');

    page.once('dialog', async dialog => {
        //await dialog.accept(); // clicks on okay button
        await dialog.dismiss(); // clicks on cancel button
        console.log(`Confirm box message is: ${dialog.message()}`);
        console.log(`Dialog type is: ${dialog.type()}`);
    });

    await page.getByText('See a sample confirm', { exact: true }).click();
});

test('Handling Prompts in Playwright', async ({ page }) => {
    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');

    page.once('dialog', async dialog => {
        await dialog.accept('Playwright'); // enters text and clicks on okay button
        console.log(`Prompt message is: ${dialog.message()}`);
        console.log(`Dialog type is: ${dialog.type()}`);
    });
    await page.getByText('See a sample prompt', { exact: true }).click();
});

