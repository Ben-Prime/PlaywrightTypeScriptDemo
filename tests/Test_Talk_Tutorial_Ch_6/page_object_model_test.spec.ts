import {expect, test} from '@playwright/test';
import { HomePage } from '../../src/pages/HomePage';
import { ResultPage } from '../../src/pages/ResultPage';
import { PlaylistPage } from '../../src/pages/PlaylistPage';

test('Page Object Model Test in Playwright', async ({ page }) => {
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