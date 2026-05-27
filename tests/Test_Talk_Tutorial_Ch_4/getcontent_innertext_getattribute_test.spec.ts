import {test, expect} from '@playwright/test';

test('Get Text and Attribute Value in Playwright', async ({page}) => {
    await page.goto('https://github.com/BakkappaN');

    const name = await page.locator('[itemprop="name"]').textContent(); // or use .innerText() instead of .textContent() if you want to get the visible text
    const finalName = name?.trim(); // Remove leading and trailing whitespace
    console.log(`Name is: ${finalName}`);
    expect(finalName).toBe('Testers Talk');

    const attributeValue = await page.getByTestId('repositories').first().getAttribute('data-selected-links');
    console.log(`Attribute value is: ${attributeValue}`);
});   