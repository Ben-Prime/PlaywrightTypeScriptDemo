import { test } from '@playwright/test';
import { HomePage } from '../../src/pages/HomePage';
import { ResultPage } from '../../src/pages/ResultPage';
import { PlaylistPage } from '../../src/pages/PlaylistPage';

test('Page Object Model Test in Playwright', async ({ page }) => {
    
    // setting the viewport size to 1280x551 at test level to ensure it applies to all tests and is not overridden by any project-level settings
    await page.setViewportSize({ width: 1280, height: 551 }); 

    console.log('Running test with TypeScript version:', process.version);
    console.log('Test excecution started...');
    // create object of home page
    const homePage = new HomePage(page);
    await homePage.goToURL();
    await homePage.searchWithKeyword(process.env.SEARCH_KEYWORD as string);

    // create object of result page
    const resultPage = new ResultPage(page);
    await resultPage.clickOnPlaylist(process.env.SEARCH_KEYWORD as string);

    // create object of playlist page
    const playlistPage = new PlaylistPage(page);
    await playlistPage.validatePageTitle('#1 Playwright Tutorial Full Course 2026 | Playwright Testing Tutorial - YouTube');
});