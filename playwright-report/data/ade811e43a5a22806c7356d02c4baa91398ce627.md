# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Test_Talk_Tutorial_Ch_1\first_manual_scripting.spec.ts >> first manual playwright type script test
- Location: tests\Test_Talk_Tutorial_Ch_1\first_manual_scripting.spec.ts:5:5

# Error details

```
TimeoutError: locator.fill: Timeout 30000ms exceeded.
Call log:
  - waiting for getByRole('combobox', { name: 'Search' })

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - navigation [ref=e3]:
      - generic [ref=e5]:
        - generic [ref=e6]:
          - link [ref=e8] [cursor=pointer]:
            - /url: https://mail.google.com/mail/&ogbl
            - text: Gmail
          - link [ref=e10] [cursor=pointer]:
            - /url: https://www.google.com/imghp?hl=en&ogbl
            - text: Images
        - button [ref=e13] [cursor=pointer]:
          - img [ref=e14]
        - link [ref=e18] [cursor=pointer]:
          - /url: https://accounts.google.com/ServiceLogin?hl=en&passive=true&continue=https://www.google.com/&ec=futura_exp_og_so_72776762_e
          - text: Sign in
    - generic [ref=e20]:
      - link [ref=e21] [cursor=pointer]:
        - /url: /search?sca_esv=5cfa1bf17cbca1cf&q=FIFA+World+Cup+2026&oi=ddle&noiga=1&ct=460195031&hl=en-GB&stick=H4sIAAAAAAAC_-NgVuLQz9U3MDYoNJ_AwriIVdjN081RITy_KCdFwbm0QMHIwMgMAKor_7IlAAAA&sa=X&ved=0ahUKEwiO-93v5IuVAxVVTkEAHSx4NSQQPQgE
        - img [ref=e23]
      - button [ref=e25]:
        - img [ref=e30] [cursor=pointer]
    - search [ref=e33]:
      - generic [ref=e35]:
        - generic [ref=e37]:
          - button [ref=e40] [cursor=pointer]:
            - img [ref=e42]
          - combobox [ref=e45]
          - generic [ref=e46]:
            - generic [ref=e47]:
              - button [ref=e48] [cursor=pointer]:
                - img [ref=e49]
              - button [ref=e51] [cursor=pointer]:
                - img [ref=e52]
            - link [ref=e54] [cursor=pointer]:
              - generic [ref=e56]:
                - img [ref=e58]
                - generic [ref=e65]: AI Mode
        - generic [ref=e67]:
          - button [ref=e68] [cursor=pointer]: Google Search
          - button [ref=e69] [cursor=pointer]: I'm Feeling Lucky
    - generic [ref=e72]:
      - text: "Google offered in:"
      - link [ref=e73] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_oQLeY9iw_TuWt2_j2Zhw9EBGDTM%3D&hl=ha&source=homepage&sa=X&ved=0ahUKEwiO-93v5IuVAxVVTkEAHSx4NSQQ2ZgBCDc
        - text: Hausa
      - link [ref=e74] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_oQLeY9iw_TuWt2_j2Zhw9EBGDTM%3D&hl=ig&source=homepage&sa=X&ved=0ahUKEwiO-93v5IuVAxVVTkEAHSx4NSQQ2ZgBCDg
        - text: Igbo
      - link [ref=e75] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_oQLeY9iw_TuWt2_j2Zhw9EBGDTM%3D&hl=yo&source=homepage&sa=X&ved=0ahUKEwiO-93v5IuVAxVVTkEAHSx4NSQQ2ZgBCDk
        - text: Èdè Yorùbá
      - link [ref=e76] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_oQLeY9iw_TuWt2_j2Zhw9EBGDTM%3D&hl=pcm&source=homepage&sa=X&ved=0ahUKEwiO-93v5IuVAxVVTkEAHSx4NSQQ2ZgBCDo
        - text: Nigerian Pidgin
    - contentinfo [ref=e78]:
      - generic [ref=e79]: Nigeria
      - generic [ref=e80]:
        - generic [ref=e81]:
          - link [ref=e82] [cursor=pointer]:
            - /url: https://about.google/?utm_source=google-NG&utm_medium=referral&utm_campaign=hp-footer&fg=1
            - text: About
          - link [ref=e83] [cursor=pointer]:
            - /url: https://www.google.com/intl/en_ng/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1
            - text: Advertising
          - link [ref=e84] [cursor=pointer]:
            - /url: https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1
            - text: Business
          - link [ref=e85] [cursor=pointer]:
            - /url: https://google.com/search/howsearchworks/?fg=1
            - text: How Search works
        - link [ref=e87] [cursor=pointer]:
          - /url: https://ai.google/helpful-tools/?utm_source=googlehpfooter&utm_medium=housepromos&utm_campaign=bottom-footer
          - text: Build, create, and do more with AI tools from Google
        - generic [ref=e88]:
          - link [ref=e89] [cursor=pointer]:
            - /url: https://policies.google.com/privacy?hl=en-NG&fg=1
            - text: Privacy
          - link [ref=e90] [cursor=pointer]:
            - /url: https://policies.google.com/terms?hl=en-NG&fg=1
            - text: Terms
          - button [ref=e94] [cursor=pointer]:
            - generic [ref=e95]: Settings
  - generic:
    - dialog "Before you continue to Google Search":
      - generic [ref=e102]:
        - generic [ref=e104]:
          - img "Google" [ref=e105]
          - generic [ref=e106]:
            - 'button "Language: ‪English‬" [active] [ref=e108] [cursor=pointer]':
              - generic [ref=e109]:
                - img
                - generic [ref=e110]: en
            - link "Sign in" [ref=e111] [cursor=pointer]
        - generic [ref=e112]:
          - heading "Before you continue to Google" [level=1] [ref=e113]
          - generic [ref=e114]:
            - generic [ref=e115]:
              - text: We use
              - link "cookies" [ref=e116] [cursor=pointer]:
                - /url: https://policies.google.com/technologies/cookies?utm_source=ucbs&hl=en-NG
              - text: and data to
              - list [ref=e117]:
                - listitem [ref=e118]: Deliver and maintain Google services
                - listitem [ref=e119]: Track outages and protect against spam, fraud and abuse
                - listitem [ref=e120]: Measure audience engagement and site statistics to understand how our services are used and enhance the quality of those services
            - generic [ref=e121]:
              - text: If you choose to 'Accept all', we will also use cookies and data to
              - list [ref=e122]:
                - listitem [ref=e123]: Develop and improve new services
                - listitem [ref=e124]: Deliver and measure the effectiveness of ads
                - listitem [ref=e125]: Show personalised content, depending on your settings
                - listitem [ref=e126]: Show personalised ads, depending on your settings
              - generic [ref=e127]: If you choose to 'Reject all', we will not use cookies for these additional purposes.
            - generic [ref=e128]: Non-personalised content is influenced by things like the content that you’re currently viewing, activity in your active Search session, and your location. Non-personalised ads are influenced by the content that you’re currently viewing and your general location. Personalised content and ads can also include more relevant results, recommendations and tailored ads based on past activity from this browser, like previous Google searches. We also use cookies and data to tailor the experience to be age-appropriate, if relevant.
            - generic [ref=e129]: Select 'More options' to see additional information, including details about managing your privacy settings. You can also visit g.co/privacytools at any time.
        - generic [ref=e130]:
          - generic [ref=e131]:
            - button "Reject all" [ref=e132] [cursor=pointer]
            - button "Accept all" [ref=e133] [cursor=pointer]
          - link "More options for personalisation settings and cookies" [ref=e135] [cursor=pointer]:
            - generic "More options for personalisation settings and cookies" [ref=e136]: More options
        - generic [ref=e137]:
          - link "Privacy" [ref=e138] [cursor=pointer]:
            - /url: https://policies.google.com/privacy?hl=en-NG&fg=1&utm_source=ucbs
          - generic [ref=e139]: ·
          - link "Terms" [ref=e140] [cursor=pointer]:
            - /url: https://policies.google.com/terms?hl=en-NG&fg=1&utm_source=ucbs
```

# Test source

```ts
  1  | // import playwright module
  2  | import {test, expect} from '@playwright/test';
  3  | 
  4  | // write a test
  5  | test('first manual playwright type script test', async({page})=>{
  6  |     // navigate to URL
  7  |     await page.goto('https://google.com');
  8  |     // search with keyword
> 9  |     await page.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk');
     |                                                          ^ TimeoutError: locator.fill: Timeout 30000ms exceeded.
  10 |     await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  11 |     // click on playlist
  12 |     await page.getByRole('link', { name: 'Playwright by Testers Talk' }).first().click();
  13 |     // validate web page title
  14 |     await expect(page).toHaveTitle('Playwright by Testers Talk ✅ - YouTube')
  15 | });
  16 | 
  17 | 
```