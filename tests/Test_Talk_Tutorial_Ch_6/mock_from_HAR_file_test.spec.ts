import {test, expect} from '@playwright/test'

test('Mocking APIs with HAR file in Playwright', async({page})=>{

    //Recording a HAR file -- needs update to be true for create and update HAR file with the 
    // actual network information
    await page.routeFromHAR('./har/friuts.har', {
        url: '*/**/api/v1/fruits',
        update: false
    });

    // Go to URL
    await page.goto('https://demo.playwright.dev/api-mocking/');

    //Valdate text
    await expect(page.getByText('Strawberry')).toBeVisible();

    await expect(page.getByText('playwright typescript by testers talk')).toBeVisible();
    await expect(page.getByText('playwright javascript by testers talk')).toBeVisible();
    await expect(page.getByText('cypress by testers talk')).toBeVisible();
    await expect(page.getByText('api testing by testers talk')).toBeVisible();
});


