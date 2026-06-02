# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Test_Talk_Tutorial_Ch_5\data_driven_testing_using_CSV_test.spec.ts >> Data driven testing using JSON in Playwright: JavaScript by Testers Talk
- Location: tests\Test_Talk_Tutorial_Ch_5\data_driven_testing_using_CSV_test.spec.ts:21:9

# Error details

```
TimeoutError: locator.click: Timeout 30000ms exceeded.
Call log:
  - waiting for getByPlaceholder('Search').first()
    - locator resolved to <input type="text" role="combobox" autocorrect="off" aria-controls="i0" autocomplete="off" spellcheck="false" name="search_query" aria-expanded="true" placeholder="Search" aria-autocomplete="list" class="ytSearchboxComponentInput yt-searchbox-input title"/>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div id="topbar" class="style-scope ytd-consent-bump-v2-lightbox">…</div> from <ytd-consent-bump-v2-lightbox id="lightbox" class="style-scope ytd-app">…</ytd-consent-bump-v2-lightbox> subtree intercepts pointer events
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div id="topbar" class="style-scope ytd-consent-bump-v2-lightbox">…</div> from <ytd-consent-bump-v2-lightbox id="lightbox" class="style-scope ytd-app">…</ytd-consent-bump-v2-lightbox> subtree intercepts pointer events
    - retrying click action
      - waiting 100ms
    51 × waiting for element to be visible, enabled and stable
       - element is visible, enabled and stable
       - scrolling into view if needed
       - done scrolling
       - <div id="topbar" class="style-scope ytd-consent-bump-v2-lightbox">…</div> from <ytd-consent-bump-v2-lightbox id="lightbox" class="style-scope ytd-app">…</ytd-consent-bump-v2-lightbox> subtree intercepts pointer events
     - retrying click action
       - waiting 500ms

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - banner [ref=e4]:
      - generic [ref=e6]:
        - generic [ref=e7]:
          - button "Guide" [ref=e9] [cursor=pointer]:
            - generic [ref=e12]:
              - img
          - generic [ref=e13]:
            - link "YouTube Home" [ref=e14] [cursor=pointer]:
              - /url: /
              - generic [ref=e19]:
                - img
            - generic [ref=e20]: NG
          - button "Skip navigation" [ref=e24] [cursor=pointer]:
            - generic [ref=e25]: Skip navigation
        - search [ref=e30]:
          - generic [ref=e31]:
            - combobox "Search" [expanded] [ref=e34]
            - button "Search" [ref=e35] [cursor=pointer]:
              - generic [ref=e38]:
                - img
        - generic [ref=e40]:
          - button "Settings" [ref=e45] [cursor=pointer]:
            - generic [ref=e48]:
              - img
          - link "Sign in" [ref=e51] [cursor=pointer]:
            - /url: https://accounts.google.com/ServiceLogin?service=youtube&uilel=3&passive=true&continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26hl%3Den%26next%3Dhttps%253A%252F%252Fwww.youtube.com%252F%253FthemeRefresh%253D1&hl=en&ec=65620
            - generic [ref=e55]:
              - img
            - generic [ref=e56]: Sign in
    - navigation [ref=e60]:
      - generic [ref=e61]:
        - link "Home" [ref=e63] [cursor=pointer]:
          - /url: /
          - generic [ref=e66]:
            - img
          - generic [ref=e67]: Home
        - link "Shorts" [ref=e69] [cursor=pointer]:
          - /url: /shorts/
          - generic [ref=e72]:
            - img
          - generic [ref=e73]: Shorts
        - link "Subscriptions" [ref=e75] [cursor=pointer]:
          - /url: /feed/subscriptions
          - generic [ref=e78]:
            - img
          - generic [ref=e79]: Subscriptions
        - link "You" [ref=e81] [cursor=pointer]:
          - /url: /feed/you
          - generic [ref=e84]:
            - img
          - generic [ref=e85]: You
    - generic [ref=e86]:
      - main [ref=e87]:
        - generic [ref=e96]:
          - generic [ref=e97]:
            - heading "Your YouTube history is off" [level=2] [ref=e98]
            - generic "You can turn on watch and search history at any time to get the latest videos tailored to you. To update your selection, turn on YouTube History and confirm your settings to accept the use of cookies and data. Learn more" [ref=e100]:
              - text: You can turn on watch and search history at any time to get the latest videos tailored to you. To update your selection, turn on YouTube History and confirm your settings to accept the use of cookies and data.
              - link "Learn more" [ref=e101] [cursor=pointer]:
                - /url: https://support.google.com/youtube/answer/95725
          - link "Update setting" [ref=e106] [cursor=pointer]:
            - /url: https://consent.youtube.com/d?continue=https://www.youtube.com/%3FthemeRefresh%3D1%26cbrd%3D1&gl=NG&m=0&pc=yt&oyh=1&cm=6&hl=en&src=4
            - generic [ref=e107]: Update setting
      - text: •
  - dialog "Before you continue to YouTube" [active] [ref=e111]:
    - generic [ref=e112]:
      - generic [ref=e113]:
        - generic [ref=e117]:
          - img
        - generic [ref=e118]: A Google company
      - generic [ref=e119]:
        - 'button "Language: English" [ref=e124] [cursor=pointer]':
          - generic [ref=e128]:
            - img
          - generic [ref=e129]: en
        - generic [ref=e134]:
          - link "Sign in" [ref=e136] [cursor=pointer]:
            - /url: https://accounts.google.com/ServiceLogin?service=youtube&uilel=3&passive=true&continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26hl%3Den%26next%3Dhttps%253A%252F%252Fwww.youtube.com%252F%253FthemeRefresh%253D1&hl=en
            - generic [ref=e140]:
              - img
            - generic [ref=e141]: Sign in
          - tooltip "tooltip"
    - generic [ref=e145]:
      - heading "Before you continue to YouTube" [level=2] [ref=e146]
      - generic [ref=e147]:
        - generic [ref=e148]:
          - generic [ref=e150]:
            - text: We use
            - link "cookies" [ref=e151] [cursor=pointer]:
              - /url: https://policies.google.com/technologies/cookies?hl=en
            - text: and data to
          - list [ref=e152]:
            - listitem [ref=e153]:
              - generic [ref=e156]:
                - img
              - generic [ref=e157]: Deliver and maintain Google services
            - listitem [ref=e158]:
              - generic [ref=e161]:
                - img
              - generic [ref=e162]: Track outages and protect against spam, fraud, and abuse
            - listitem [ref=e163]:
              - generic [ref=e166]:
                - img
              - generic [ref=e167]: Measure audience engagement and site statistics to understand how our services are used and enhance the quality of those services
        - generic [ref=e168]:
          - generic [ref=e169]: If you choose to “Accept all,” we will also use cookies and data to
          - list [ref=e170]:
            - listitem [ref=e171]:
              - generic [ref=e174]:
                - img
              - generic [ref=e175]: Develop and improve new services
            - listitem [ref=e176]:
              - generic [ref=e179]:
                - img
              - generic [ref=e180]: Deliver and measure the effectiveness of ads
            - listitem [ref=e181]:
              - generic [ref=e184]:
                - img
              - generic [ref=e185]: Show personalized content, depending on your settings
            - listitem [ref=e186]:
              - generic [ref=e189]:
                - img
              - generic [ref=e190]: Show personalized ads, depending on your settings
        - generic [ref=e191]: If you choose to “Reject all,” we will not use cookies for these additional purposes.
        - generic [ref=e192]: Non-personalized content and ads are influenced by things like the content you’re currently viewing and your location (ad serving is based on general location). Personalized content and ads can also include things like video recommendations, a customized YouTube homepage, and tailored ads based on past activity, like the videos you watch and the things you search for on YouTube. We also use cookies and data to tailor the experience to be age-appropriate, if relevant.
        - generic [ref=e193]: Select “More options” to see additional information, including details about managing your privacy settings. You can also visit g.co/privacytools at any time.
        - generic [ref=e194]:
          - generic [ref=e195]:
            - button "Reject the use of cookies and other data for the purposes described" [ref=e198] [cursor=pointer]:
              - generic [ref=e199]: Reject all
            - button "Accept the use of cookies and other data for the purposes described" [ref=e205] [cursor=pointer]:
              - generic [ref=e206]: Accept all
          - link "More options" [ref=e213] [cursor=pointer]:
            - /url: https://consent.youtube.com/d?continue=https://www.youtube.com/%3FthemeRefresh%3D1%26cbrd%3D1&gl=NG&m=0&pc=yt&cm=2&hl=en&src=2&escs=AZ8E49AEroEWmd69ZwPzCf6jV2IuBVUS7cSywkuX8Hmx8s9iTuzOqYYwuIP-t1tEI7aJJ0Edl5m4UYuvGpgQoSAmL4hwYEK0lO3M
            - generic [ref=e214]: More options
        - generic [ref=e218]:
          - link "Privacy Policy" [ref=e220] [cursor=pointer]:
            - /url: https://policies.google.com/privacy?hl=en
          - generic [ref=e221]: •
          - link "Terms of Service" [ref=e223] [cursor=pointer]:
            - /url: https://policies.google.com/terms?hl=en
```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test'
  2  | 
  3  | import { parse } from 'csv-parse/sync';
  4  | import fs from 'fs'; // importing file system
  5  | import path from 'path';
  6  | 
  7  | type TestRecords = {
  8  |     Skill1: string,
  9  |     Skill2: string
  10 | }
  11 | 
  12 | const records = parse(
  13 |     fs.readFileSync(path.join(__dirname, '../../test-data/qa/testdata.csv')),
  14 |     {
  15 |         columns : true,
  16 |         skip_empty_lines: true
  17 |     }
  18 | ) as TestRecords[];
  19 | 
  20 | for (const record of records) {
  21 |     test(`Data driven testing using JSON in Playwright: ${record.Skill1}`, async ({ page }) => {
  22 |         //await page.goto(`${process.env.YOUTUBE_URL}`);
  23 |         await page.goto(process.env.YOUTUBE_URL as string)
  24 | 
  25 |         const acceptButton = page.locator('button:has-text("Accept all")').first();
  26 |         if (await acceptButton.isVisible().catch(() => false)) {
  27 |             await acceptButton.click();
  28 |             await page.waitForLoadState('domcontentloaded');
  29 |         }
  30 | 
> 31 |         await page.getByPlaceholder('Search').first().click();
     |                                                       ^ TimeoutError: locator.click: Timeout 30000ms exceeded.
  32 |         await page.getByPlaceholder('Search').first().fill(record.Skill1);
  33 |         await page.getByRole('button', { name: 'Search', exact: true }).click();
  34 |         await page.getByText(record.Skill1 + ' ✅').first().click();
  35 |         await page.locator('video').first().click();
  36 |         await expect(page.getByRole('link', { name: record.Skill1 + ' ✅' })).toBeVisible();
  37 |     });
  38 | 
  39 | 
  40 | }
```