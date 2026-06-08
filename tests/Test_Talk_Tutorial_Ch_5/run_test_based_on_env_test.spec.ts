import { test } from '../../src/fixture/TestFixture';

test('Run test based on environment in Playwright', async ({ page, homePage, resultPage, playlistPage, testData }) => {

    console.log('Running test with TypeScript version:', process.version);
    console.log('Test excecution started...');

    await homePage.goToURL();
    //await homePage.searchWithKeyword(process.env.SEARCH_KEYWORD as string);
    await homePage.searchWithKeyword(String(testData.Module1TestData?.Skill1));

    await resultPage.clickOnPlaylist(String(testData.Module1TestData?.Skill1));

    //await playlistPage.validatePageTitle('#1 Playwright Tutorial Full Course 2026 | Playwright Testing Tutorial - YouTube');

    console.log(`Skill1 : ${testData.Module1TestData?.Skill1}`);
    console.log(`Skill2 : ${testData.Module1TestData?.Skill2}`);
    console.log(`Skill3 : ${testData.Module1TestData?.Skill3}`);
});