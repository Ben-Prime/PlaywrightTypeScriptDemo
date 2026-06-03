# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Test_Talk_Tutorial_Ch_5\data_driven_testing_using_EXCEL_test.spec.ts >> Data driven testing using JSON in Playwright: Cypress by Testers Talk
- Location: tests\Test_Talk_Tutorial_Ch_5\data_driven_testing_using_EXCEL_test.spec.ts:11:9

# Error details

```
Error: page.goto: Test ended.
Call log:
  - navigating to "https://youtube.com/", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import path from 'path';
  3  | import { readExcelFile } from '../../src/utils/ExcelHelper';
  4  | 
  5  | const excelFilePath = path.join(__dirname, '../../test-data/qa/TestData.xlsx');
  6  | 
  7  | const records = readExcelFile(excelFilePath);
  8  | 
  9  | for (const record of records) {
  10 | 
  11 |     test(`Data driven testing using JSON in Playwright: ${record.Skill1}`, async ({ page }) => {
  12 |         //await page.goto(`${process.env.YOUTUBE_URL}`);
> 13 |         await page.goto(process.env.YOUTUBE_URL as string)
     |                    ^ Error: page.goto: Test ended.
  14 | 
  15 |         const acceptButton = page.locator('button:has-text("Accept all")').first();
  16 |         if (await acceptButton.isVisible().catch(() => false)) {
  17 |             await acceptButton.click();
  18 |             await page.waitForLoadState('domcontentloaded');
  19 |         }
  20 | 
  21 |         await page.getByPlaceholder('Search').first().click();
  22 |         await page.getByPlaceholder('Search').first().fill(record.Skill1);
  23 |         await page.getByRole('button', { name: 'Search', exact: true }).click();
  24 |         await page.getByText(record.Skill1).first().click();
  25 |         await page.locator('video').first().click();
  26 |         await expect(page.getByRole('link', { name: record.Skill1})).toBeVisible();
  27 |     });
  28 | 
  29 | }
  30 | 
  31 | 
  32 | 
```