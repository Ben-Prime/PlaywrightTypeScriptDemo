# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Test_Talk_Tutorial_Ch_1\codegen_test.spec.ts >> Test 2 will fail
- Location: tests\Test_Talk_Tutorial_Ch_1\codegen_test.spec.ts:26:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: false
Received: true
```

# Page snapshot

```yaml
- banner [ref=e3]:
  - generic [ref=e5]:
    - generic [ref=e6]:
      - button "Guide" [ref=e8] [cursor=pointer]
      - generic [ref=e10]:
        - link:
          - /url: /
          - generic:
            - generic:
              - img
    - search [ref=e12]:
      - generic [ref=e13]:
        - combobox [expanded] [ref=e16]
        - button "Search" [ref=e17] [cursor=pointer]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | /**
  4  |  * Author Testers Talk
  5  |  */
  6  | test('Codegen test case', { tag: ['@PlaywrightWithJenkins'] }, async ({ page }) => {
  7  |    await page.goto('https://youtube.com/');
  8  | 
  9  |   const acceptButton = page.locator('button:has-text("Accept all")').first();
  10 |   if (await acceptButton.isVisible().catch(() => false)) {
  11 |     await acceptButton.click();
  12 |     await page.waitForLoadState('networkidle');
  13 |   }
  14 | 
  15 |   await page.getByPlaceholder('Search').first().click();
  16 |   await page.getByPlaceholder('Search').first().fill('playwright by testers talk ');
  17 |   await page.getByRole('button', { name: 'Search', exact: true }).click();
  18 |   await page.getByText('Playwright by Testers Talk ✅').first().click();
  19 |   await page.locator('video').click();
  20 |   await expect(page.getByRole('link', { name: 'Playwright by Testers Talk ✅' })).toBeVisible();
  21 | });
  22 | 
  23 | /**
  24 |  * Author Testers Talk
  25 |  */
  26 | test('Test 2 will fail', { tag: ['@PlaywrightWithJenkins'] }, async ({ page }) => {
  27 |   await page.goto('https://www.youtube.com/@testerstalk');
  28 | 
  29 |   const acceptButton = page.locator('button:has-text("Accept all")').first();
  30 |   if (await acceptButton.isVisible().catch(() => false)) {
  31 |     await acceptButton.click();
  32 |     await page.waitForLoadState('networkidle');
  33 |   }
> 34 |   expect(true).toBe(false);
     |                ^ Error: expect(received).toBe(expected) // Object.is equality
  35 | });
```