import { test, expect } from '@playwright/test';

test('Iterating matching elements in Playwright', async ({ page }) => {
    await page.goto('https://github.com/BakkappaN');

    const repoElements = await page.$$('.repo');

    // for of loop
    for (const element of repoElements) {
        const text = await element.textContent();
        console.log(`Text from 1st for loop is: ${text}`);
    }

    console.log('-----------------------------');

    const length = repoElements.length;

    // for loop
    for (let i = 0; i < length; i++) {
        const text = await repoElements[i].textContent();
        console.log(`Text from 2nd for loop is: ${text}`);
    }

    console.log('-----------------------------');

    // for loop with nth() method
    const repos = page.locator('.repo');

    const count = await repos.count();

    for (let i = 0; i < count; i++) {
        const text = await repos.nth(i).textContent();
        console.log(`Text from 3rd for loop is: ${text}`);
    }
});   