# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Test_Talk_Tutorial_Ch_5\data_driven_testing_using_JSON_test.spec.ts >> Data driven testing using JSON in Playwright: JavaScript by Testers Talk
- Location: tests\Test_Talk_Tutorial_Ch_5\data_driven_testing_using_JSON_test.spec.ts:22:9

# Error details

```
Error: locator.click: Test ended.
Call log:
  - waiting for locator('video').first()
    - locator resolved to <video tabindex="-1" controlslist="nodownload" class="video-stream html5-main-video"></video>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
    - waiting 20ms

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import testData from '../../test-data/qa/testdata.json';
  3  | 
  4  | // for type safety
  5  | type TestData = {
  6  |     TestDataSet1: {
  7  |         Skill1: string,
  8  |         Skill2: string
  9  |     },
  10 |     TestDataSet2: {
  11 |         Skill1: string,
  12 |         Skill2: string
  13 |     }
  14 | }
  15 | 
  16 | //convert testData into internal TestData type/object
  17 | const typedTestData = testData as TestData;
  18 | 
  19 | for (const dataSetName in typedTestData) {
  20 |     const skill = typedTestData[dataSetName as keyof TestData];
  21 | 
  22 |     test(`Data driven testing using JSON in Playwright: ${skill.Skill1}`, async ({ page }) => {
  23 |         //await page.goto(`${process.env.YOUTUBE_URL}`);
  24 |         await page.goto(process.env.YOUTUBE_URL as string)
  25 | 
  26 |         const acceptButton = page.locator('button:has-text("Accept all")').first();
  27 |         if (await acceptButton.isVisible().catch(() => false)) {
  28 |             await acceptButton.click();
  29 |             await page.waitForLoadState('domcontentloaded');
  30 |         }
  31 | 
  32 |         await page.getByPlaceholder('Search').first().click();
  33 |         await page.getByPlaceholder('Search').first().fill(skill.Skill1);
  34 |         await page.getByRole('button', { name: 'Search', exact: true }).click();
  35 |         await page.getByText(skill.Skill1 + ' ✅').first().click();
> 36 |         await page.locator('video').first().click();
     |                                             ^ Error: locator.click: Test ended.
  37 |         await expect(page.getByRole('link', { name: skill.Skill1 + ' ✅' })).toBeVisible();
  38 |     });
  39 | 
  40 | }
  41 | 
  42 | 
  43 | 
```