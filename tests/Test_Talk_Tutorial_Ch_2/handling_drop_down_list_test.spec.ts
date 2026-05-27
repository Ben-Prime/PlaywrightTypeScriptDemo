import { test, expect } from '@playwright/test';

test('handling drop down list', async ({ page }) => {
    await page.goto('https://www.facebook.com/');

    await page.getByRole('link', { name: 'Create new account' }).click();

    //select dropdown using value
    //await page.getByLabel('Month').selectOption('10'); // This is deprecated for Facebook, as they use custom dropdowns instead of native select elements.

    //select dropdown using visible text
    //await page.locator('#month').selectOption('Jan'); // This is deprecated for Facebook, as they use custom dropdowns instead of native select elements.

    //select the month
    const monthDropdown = page.getByLabel('Select month').first();
    await monthDropdown.click();
    await page.getByText('December').click();

    //select the year
    const yearDropdown = page.getByLabel('Select year').first();
    await yearDropdown.click();
    await page.getByText('2023').click();

    // validate all the options in dropdown (and print in console)
    await monthDropdown.click();
    const monthListbox = page.locator('[role="listbox"][aria-label="Select month"]');
    const monthOptions = monthListbox.locator('[role="option"]');

    //short way to validate all the options in dropdown
    await expect(monthOptions).toHaveText(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']);
    const count = await monthOptions.count();

    //long way to validate all the options in dropdown
    for (let i = 0; i < count; i++) {
        const option = monthOptions.nth(i);
        const monthText = await option.textContent();

        await expect(option).toBeVisible();
        //console.log(monthText?.trim() + ' is visible in the dropdown'); // ? prevents errors if textContent() returns null
        console.log(`${monthText?.trim()} is visible in the dropdown`);
        
    }

});

// test('handling drop down list', async ({page}) => {
//     await page.goto('https://www.rahulshettyacademy.com/AutomationPractice/');
//     const dropDownList = page.locator('#dropdown-class-example');
//     await dropDownList.selectOption('option2');
//     await expect(dropDownList).toHaveValue('option2');
// });