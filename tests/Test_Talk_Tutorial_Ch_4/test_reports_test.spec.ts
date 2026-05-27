import {test, expect} from '@playwright/test';

test('Alert popups test', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');    
});