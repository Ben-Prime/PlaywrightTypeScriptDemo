# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Test_Talk_Tutorial_Ch_4\alert_popups_test.spec.ts >> Handling Alerts in Playwright
- Location: tests\Test_Talk_Tutorial_Ch_4\alert_popups_test.spec.ts:3:5

# Error details

```
Error: dialog.accept: Protocol error (Page.handleJavaScriptDialog): No dialog is showing
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - navigation [ref=e3]:
      - link "Selenium logo green" [ref=e4] [cursor=pointer]:
        - /url: /
        - img "Selenium logo green" [ref=e6]
      - generic [ref=e17]:
        - list [ref=e18]:
          - listitem [ref=e19]:
            - button "About" [ref=e20] [cursor=pointer]
          - listitem [ref=e21]:
            - link "Downloads" [ref=e22] [cursor=pointer]:
              - /url: /downloads
          - listitem [ref=e23]:
            - link "Documentation" [ref=e24] [cursor=pointer]:
              - /url: /documentation
          - listitem [ref=e25]:
            - link "Projects" [ref=e26] [cursor=pointer]:
              - /url: /projects
          - listitem [ref=e27]:
            - link "Support" [ref=e28] [cursor=pointer]:
              - /url: /support
          - listitem [ref=e29]:
            - link "Blog" [ref=e30] [cursor=pointer]:
              - /url: /blog
          - listitem [ref=e31]:
            - button "English" [ref=e33] [cursor=pointer]
        - button "Search" [ref=e37] [cursor=pointer]:
          - generic [ref=e38]:
            - img [ref=e39]
            - generic [ref=e41]: Search
          - generic [ref=e42]:
            - img [ref=e44]
            - generic [ref=e46]: K
    - alert [ref=e50]:
      - heading "Thank you for joining the Selenium and Appium 2026 Conference. Visit Conference Website for more information!" [level=4] [ref=e51]:
        - text: Thank you for joining the Selenium and Appium 2026 Conference.
        - link "Visit Conference Website for more information!" [ref=e52] [cursor=pointer]:
          - /url: https://seleniumconf.com/
  - generic [ref=e53]:
    - generic [ref=e55]:
      - complementary [ref=e56]:
        - generic [ref=e57]:
          - text: 
          - navigation [ref=e58]:
            - list [ref=e59]:
              - listitem [ref=e60]:
                - link "Documentation" [ref=e61] [cursor=pointer]:
                  - /url: /documentation/
                - list [ref=e62]:
                  - listitem [ref=e63]:
                    - link "Overview" [ref=e64] [cursor=pointer]:
                      - /url: /documentation/overview/
                    - list
                  - listitem [ref=e65]:
                    - link "WebDriver" [ref=e66] [cursor=pointer]:
                      - /url: /documentation/webdriver/
                    - list [ref=e67]:
                      - listitem [ref=e68]:
                        - link "Getting Started" [ref=e69] [cursor=pointer]:
                          - /url: /documentation/webdriver/getting_started/
                        - list
                      - listitem [ref=e70]:
                        - link "Drivers" [ref=e71] [cursor=pointer]:
                          - /url: /documentation/webdriver/drivers/
                        - list
                      - listitem [ref=e72]:
                        - link "Browsers" [ref=e73] [cursor=pointer]:
                          - /url: /documentation/webdriver/browsers/
                        - list
                      - listitem [ref=e74]:
                        - link "Waits" [ref=e75] [cursor=pointer]:
                          - /url: /documentation/webdriver/waits/
                      - listitem [ref=e76]:
                        - link "Elements" [ref=e77] [cursor=pointer]:
                          - /url: /documentation/webdriver/elements/
                        - list
                      - listitem [ref=e78]:
                        - link "Interactions" [ref=e79] [cursor=pointer]:
                          - /url: /documentation/webdriver/interactions/
                        - list [ref=e80]:
                          - listitem [ref=e81]:
                            - link "Navigation" [ref=e82] [cursor=pointer]:
                              - /url: /documentation/webdriver/interactions/navigation/
                          - listitem [ref=e83]:
                            - link "Alerts" [ref=e84] [cursor=pointer]:
                              - /url: /documentation/webdriver/interactions/alerts/
                          - listitem [ref=e85]:
                            - link "Cookies" [ref=e86] [cursor=pointer]:
                              - /url: /documentation/webdriver/interactions/cookies/
                          - listitem [ref=e87]:
                            - link "Frames" [ref=e88] [cursor=pointer]:
                              - /url: /documentation/webdriver/interactions/frames/
                          - listitem [ref=e89]:
                            - link "Print Page" [ref=e90] [cursor=pointer]:
                              - /url: /documentation/webdriver/interactions/print_page/
                          - listitem [ref=e91]:
                            - link "Windows" [ref=e92] [cursor=pointer]:
                              - /url: /documentation/webdriver/interactions/windows/
                          - listitem [ref=e93]:
                            - link "Virtual Authenticator" [ref=e94] [cursor=pointer]:
                              - /url: /documentation/webdriver/interactions/virtual_authenticator/
                      - listitem [ref=e95]:
                        - link "Actions API" [ref=e96] [cursor=pointer]:
                          - /url: /documentation/webdriver/actions_api/
                        - list
                      - listitem [ref=e97]:
                        - link "BiDi" [ref=e98] [cursor=pointer]:
                          - /url: /documentation/webdriver/bidi/
                        - list
                      - listitem [ref=e99]:
                        - link "Support Features" [ref=e100] [cursor=pointer]:
                          - /url: /documentation/webdriver/support_features/
                        - list
                      - listitem [ref=e101]:
                        - link "Troubleshooting" [ref=e102] [cursor=pointer]:
                          - /url: /documentation/webdriver/troubleshooting/
                        - list
                  - listitem [ref=e103]:
                    - link "Selenium Manager" [ref=e104] [cursor=pointer]:
                      - /url: /documentation/selenium_manager/
                  - listitem [ref=e105]:
                    - link "Grid" [ref=e106] [cursor=pointer]:
                      - /url: /documentation/grid/
                    - list
                  - listitem [ref=e107]:
                    - link "IE Driver Server" [ref=e108] [cursor=pointer]:
                      - /url: /documentation/ie_driver_server/
                    - list
                  - listitem [ref=e109]:
                    - link "IDE" [ref=e110] [cursor=pointer]:
                      - /url: /documentation/ide/
                  - listitem [ref=e111]:
                    - link "Test Practices" [ref=e112] [cursor=pointer]:
                      - /url: /documentation/test_practices/
                    - list
                  - listitem [ref=e113]:
                    - link "Legacy" [ref=e114] [cursor=pointer]:
                      - /url: /documentation/legacy/
                    - list
                  - listitem [ref=e115]:
                    - link "About" [ref=e116] [cursor=pointer]:
                      - /url: /documentation/about/
                    - list
      - complementary [ref=e117]:
        - generic [ref=e118]:
          - link " Edit this page" [ref=e119] [cursor=pointer]:
            - /url: https://github.com/SeleniumHQ/seleniumhq.github.io/edit/trunk/website_and_docs/content/documentation/webdriver/interactions/alerts.en.md
            - generic [ref=e120]: 
            - text: Edit this page
          - link " Create documentation issue" [ref=e121] [cursor=pointer]:
            - /url: https://github.com/SeleniumHQ/seleniumhq.github.io/issues/new?title=JavaScript%20alerts,%20prompts%20and%20confirmations
            - generic [ref=e122]: 
            - text: Create documentation issue
          - link " Create project issue" [ref=e123] [cursor=pointer]:
            - /url: https://github.com/seleniumhq/selenium/issues/new
            - generic [ref=e124]: 
            - text: Create project issue
          - link " Print entire section" [ref=e125] [cursor=pointer]:
            - /url: https://www.selenium.dev/_print/documentation/webdriver/interactions/
            - generic [ref=e126]: 
            - text: Print entire section
        - separator [ref=e127]
        - navigation [ref=e129]:
          - list [ref=e130]:
            - listitem [ref=e131]:
              - link "Alerts" [ref=e132] [cursor=pointer]:
                - /url: "#alerts"
            - listitem [ref=e133]:
              - link "Confirm" [ref=e134] [cursor=pointer]:
                - /url: "#confirm"
            - listitem [ref=e135]:
              - link "Prompt" [ref=e136] [cursor=pointer]:
                - /url: "#prompt"
        - separator [ref=e137]
      - main [ref=e138]:
        - navigation "breadcrumb" [ref=e139]:
          - list [ref=e140]:
            - listitem [ref=e141]:
              - link "Documentation" [ref=e142] [cursor=pointer]:
                - /url: https://www.selenium.dev/documentation/
            - listitem [ref=e143]:
              - text: /
              - link "WebDriver" [ref=e144] [cursor=pointer]:
                - /url: https://www.selenium.dev/documentation/webdriver/
            - listitem [ref=e145]:
              - text: /
              - link "Interactions" [ref=e146] [cursor=pointer]:
                - /url: https://www.selenium.dev/documentation/webdriver/interactions/
            - listitem [ref=e147]:
              - text: /
              - link "Alerts" [ref=e148] [cursor=pointer]:
                - /url: https://www.selenium.dev/documentation/webdriver/interactions/alerts/
            - generic [ref=e149]: v4.0
        - generic [ref=e150]:
          - heading "JavaScript alerts, prompts and confirmations" [level=1] [ref=e151]
          - paragraph [ref=e152]: WebDriver provides an API for working with the three types of native popup messages offered by JavaScript. These popups are styled by the browser and offer limited customisation.
          - heading "Alerts" [level=2] [ref=e153]
          - paragraph [ref=e154]: The simplest of these is referred to as an alert, which shows a custom message, and a single button which dismisses the alert, labelled in most browsers as OK. It can also be dismissed in most browsers by pressing the close button, but this will always do the same thing as the OK button. See an example alert.
          - paragraph [ref=e155]: WebDriver can get the text from the popup and accept or dismiss these alerts.
          - tablist [ref=e156]:
            - tab "Java" [selected] [ref=e157] [cursor=pointer]
            - tab "Python" [ref=e158] [cursor=pointer]
            - tab "CSharp" [ref=e159] [cursor=pointer]
            - tab "Ruby" [ref=e160] [cursor=pointer]
            - tab "JavaScript" [ref=e161] [cursor=pointer]
            - tab "Kotlin" [ref=e162] [cursor=pointer]
          - generic [ref=e163]:
            - tabpanel "Java" [ref=e164]:
              - code [ref=e168]:
                - text: import static
                - generic [ref=e169]: org.junit.jupiter.api.
                - text: "Assertions.assertEquals; public class AlertsTest extends BaseTest { @BeforeEach"
              - generic [ref=e171]:
                - generic [ref=e172] [cursor=pointer]: View Complete Code
                - link " View on GitHub" [ref=e173] [cursor=pointer]:
                  - /url: https://github.com/SeleniumHQ/seleniumhq.github.io/blob/trunk//examples/java/src/test/java/dev/selenium/interactions/AlertsTest.java#L36-L41
                  - generic [ref=e174]: 
                  - text: View on GitHub
            - text:   
          - heading "Confirm" [level=2] [ref=e175]
          - paragraph [ref=e176]: A confirm box is similar to an alert, except the user can also choose to cancel the message. See a sample confirm.
          - paragraph [ref=e177]: "This example also shows a different approach to storing an alert:"
          - tablist [ref=e178]:
            - tab "Java" [selected] [ref=e179] [cursor=pointer]
            - tab "Python" [ref=e180] [cursor=pointer]
            - tab "CSharp" [ref=e181] [cursor=pointer]
            - tab "Ruby" [ref=e182] [cursor=pointer]
            - tab "JavaScript" [ref=e183] [cursor=pointer]
            - tab "Kotlin" [ref=e184] [cursor=pointer]
          - generic [ref=e185]:
            - tabpanel "Java" [ref=e186]:
              - code [ref=e190]: "Assertions.assertEquals(\"Slow\", alert.getText()); alert.accept(); } @Test"
              - generic [ref=e192]:
                - generic [ref=e193] [cursor=pointer]: View Complete Code
                - link " View on GitHub" [ref=e194] [cursor=pointer]:
                  - /url: https://github.com/SeleniumHQ/seleniumhq.github.io/blob/trunk//examples/java/src/test/java/dev/selenium/interactions/AlertsTest.java#L131-L138
                  - generic [ref=e195]: 
                  - text: View on GitHub
            - text:   
          - heading "Prompt" [level=2] [ref=e196]
          - paragraph [ref=e197]: Prompts are similar to confirm boxes, except they also include a text input. Similar to working with form elements, you can use WebDriver’s send keys to fill in a response. This will completely replace the placeholder text. Pressing the cancel button will not submit any text. See a sample prompt.
          - tablist [ref=e198]:
            - tab "Java" [selected] [ref=e199] [cursor=pointer]
            - tab "Python" [ref=e200] [cursor=pointer]
            - tab "CSharp" [ref=e201] [cursor=pointer]
            - tab "Ruby" [ref=e202] [cursor=pointer]
            - tab "JavaScript" [ref=e203] [cursor=pointer]
            - tab "Kotlin" [ref=e204] [cursor=pointer]
          - generic [ref=e205]:
            - tabpanel "Java" [ref=e206]:
              - code [ref=e210]: //Wait for the alert to be displayed and store it in a variable wait.until(ExpectedConditions.alertIsPresent()); Alert alert = driver.switchTo().alert(); Assertions.assertEquals("Enter something", alert.getText());
              - generic [ref=e212]:
                - generic [ref=e213] [cursor=pointer]: View Complete Code
                - link " View on GitHub" [ref=e214] [cursor=pointer]:
                  - /url: https://github.com/SeleniumHQ/seleniumhq.github.io/blob/trunk//examples/java/src/test/java/dev/selenium/interactions/AlertsTest.java#L79-L84
                  - generic [ref=e215]: 
                  - text: View on GitHub
            - text:   
          - generic [ref=e216]:
            - text: "Last modified August 14, 2025:"
            - link "Fixing path for code block (c7fcb0099f5)" [ref=e217] [cursor=pointer]:
              - /url: https://github.com/SeleniumHQ/seleniumhq.github.io/commit/c7fcb0099f58ba4d4dd467a8c6667f6130749d82
    - heading "Development Partners" [level=2] [ref=e219]
    - generic [ref=e220]:
      - link "BrowserStack" [ref=e222] [cursor=pointer]:
        - /url: https://www.browserstack.com/automate?utm_campaign=open-source-sponsor&utm_campaigncode=701OW000009sQwVYAU&utm_medium=partnered&utm_source=seleniumorg
        - img "BrowserStack" [ref=e223]
      - link "Sauce Labs" [ref=e225] [cursor=pointer]:
        - /url: https://saucelabs.com/resources/topic-hub/selenium?utm_source=selenium&utm_medium=website&utm_campaign=selenium-sponsorship-fy25
        - img "Sauce Labs" [ref=e226]
      - link "TestMu AI (formerly LambdaTest)" [ref=e228] [cursor=pointer]:
        - /url: https://www.testmuai.com
        - img "TestMu AI (formerly LambdaTest)" [ref=e229]
    - heading "Selenium Level Sponsors" [level=2] [ref=e231]
    - generic [ref=e232]:
      - link "Bright Data" [ref=e234] [cursor=pointer]:
        - /url: https://brightdata.com/?utm_source=brand&utm_campaign=brnd-mkt_partners_selenium
        - img "Bright Data" [ref=e235]
      - link "Applitools" [ref=e237] [cursor=pointer]:
        - /url: https://applitools.com/
        - img "Applitools" [ref=e238]
      - link "Thordata" [ref=e240] [cursor=pointer]:
        - /url: https://www.thordata.com/?ls=waOicIkB&lk=selenium
        - img "Thordata" [ref=e241]
    - generic [ref=e244]:
      - heading "Support the Selenium Project" [level=2] [ref=e245]
      - paragraph [ref=e246]: Learn more or view the full list of sponsors.
      - link "Learn more " [ref=e248] [cursor=pointer]:
        - /url: /sponsors
        - text: Learn more
        - generic [ref=e249]: 
    - contentinfo [ref=e250]:
      - generic [ref=e252]:
        - list [ref=e254]:
          - listitem "Selenium Linkedin" [ref=e255]:
            - link "Selenium Linkedin" [ref=e256] [cursor=pointer]:
              - /url: https://www.linkedin.com/company/4826427/
              - generic [ref=e257]: 
          - listitem "Selenium X" [ref=e258]:
            - link "Selenium X" [ref=e259] [cursor=pointer]:
              - /url: https://x.com/SeleniumHQ
              - generic [ref=e260]: 
          - listitem "Selenium Community YouTube Channel" [ref=e261]:
            - link "Selenium Community YouTube Channel" [ref=e262] [cursor=pointer]:
              - /url: https://www.youtube.com/@SeleniumHQProject/
              - generic [ref=e263]: 
          - listitem "Selenium Mastodon" [ref=e264]:
            - link "Selenium Mastodon" [ref=e265] [cursor=pointer]:
              - /url: https://mastodon.social/@seleniumHQ@fosstodon.org
              - generic [ref=e266]: 
          - listitem "Selenium BlueSky" [ref=e267]:
            - link "Selenium BlueSky" [ref=e268] [cursor=pointer]:
              - /url: https://bsky.app/profile/seleniumconf.bsky.social
              - generic [ref=e269]: 
          - listitem "User mailing list" [ref=e270]:
            - link "User mailing list" [ref=e271] [cursor=pointer]:
              - /url: https://groups.google.com/group/selenium-users
              - generic [ref=e272]: 
          - listitem "SeleniumConf YouTube Channel" [ref=e273]:
            - link "SeleniumConf YouTube Channel" [ref=e274] [cursor=pointer]:
              - /url: https://www.youtube.com/channel/UCbDlgX_613xNMrDqCe3QNEw
              - generic [ref=e275]: 
        - generic [ref=e276]:
          - list [ref=e277]:
            - listitem "Software Freedom Conservancy" [ref=e278]:
              - link "Software Freedom Conservancy" [ref=e279] [cursor=pointer]:
                - /url: mailto:selenium@sfconservancy.org
                - generic [ref=e280]: 
            - listitem "GitHub" [ref=e281]:
              - link "GitHub" [ref=e282] [cursor=pointer]:
                - /url: https://github.com/seleniumhq/selenium
                - generic [ref=e283]: 
            - listitem "Slack" [ref=e284]:
              - link "Slack" [ref=e285] [cursor=pointer]:
                - /url: https://inviter.co/seleniumhq
                - generic [ref=e286]: 
            - listitem "IRC" [ref=e287]:
              - link "IRC" [ref=e288] [cursor=pointer]:
                - /url: https://web.libera.chat/#selenium
                - generic [ref=e289]: 
            - listitem "Developer mailing list" [ref=e290]:
              - link "Developer mailing list" [ref=e291] [cursor=pointer]:
                - /url: https://groups.google.com/g/selenium-developers
                - generic [ref=e292]: 
          - link "Deploys by Netlify" [ref=e293] [cursor=pointer]:
            - /url: https://www.netlify.com
            - img "Deploys by Netlify" [ref=e294]
        - generic [ref=e295]:
          - text: © 2026 Software Freedom Conservancy All Rights Reserved
          - paragraph [ref=e296]:
            - link "About Selenium" [ref=e297] [cursor=pointer]:
              - /url: /about/
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
  18 |     page.waitForEvent('dialog'),
  19 |     page.getByText('See an example alert', { exact: true }).click()
  20 |     ]);
  21 | 
  22 |     console.log(`Alert message is: ${dialog.message()}`);
  23 |     console.log(`Dialog type is: ${dialog.type()}`);
> 24 |     await dialog.accept();
     |                  ^ Error: dialog.accept: Protocol error (Page.handleJavaScriptDialog): No dialog is showing
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