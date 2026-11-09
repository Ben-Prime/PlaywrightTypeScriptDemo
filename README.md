# Playwright TypeScript Demo

A hands-on collection of [Playwright](https://playwright.dev/) end-to-end tests written in TypeScript. The tests are organised by tutorial chapter and move from first scripts and locators through to the Page Object Model, custom fixtures, data-driven testing, environment configuration, and API mocking.

## Prerequisites

- [Node.js](https://nodejs.org/) 20 or later (CI uses Node 20)
- Google Chrome installed locally. The default Playwright project runs on the branded Chrome channel.

## Getting started

```bash
# Install dependencies
npm install

# Install the Playwright browsers (add --with-deps on Linux)
npx playwright install
```

### Environment variables

Settings are loaded from a `.env` file in the project root through [`dotenv`](https://github.com/motdotla/dotenv) (see `playwright.config.ts`):

| Variable             | Purpose                                                                   | Example                    |
| -------------------- | ------------------------------------------------------------------------- | -------------------------- |
| `TEST_EXECUTION_ENV` | Selects the environment and the `test-data/<env>/` folder (`qa` or `dev`) | `qa`                       |
| `YOUTUBE_URL`        | Base URL used by the `HomePage` page object                               | `https://www.youtube.com/` |
| `SEARCH_KEYWORD`     | Search term used by the POM tests                                         | `Playwright by Testers Talk` |

## npm scripts

| Script                    | What it does                                        |
| ------------------------- | --------------------------------------------------- |
| `npm test`                | Run the whole suite (headless, Google Chrome)       |
| `npm run test:headed`     | Run with a visible browser                          |
| `npm run test:ui`         | Open Playwright's interactive UI mode               |
| `npm run test:smoke`      | Run tests tagged `@SmokeTesting`                    |
| `npm run test:regression` | Run tests tagged `@RegressionTesting`               |
| `npm run report`          | Open the Playwright HTML report                     |
| `npm run report:allure`   | Build the Allure report from `allure-results/` and open it |
| `npm run lint`            | Lint the project with ESLint                        |
| `npm run lint:fix`        | Lint and auto-fix what can be fixed                 |

## Running tests

```bash
# Run the whole suite
npm test

# Pass extra Playwright CLI options after "--"
npm test -- tests/Test_Talk_Tutorial_Ch_5
npm test -- tests/Test_Talk_Tutorial_Ch_2/locators_test.spec.ts
npm test -- --last-failed
npm test -- --debug

# Headed, UI mode, or filtered by tag
npm run test:headed
npm run test:ui
npm run test:smoke
npm run test:regression

# Generate a test by recording browser actions
npx playwright codegen
```

## Reports

Every run writes several reports, configured in `playwright.config.ts`:

| Reporter | Output                                     |
| -------- | ------------------------------------------ |
| HTML     | `playwright-report/`                       |
| JSON     | `playwright-report/test-results.json`      |
| JUnit    | `playwright-report/test-results.xml`       |
| Allure   | `allure-results/` (raw results)            |
| List     | Console output                             |

```bash
# Open the Playwright HTML report
npm run report

# Build and open the Allure report (needs Java on your PATH)
npm run report:allure
```

Screenshots, videos and traces are recorded for every test (`screenshot`, `video` and `trace` are all set to `on`). To open a trace:

```bash
npx playwright show-trace test-results/<test-folder>/trace.zip
```

## Project structure

```
.
├── .github/workflows/playwright.yml  # CI: runs the suite on push/PR to main
├── har/                              # Recorded HAR files for API mocking
├── screenshots/                      # Output of the screenshot examples
├── src/
│   ├── fixture/TestFixture.ts        # Custom fixtures (page objects, test data, auto hooks)
│   ├── interface/                    # TypeScript types for test data
│   ├── pages/                        # Page objects: HomePage, ResultPage, PlaylistPage
│   └── utils/                        # JsonHelper (env-based data), ExcelHelper
├── test-data/
│   ├── dev/                          # JSON test data for the dev environment
│   └── qa/                           # JSON, CSV and Excel test data for qa
├── tests/
│   ├── Test_Talk_Tutorial_Ch_1/ … Ch_6/
│   └── example.spec.ts
├── eslint.config.js
├── playwright.config.ts
└── tsconfig.json
```

## What each chapter covers

| Chapter  | Topics |
| -------- | ------ |
| **Ch 1** | Codegen, first manual script, GitHub login flow |
| **Ch 2** | Locators, assertions, hooks, dropdowns, date pickers, iframes, drag and drop, mouse and keyboard actions, screenshots |
| **Ch 3** | Annotations (`skip`, `fixme`, `slow`, etc.), grouping with `describe`, parameterised tests, tags, timeouts, visual comparison testing |
| **Ch 4** | Alerts and popups, browser contexts, checkboxes and radio buttons, `textContent`/`innerText`/`getAttribute`, iterating elements, retries, reporters |
| **Ch 5** | Data-driven testing (CSV, Excel, JSON), Page Object Model, custom fixtures, reading `.env`, environment-based test data |
| **Ch 6** | Mocking API requests and responses, replaying responses from a HAR file |

## Key concepts

### Custom fixtures and Page Object Model

`src/fixture/TestFixture.ts` extends Playwright's `test` with page objects and environment-aware test data, so tests get them injected directly:

```ts
import { test } from '../../src/fixture/TestFixture';

test('search and open playlist', async ({ homePage, resultPage, playlistPage, testData }) => {
  await homePage.goToURL();
  await homePage.searchWithKeyword(String(testData.Module1TestData?.Skill1));
  await resultPage.clickOnPlaylist(String(testData.Module1TestData?.Skill1));
});
```

It also includes an auto fixture (`saveLogs`) that runs before and after every test that uses it.

### Environment-based test data

`loadTestData()` in `src/utils/JsonHelper.ts` reads every `.json` file in `test-data/<TEST_EXECUTION_ENV>/` and merges them into one object. To switch environments, change `TEST_EXECUTION_ENV` in `.env` (or set it in the shell before running).

### Visual testing

Baseline snapshots are stored next to the spec in `*-snapshots/` folders. They are platform-specific (the current baselines are for `win32`). To regenerate them:

```bash
npm test -- tests/Test_Talk_Tutorial_Ch_3/visual_testing._test.spec.ts --update-snapshots
```

## Configuration highlights

From `playwright.config.ts`:

- **Browser:** Google Chrome (`channel: 'chrome'`). Chromium, Firefox, WebKit, mobile and Edge projects are included but commented out.
- **Timeouts:** 10 minutes per test, 1 hour for the whole run, 30 seconds for `expect` and actions, 60 seconds for navigation.
- **Retries:** 2 on CI, 1 locally. `maxFailures: 10` stops the run early.
- **Parallelism:** fully parallel locally, 1 worker on CI.
- **Locale/timezone:** `en-NG` / `Africa/Lagos`.
- **`testIdAttribute`:** `data-tab-item`, so `getByTestId()` targets that attribute.

## Linting

ESLint is set up in `eslint.config.js` (flat config) with `@eslint/js`, `typescript-eslint` and `eslint-plugin-playwright`. It errors on `test.only` and `page.pause()` and warns on skipped tests.

```bash
npm run lint       # report problems
npm run lint:fix   # auto-fix where possible
```

## Continuous integration

`.github/workflows/playwright.yml` runs on every push and pull request to `main`/`master`. It installs dependencies and browsers, runs `npx playwright test` on Ubuntu, and uploads `playwright-report/` as a build artifact for 30 days.

## Resources

- [Playwright documentation](https://playwright.dev/docs/intro)
- [Playwright Test API](https://playwright.dev/docs/api/class-test)
- [Allure Playwright](https://allurereport.org/docs/playwright/)
