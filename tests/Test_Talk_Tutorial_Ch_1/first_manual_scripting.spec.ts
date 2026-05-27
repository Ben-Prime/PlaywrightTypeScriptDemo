// import playwright module
import {test, expect} from '@playwright/test';

// write a test
test('first manual playwright type script test', async({page})=>{
    // navigate to URL
    await page.goto('https://google.com');
    // search with keyword
    await page.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk');
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');
    // click on playlist
    await page.getByRole('link', { name: 'Playwright by Testers Talk' }).first().click();
    // validate web page title
    await expect(page).toHaveTitle('Playwright by Testers Talk ✅ - YouTube')
});

