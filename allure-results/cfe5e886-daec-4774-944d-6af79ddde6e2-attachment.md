# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Test_Talk_Tutorial_Ch_4\alert_popups_test.spec.ts >> Handling Alerts in Playwright
- Location: tests\Test_Talk_Tutorial_Ch_4\alert_popups_test.spec.ts:3:5

# Error details

```
TimeoutError: locator.click: Timeout 30000ms exceeded.
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
  17 |     const [dialog] = await Promise.all([
  18 |         page.waitForEvent('dialog'),
> 19 |         page.getByText('See an example alert', { exact: true }).click()
     |                                                             ^ TimeoutError: locator.click: Timeout 30000ms exceeded.
  20 |     ]);
  21 | 
  22 |     console.log(`Alert message is: ${dialog.message()}`);
  23 |     console.log(`Dialog type is: ${dialog.type()}`);
  24 |     await dialog.accept();
  25 | 
  26 | });
  27 | 
  28 | test('Handling Confirm boxes in Playwright', async ({ page }) => {
  29 |     await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');
  30 | 
  31 |     page.once('dialog', async dialog => {
  32 |         //await dialog.accept(); // clicks on okay button
  33 |         await dialog.dismiss(); // clicks on cancel button
  34 |         console.log(`Confirm box message is: ${dialog.message()}`);
  35 |         console.log(`Dialog type is: ${dialog.type()}`);
  36 |     });
  37 | 
  38 |     await page.getByText('See a sample confirm', { exact: true }).click();
  39 | });
  40 | 
  41 | test('Handling Prompts in Playwright', async ({ page }) => {
  42 |     await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');
  43 | 
  44 |     page.once('dialog', async dialog => {
  45 |         await dialog.accept('Playwright'); // enters text and clicks on okay button
  46 |         console.log(`Prompt message is: ${dialog.message()}`);
  47 |         console.log(`Dialog type is: ${dialog.type()}`);
  48 |     });
  49 |     await page.getByText('See a sample prompt', { exact: true }).click();
  50 | });
  51 | 
  52 | 
```