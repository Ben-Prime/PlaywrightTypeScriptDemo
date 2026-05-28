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
- generic [ref=e2]:
  - banner [ref=e4]:
    - generic [ref=e6]:
      - generic [ref=e7]:
        - button "Guide" [ref=e9] [cursor=pointer]
        - generic [ref=e11]:
          - link "YouTube Home" [ref=e12] [cursor=pointer]:
            - /url: /
          - generic [ref=e16]: NG
        - button "Skip navigation" [ref=e20] [cursor=pointer]:
          - generic [ref=e21]: Skip navigation
      - generic [ref=e25]:
        - search [ref=e26]:
          - generic [ref=e27]:
            - combobox "Search" [expanded] [ref=e30]
            - button "Search" [ref=e31] [cursor=pointer]
        - generic [ref=e34]:
          - button "Search with your voice" [ref=e36] [cursor=pointer]
          - tooltip "tooltip"
  - navigation [ref=e47]
  - main [ref=e49]:
    - generic [ref=e56]:
      - generic [ref=e72]:
        - heading "Testers Talk" [level=1] [ref=e74]
        - generic [ref=e75]:
          - group [ref=e76]:
            - generic [ref=e77]: "@testerstalk"
          - generic [ref=e78]: •
          - group [ref=e79]:
            - generic "29.9 thousand subscribers" [ref=e80]: 29.9K subscribers
            - generic [ref=e81]: •
            - generic [ref=e82]: 593 videos
        - generic [ref=e84] [cursor=pointer]:
          - generic [ref=e85]: Hi Friends Welcome to Testers Talk channel, Myself Bakkappa N. I have been working as QA SDET Automation Test Lead over a almost decade. I like to share my knowledge & experience through this channel. Support this channel by Subscribing, Liking and sharing with friends and colleagues.
          - button "Description. Hi Friends Welcome to Testers Talk channel, Myself Bakkappa ...tap for more." [ref=e86]:
            - generic [ref=e87]: ...more
        - generic [ref=e89]:
          - link "linkedin.com/groups/10393547" [ref=e92] [cursor=pointer]:
            - /url: https://www.youtube.com/redirect?event=channel_header&redir_token=QUFFLUhqa0RMZWx6azZBTmtId0xMc0dDZWJIaEpWM0lVd3xBQ3Jtc0tsajkxQkJUMy1mSGtBUmtfU05mbXZrYWtRN25URFVmQV9Pa3otWkRheU1Jc2VMbGxwcE5malE5UWlUM0ZOQTYxUjVvbU5DaXFtblVxamgxV29Wcy1SUHFkQUJVd3RjNk1OM0lCNHZybkhhTDBKcGFTRQ&q=https%3A%2F%2Fwww.linkedin.com%2Fgroups%2F10393547%2F
          - button "and 3 more links" [ref=e95] [cursor=pointer]
        - button "Subscribe" [ref=e99] [cursor=pointer]:
          - generic [ref=e100]: Subscribe
      - tablist [ref=e107]:
        - tablist [ref=e111]:
          - tab "Home" [selected] [ref=e112] [cursor=pointer]:
            - generic [ref=e113]: Home
          - tab "Videos" [ref=e114] [cursor=pointer]:
            - generic [ref=e115]: Videos
          - tab "Shorts" [ref=e116] [cursor=pointer]:
            - generic [ref=e117]: Shorts
          - tab "Live" [ref=e118] [cursor=pointer]:
            - generic [ref=e119]: Live
          - tab "Playlists" [ref=e120] [cursor=pointer]:
            - generic [ref=e121]: Playlists
          - tab "Posts" [ref=e122] [cursor=pointer]:
            - generic [ref=e123]: Posts
          - button "Search" [ref=e127] [cursor=pointer]
    - generic [ref=e134]:
      - generic [ref=e141]:
        - generic [ref=e142]:
          - heading "#1 Playwright Automation Using TypeScript Full Course 2026 | Playwright TypeScript Beginner Tutorial 8 hours, 55 minutes" [level=3] [ref=e143]:
            - link "#1 Playwright Automation Using TypeScript Full Course 2026 | Playwright TypeScript Beginner Tutorial" [ref=e144] [cursor=pointer]:
              - /url: /watch?v=788GvvcfwTY
          - generic [ref=e147]:
            - generic [ref=e148]: 173,899 views
            - generic [ref=e149]: •1 year ago
        - generic [ref=e150]:
          - generic [ref=e152]:
            - text: "Playwright Automation Using TypeScript Full Course | Playwright TypeScript Beginner Tutorials: Playwright enables reliable end-to-end testing for modern web apps. Playwright is an open-source automation library for browser testing. Playwright provides the ability to automate browser tasks in Chromium, Firefox and WebKit with a single API 🔥 Playwright with TypeScript GitHub -"
            - link "https://github.com/BakkappaN/Playwrig..." [ref=e153] [cursor=pointer]:
              - /url: https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbHBCRTY4R3VSSWtMQzAwWGpScmxCM2FGMUJSQXxBQ3Jtc0tsemxMMFUtMlRWTDB2MUJQZVBTdG5McTZ5ZGlHMmlvcmdyZWpkNnhWbU8tTTNnZDFDRlQ2cE1HaWM4dVhaNlNnR1o2X0g4ZURGbDVhbnl5T0ZzdmpYM09jTDJqbjF6SFRLdjZYT05vNWg2czk0N0ZaRQ&q=https%3A%2F%2Fgithub.com%2FBakkappaN%2FPlaywrightTypeScriptTutorialFullCourse
            - text: 🔥 Playwright Documentation -
            - link "https://playwright.dev/docs/intro" [ref=e154] [cursor=pointer]:
              - /url: https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqa1dtUUxxZG0temVyRU04MVRYRjhnMVdvQ05rd3xBQ3Jtc0ttbm9IQ3NxNHY1dnFaZEw5VVR5Y2paZ0lib3R1WkZWZmYxMUhLUjRfNERGNVBmMFN0dkJ1eDNNenpkaUpBa1l3emVRMl9kQTlVZlNLU0k2alp4R1BqTUhpT0tJUkF3dkdyRGdjeXl2SW1QMS10SmVNWQ&q=https%3A%2F%2Fplaywright.dev%2Fdocs%2Fintro
            - text: "** FREE YouTube Full Courses ** ========================== 🔊 Playwright with JavaScript Tutorial Full Course -"
            - link "https://bit.ly/playwright-tutorial-au..." [ref=e155] [cursor=pointer]:
              - /url: https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbUxMQ2NuTjIxaWNIcTJHU2x0R2RnLTBCUVQwUXxBQ3Jtc0tuVDZncjdSajNjeTI2cHdJdW1qVkNobG5oM3BrdWk0VW94QklVSUplMUozWXpqMGszTlNmS19BdGJUMDBUTmpVaGt4TUlJS3FxYnliTjk4MkI2Qm1JTXl5eFRDSnJ1SUJyRHRnSHhHUXdsT1BfblJ4NA&q=https%3A%2F%2Fbit.ly%2Fplaywright-tutorial-automation-testing
            - text: 🔊 Playwright API Testing Tutorial -
            - link "https://bit.ly/playwright-api-testing..." [ref=e156] [cursor=pointer]:
              - /url: https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbXdDM2J1eThJLVhvSHVKSlI2OEEwUWVZT1RmZ3xBQ3Jtc0ttQm8zOXBZeDJkR2JjMkZsU0dNUGVCMEh1Y3NtR3g3Z3dBa2NIU215cHBxZ3MxQm5nZWxfQVBMNVFBOXVkN0JHUC1fSTVfYktFTTA3bUVZamVTNlJidzZmRHdpSkZvZzRfajJoc0pwRnpCejBuNEVzaw&q=https%3A%2F%2Fbit.ly%2Fplaywright-api-testing-tutorial
            - text: 🔊 Playwright with Azure DevOps -
            - link "https://bit.ly/playwright-azure-devop..." [ref=e157] [cursor=pointer]:
              - /url: https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbFN6aW9KbkhPWXVUMllCdkthcjk2UTF3b3NxZ3xBQ3Jtc0tuOVIzRlhCbTQweU9BalRTeTlLYVlqR18yUFU1YWlnZWdoU1I4N2hMOHlMaDlxOWRzQzVaVDdXWl94dGxzQ1dYREkwVEdFaVliVF9VRkdYUnZoN2E0ZUlLXzdNNGxfYjNZNTVWTGYwTEt6cjlkckVsbw&q=https%3A%2F%2Fbit.ly%2Fplaywright-azure-devops-tutorial
            - text: 🔊 Playwright tutorial for beginners -
            - link "https://bit.ly/Playwright-Tutorial-Fo..." [ref=e158] [cursor=pointer]:
              - /url: https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbEw5b0kxZmYxOTJxNy1uVFlJNXpkZldXS1p5Z3xBQ3Jtc0tucGxoQk4tQm10eUdTd2RfdE1WMDlIZkRvdk9HYldvd3hsaVZXWGl1cUluR1dWd0dUWFVOZ0FrcnhNMndUYlVyd1BCTlVUVk9OVDYyYnloVjdRM0d6cS1wQjhzUlo1QnQ3LXhwY2JtUkNVZjA1eW1jMA&q=https%3A%2F%2Fbit.ly%2FPlaywright-Tutorial-For-Beginners
            - text: 🔊 Cypress Tutorial Full Course -
            - link "https://bit.ly/cypress-automation-tes..." [ref=e159] [cursor=pointer]:
              - /url: https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbURzWXloME9DZGwybklOd1YxQkZPT0ZlUTNfUXxBQ3Jtc0tsT3BJOWlIN1hUUjBzNGp4QmVCMDRWbVFDTEIwNXZCMmdoMTJtejZfTV9JU2tSbVVVZnRzbXJqVFpqa2FCMTR4bmtTaGN5MUhWOXhRYWpnbkxqRjdnMzBmQkxEWGo3ZkNzMncyNDFVRTA0N3N2TmV3RQ&q=https%3A%2F%2Fbit.ly%2Fcypress-automation-testing-tutorial
            - text: 🔊 JavaScript Tutorial Full Course -
            - link "https://bit.ly/javascript-tutorial-fo..." [ref=e160] [cursor=pointer]:
              - /url: https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqa0EyLU1veGEzYkt1eXdEeXJlYXNGQXVOeGJoUXxBQ3Jtc0ttenBGMk5EZTdNZFVVaE1DSE12TnhsNUp1aGlLRUpXVXBEN01IbUFjWWo1TGZPamJRMFZ4TGhMT1VIakVlU0o1NVBtSFFLV282REFERll0d3FlSV9IZlBqWnNvNzNfYkpqU04yMkV1Qm9XdjVMOWlMVQ&q=https%3A%2F%2Fbit.ly%2Fjavascript-tutorial-for-beginners
            - text: 🔊 API Testing Tutorial Full Course -
            - link "https://bit.ly/api-testing-tutorial-f..." [ref=e161] [cursor=pointer]:
              - /url: https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqa2RMdExRdTVuRVhFQXluRVI5SHM2MkNEOVppZ3xBQ3Jtc0trY2w4ajFVVW4xVzRqZ0d3YmNUeFpxMWswdWVhVXp0UDhjLXphei1VLVpzRExEb1Z5WFFvWERWYkJEN0ZHRjJ0cmVNOE1kUWtZeWZ1VldqcTVHaEh1OFpHNVhSUFF5X25xS0s0bF82NDBNWEt3Y2dkTQ&q=https%3A%2F%2Fbit.ly%2Fapi-testing-tutorial-full-course
            - text: 🔊 Rest Assured API Testing Tutorial Full Course -
            - link "https://bit.ly/rest-assured-api-testi..." [ref=e162] [cursor=pointer]:
              - /url: https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbmgtLXZnWTB6YU9GQVU1LVd3RWJiazgzMEYxd3xBQ3Jtc0trZ3BTRXppVmtscTFhR3VvemJpU185S2VSQ1J2cUVhRlhIYUt0WUhCdm15by1FXzdCZEZ0R0JuNFJ4bU1ST3BRWjR6WmVxTHZUWmJkS19XX0ZvcUxnVmY0NGI3WEFpc2N1eHZJSF94aU5NNVRnSmNiSQ&q=https%3A%2F%2Fbit.ly%2Frest-assured-api-testing-tutorial
            - text: 🔊 Postman Tutorial Full Course -
            - link "https://bit.ly/api-testing-using-post..." [ref=e163] [cursor=pointer]:
              - /url: https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbHdfZFFnc3pyblBOT083WVZoaHgxNDItSGwzd3xBQ3Jtc0tuNUpXWVh0UEZQcFI3YzlZXzE3dHhVS3JpWkdSZXJVcmt5RklvODQzbTlrY25YX2FfMFgzcVRDYURHSW1JY1FIVE9nR3RmZ0NyWkxYWGFYUmEzU3Ryd05ORndTQW16akx6MzF4X25rREZzRnBFVFhXRQ&q=https%3A%2F%2Fbit.ly%2Fapi-testing-using-postman-tutorial
            - text: 🔊 Specflow Selenium C# Tutorial -
            - link "https://bit.ly/specflow-selenium-csha..." [ref=e164] [cursor=pointer]:
              - /url: https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbWtCa2tIcnRqMlRadzF3dnVsUGdYUkx5Y09pQXxBQ3Jtc0tucDlrSjkxREZMX0RlQ2lEZFpwVDU2QWJaRGhmYkRpaUliSWhTSDEtTXkxOWdxaHJNWXcyUVJwcU1admZXMjlWQmwzWnFzR0ZfeTIweF9oS2pUczBFVERxRjBpRDhZZEI2MzFhazdVeFZQUllYbzJlSQ&q=https%3A%2F%2Fbit.ly%2Fspecflow-selenium-csharp-tutorial
            - text: 🔊 Selenium C# .NET NUnit Tutorial -
            - link "https://youtu.be/utfaE9Nv1FY" [ref=e165] [cursor=pointer]:
              - /url: /watch?v=utfaE9Nv1FY
            - text: "Chapters 00:00 Playwright with TypeScript Tutorial Full Course 00:40 Playwright TypeScript GitHub Repository 01:17 Playwright with TypeScript Chapter01 02:09 What is Playwright? 10:32 Playwright Architecture 13:00 Playwright vs Cypress vs Selenium WebDriver 18:06 Softwares required playwright testing 19:35 Download & Install NodeJS 22:04 Download & Install VS Code 23:47 Setup Playwright TypeScript using VS Code 43:21 Run, Debug & Filter Playwright Tests 47:20 Install Playwright TypeScript using Command/Terminal 55:17 Record Playwright Test using VS Code 01:02:13 Run Playwright tests on Chrome, Edge & Firefox browsers 01:07:34 Generate readable playwright html test report 01:14:49 Commonly used playwright terminologies 01:20:49 Write first playwright typescript test & pick locator 01:41:31 Record at Cursor in playwright 01:53:20 Execute specific spec in playwright typescript 01:57:13 Run playwright typescript test on headless mode 02:00:40 Run playwright typescript test on headed mode 02:03:13 Run playwright test on chrome, edge, firefox using cmd 02:09:04 Record playwright test using Codegen 02:16:20 Playwright with TypeScript Chapter02 02:16:52 Capture screenshots in playwright typescript 02:32:30 Attach screenshot into playwright test report 02:39:51 Locators in playwright typescript 03:15:15 Hooks in playwright typescript 03:30:07 Selecting & validating dropdown options in playwright typescript 03:43:52 Handling iframe playwright & drag and drop in playwright 03:56:25 Mouse actions in playwright typescript 04:10:25 Keyboard actions in playwright typescript 04:23:00 Selecting date field value in playwright typescript 04:42:00 playwright typescript assertions - hard & soft 05:11:45 Watch mode in playwright 05:15:41 Playwright UI Mode 05:25:20 Trace Viewer in playwright typescript 05:37:02 Playwright with TypeScript Chapter03 05:37:39 Playwright annotations - skip & only 05:44:05 Group & execute tests in playwright typescript 05:50:40 Tags in Playwright TypeScript 05:58:03 Repeat playwright test execution 06:01:24 Automatically retry/rerun failed test in playwright 06:07:42 Parameterize tests in playwright typescript 06:16:00 Visual Testing or Visual comparison in playwright typescript 06:34:01 Timeouts in playwright 06:54:05 Playwright with TypeScript Chapter04 06:54:45 tsconfig.json file in playwright typescript 07:01:30 Browser context in playwright 07:11:54 Execute only last failed tests in playwright 07:19:49 Handling alerts/popups in playwright 07:40:41 Playwright test reports - html report, json report, junit report etc. 08:00:26 Recording video of test execution in playwright 08:03:04 Parallel/parallelism test execution in playwright typescript 08:09:56 Integrating allure report with playwright 08:19:50 textContent(), innerText(), getAttribute() in playwright 08:31:09 Iterating matching elements in playwright 08:46:46 Handling checkbox & radion buttons in playwright Tags: playwright tutorial,playwright automation tutorial,playwright testing tutorial,microsoft playwright tutorial,playwright test automation,introduction to playwright,playwright automation javascript,playwright with javascript,playwright typescript tutorial, playwright typescript automation tutorial Hashtags:"
            - link "#Playwright" [ref=e166] [cursor=pointer]:
              - /url: /hashtag/playwright
            - link "#TypeScript" [ref=e167] [cursor=pointer]:
              - /url: /hashtag/typescript
            - link "#JavaScript" [ref=e168] [cursor=pointer]:
              - /url: /hashtag/javascript
            - link "#PlaywrightTypeScript" [ref=e169] [cursor=pointer]:
              - /url: /hashtag/playwrighttypescript
            - link "#PlaywrightJavaScript" [ref=e170] [cursor=pointer]:
              - /url: /hashtag/playwrightjavascript
            - link "#PlaywrightTesting" [ref=e171] [cursor=pointer]:
              - /url: /hashtag/playwrighttesting
            - link "#PlaywrightTutorial" [ref=e172] [cursor=pointer]:
              - /url: /hashtag/playwrighttutorial
            - link "#PlaywrightAutomation" [ref=e173] [cursor=pointer]:
              - /url: /hashtag/playwrightautomation
            - link "#AutomationTesting" [ref=e174] [cursor=pointer]:
              - /url: /hashtag/automationtesting
            - link "#TestAutomation" [ref=e175] [cursor=pointer]:
              - /url: /hashtag/testautomation
            - link "#Selenium" [ref=e176] [cursor=pointer]:
              - /url: /hashtag/selenium
            - link "#Cypress" [ref=e177] [cursor=pointer]:
              - /url: /hashtag/cypress
            - link "#QA" [ref=e178] [cursor=pointer]:
              - /url: /hashtag/qa
            - link "#SDET" [ref=e179] [cursor=pointer]:
              - /url: /hashtag/sdet
            - link "#SoftwareTesting" [ref=e180] [cursor=pointer]:
              - /url: /hashtag/softwaretesting
          - button "Read more" [ref=e181] [cursor=pointer]:
            - link "Read more" [ref=e183]:
              - /url: /watch?v=788GvvcfwTY
      - generic [ref=e187]:
        - generic [ref=e189]:
          - heading "Full Course Tutorials" [level=2] [ref=e190]:
            - link "Full Course Tutorials" [ref=e193] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e194]: Full Course Tutorials
          - button "View all" [ref=e200] [cursor=pointer]:
            - generic [ref=e201]: View all
        - generic [ref=e209]:
          - generic [ref=e211] [cursor=pointer]:
            - link [ref=e212]:
              - /url: /watch?v=788GvvcfwTY&list=PLUeDIlio4THEXmQxNvKmdDxAVloGTHXMr
              - generic [ref=e224]: 111 videos
            - generic [ref=e227]:
              - heading "Playwright TypeScript by Testers Talk ✅" [level=3] [ref=e228]:
                - link "Playwright TypeScript by Testers Talk ✅" [ref=e229]:
                  - /url: /watch?v=788GvvcfwTY&list=PLUeDIlio4THEXmQxNvKmdDxAVloGTHXMr
              - generic [ref=e231]:
                - group [ref=e232]:
                  - link "Testers Talk" [ref=e235]:
                    - /url: /@testerstalk
                  - generic [ref=e236]: •
                  - link "Playlist" [ref=e239]:
                    - /url: /@testerstalk
                - group [ref=e240]:
                  - link "View full playlist" [ref=e243]:
                    - /url: /playlist?list=PLUeDIlio4THEXmQxNvKmdDxAVloGTHXMr
          - generic [ref=e245] [cursor=pointer]:
            - link [ref=e246]:
              - /url: /watch?v=2poXBtifpzA&list=PLUeDIlio4THFSOUcVo_Cfam8I_IO483mV
              - generic [ref=e258]: 82 videos
            - generic [ref=e261]:
              - heading "Playwright JavaScript by Testers Talk☑️" [level=3] [ref=e262]:
                - link "Playwright JavaScript by Testers Talk☑️" [ref=e263]:
                  - /url: /watch?v=2poXBtifpzA&list=PLUeDIlio4THFSOUcVo_Cfam8I_IO483mV
              - generic [ref=e265]:
                - group [ref=e266]:
                  - link "Testers Talk" [ref=e269]:
                    - /url: /@testerstalk
                  - generic [ref=e270]: •
                  - link "Playlist" [ref=e273]:
                    - /url: /@testerstalk
                - group [ref=e274]:
                  - link "View full playlist" [ref=e277]:
                    - /url: /playlist?list=PLUeDIlio4THFSOUcVo_Cfam8I_IO483mV
          - generic [ref=e279] [cursor=pointer]:
            - link [ref=e280]:
              - /url: /watch?v=lM-lqPun9P8&list=PLUeDIlio4THF3rnYZ63qkbHwMTXiG67vz
              - generic [ref=e292]: 24 videos
            - generic [ref=e295]:
              - heading "Playwright API Testing by Testers Talk☑️" [level=3] [ref=e296]:
                - link "Playwright API Testing by Testers Talk☑️" [ref=e297]:
                  - /url: /watch?v=lM-lqPun9P8&list=PLUeDIlio4THF3rnYZ63qkbHwMTXiG67vz
              - generic [ref=e299]:
                - group [ref=e300]:
                  - link "Testers Talk" [ref=e303]:
                    - /url: /@testerstalk
                  - generic [ref=e304]: •
                  - link "Playlist" [ref=e307]:
                    - /url: /@testerstalk
                - group [ref=e308]:
                  - link "View full playlist" [ref=e311]:
                    - /url: /playlist?list=PLUeDIlio4THF3rnYZ63qkbHwMTXiG67vz
          - generic [ref=e313] [cursor=pointer]:
            - link [ref=e314]:
              - /url: /watch?v=oJV5whmzfZI&list=PLUeDIlio4THEbdE2jWyBBxkWqjk4JmHHq
              - generic [ref=e326]: 41 videos
            - generic [ref=e329]:
              - heading "Cypress by Testers Talk☑️" [level=3] [ref=e330]:
                - link "Cypress by Testers Talk☑️" [ref=e331]:
                  - /url: /watch?v=oJV5whmzfZI&list=PLUeDIlio4THEbdE2jWyBBxkWqjk4JmHHq
              - generic [ref=e333]:
                - group [ref=e334]:
                  - link "Testers Talk" [ref=e337]:
                    - /url: /@testerstalk
                  - generic [ref=e338]: •
                  - link "Playlist" [ref=e341]:
                    - /url: /@testerstalk
                - group [ref=e342]:
                  - link "View full playlist" [ref=e345]:
                    - /url: /playlist?list=PLUeDIlio4THEbdE2jWyBBxkWqjk4JmHHq
          - generic [ref=e347] [cursor=pointer]:
            - link [ref=e348]:
              - /url: /watch?v=ACUMZ3OkExQ&list=PLUeDIlio4THFLrS29tJnP9yz-QKhn4mdB
              - generic [ref=e360]: 38 videos
            - generic [ref=e363]:
              - heading "JavaScript by Testers Talk☑️" [level=3] [ref=e364]:
                - link "JavaScript by Testers Talk☑️" [ref=e365]:
                  - /url: /watch?v=ACUMZ3OkExQ&list=PLUeDIlio4THFLrS29tJnP9yz-QKhn4mdB
              - generic [ref=e367]:
                - group [ref=e368]:
                  - link "Testers Talk" [ref=e371]:
                    - /url: /@testerstalk
                  - generic [ref=e372]: •
                  - link "Playlist" [ref=e375]:
                    - /url: /@testerstalk
                - group [ref=e376]:
                  - link "View full playlist" [ref=e379]:
                    - /url: /playlist?list=PLUeDIlio4THFLrS29tJnP9yz-QKhn4mdB
          - generic [ref=e381] [cursor=pointer]:
            - link [ref=e382]:
              - /url: /watch?v=QKBa8lt5Wfo&list=PLUeDIlio4THGaSQ_s5WFc2Mo7Ikne2kA5
              - generic [ref=e394]: 36 videos
            - generic [ref=e397]:
              - heading "API Testing by Testers Talk☑️" [level=3] [ref=e398]:
                - link "API Testing by Testers Talk☑️" [ref=e399]:
                  - /url: /watch?v=QKBa8lt5Wfo&list=PLUeDIlio4THGaSQ_s5WFc2Mo7Ikne2kA5
              - generic [ref=e401]:
                - group [ref=e402]:
                  - link "Testers Talk" [ref=e405]:
                    - /url: /@testerstalk
                  - generic [ref=e406]: •
                  - link "Playlist" [ref=e409]:
                    - /url: /@testerstalk
                - group [ref=e410]:
                  - link "View full playlist" [ref=e413]:
                    - /url: /playlist?list=PLUeDIlio4THGaSQ_s5WFc2Mo7Ikne2kA5
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
  12 |     await page.waitForLoadState('domcontentloaded');
  13 |   }
  14 | 
  15 |   await page.getByPlaceholder('Search').first().click();
  16 |   await page.getByPlaceholder('Search').first().fill('playwright by testers talk ');
  17 |   await page.getByRole('button', { name: 'Search', exact: true }).click();
  18 |   await page.getByText('Playwright by Testers Talk ✅').first().click();
  19 |   await page.locator('video').first().click();
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
  32 |     await page.waitForLoadState('domcontentloaded');
  33 |   }
> 34 |   expect(true).toBe(false);
     |                ^ Error: expect(received).toBe(expected) // Object.is equality
  35 | });
```