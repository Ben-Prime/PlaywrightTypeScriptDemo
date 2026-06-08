import { test } from '../../src/fixture/TestFixture';

test('Page Object Model Test in Playwright', async ({ page, homePage, resultPage, playlistPage }) => {
    
    // setting the viewport size to 1280x551 at test level to ensure it applies to all tests and is not overridden by any project-level settings
    await page.setViewportSize({ width: 1280, height: 551 }); 

    console.log('Running test with TypeScript version:', process.version);
    console.log('Test excecution started...');

    await homePage.goToURL();
    await homePage.searchWithKeyword(process.env.SEARCH_KEYWORD as string);

    await resultPage.clickOnPlaylist(process.env.SEARCH_KEYWORD as string);

    await playlistPage.validatePageTitle('#1 Playwright Tutorial Full Course 2026 | Playwright Testing Tutorial - YouTube');
});