# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Test_Talk_Tutorial_Ch_6\mock_api_responses_test.spec.ts >> Mock API responses in Playwright
- Location: tests\Test_Talk_Tutorial_Ch_6\mock_api_responses_test.spec.ts:3:5

# Error details

```
TypeError: json.psuh is not a function
```

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('playwright typescript by testers talk')
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for getByText('playwright typescript by testers talk')

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - heading "Render a List of Fruits" [level=1] [ref=e3]
  - paragraph [ref=e4]: This demo app renders a list of fruits. The tests for this app mock the api call to return only mocked data, intercept the request and add a new fruit to the response and use HAR files to mock the API
  - paragraph [ref=e5]:
    - link "Check out the tests for this repo" [ref=e6] [cursor=pointer]:
      - /url: https://github.com/microsoft/playwright-examples/blob/main/tests/api-mocking/api-mocking.spec.ts
  - paragraph [ref=e7]:
    - link "Learn more on API mocking in Playwright" [ref=e8] [cursor=pointer]:
      - /url: https://playwright.dev/docs/mock
  - text: Loading...
```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test'
  2  | 
  3  | test('Mock API responses in Playwright', async({page})=>{
  4  |     
  5  |     // Get the response and add to it
  6  |     await page.route('*/**/api/v1/fruits', async route=>{
  7  |         const response = await route.fetch();
  8  |         const json = await response.json(); 
  9  | 
  10 |         json.push( { name: 'playwright typescript by testers talk', id: 12 });
  11 |         json.psuh({ name: 'playwright javascript by testers talk', id: 13 });
  12 |         json.push({ name: 'cypress by testers talk', id: 14 });
  13 |         json.push({ name: 'api testing by testers talk', id: 15 });
  14 |         // Fulfill using the original response, while patching the response body
  15 |         // with the given JSON object.
  16 |         await route.fulfill({response, json});
  17 |     });
  18 | 
  19 |     // Go to URL
  20 |     await page.goto('https://demo.playwright.dev/api-mocking/');
  21 | 
  22 |     //Valdate text
> 23 |     await expect(page.getByText('playwright typescript by testers talk')).toBeVisible();
     |                                                                           ^ Error: expect(locator).toBeVisible() failed
  24 |     await expect(page.getByText('playwright javascript by testers talk')).toBeVisible();
  25 |     await expect(page.getByText('cypress by testers talk')).toBeVisible();
  26 |     await expect(page.getByText('api testing by testers talk')).toBeVisible();
  27 | });
```