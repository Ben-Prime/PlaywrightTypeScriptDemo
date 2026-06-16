# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Test_Talk_Tutorial_Ch_4\alert_popups_test.spec.ts >> Handling Alerts in Playwright
- Location: tests\Test_Talk_Tutorial_Ch_4\alert_popups_test.spec.ts:3:5

# Error details

```
Error: locator.click: Test ended.
Call log:
  - waiting for getByText('See an example alert', { exact: true })
    - locator resolved to <a onclick="window.alert("Sample alert")">See an example alert</a>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - performing click action

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('Handling Alerts in Playwright', async ({ page }) => {
  4  |     await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');
  5  | 
  6  |     //Listen for the 'dialog' event and handle the alert when it appears
  7  |     // page.once('dialog', async dialog => {
  8  |     //     await dialog.accept(); // clicks on okay button
  9  |     //     console.log(`Alert message is: ${dialog.message()}`);
  10 |     //     console.log(`Dialog type is: ${dialog.type()}`);
  11 |     // });
  12 | 
  13 |     // await page.getByText('See an example alert', { exact: true }).click();
  14 | 
  15 |     //Or Use this code to handle the alert without using event listener
  16 | 
  17 |     const dialogPromise = page.waitForEvent('dialog');
  18 | 
> 19 |     await page.getByText('See an example alert', { exact: true }).click();
     |                                                                   ^ Error: locator.click: Test ended.
  20 | 
  21 |     const dialog = await dialogPromise;
  22 | 
  23 |     console.log(`Alert message is: ${dialog.message()}`);
  24 |     console.log(`Dialog type is: ${dialog.type()}`);
  25 | 
  26 |     await dialog.accept();
  27 | 
  28 | });
  29 | 
  30 | test('Handling Confirm boxes in Playwright', async ({ page }) => {
  31 |     await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');
  32 | 
  33 |     page.once('dialog', async dialog => {
  34 |         //await dialog.accept(); // clicks on okay button
  35 |         await dialog.dismiss(); // clicks on cancel button
  36 |         console.log(`Confirm box message is: ${dialog.message()}`);
  37 |         console.log(`Dialog type is: ${dialog.type()}`);
  38 |     });
  39 | 
  40 |     await page.getByText('See a sample confirm', { exact: true }).click();
  41 | });
  42 | 
  43 | test('Handling Prompts in Playwright', async ({ page }) => {
  44 |     await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');
  45 | 
  46 |     page.once('dialog', async dialog => {
  47 |         await dialog.accept('Playwright'); // enters text and clicks on okay button
  48 |         console.log(`Prompt message is: ${dialog.message()}`);
  49 |         console.log(`Dialog type is: ${dialog.type()}`);
  50 |     });
  51 |     await page.getByText('See a sample prompt', { exact: true }).click();
  52 | });
  53 | 
  54 | 
```