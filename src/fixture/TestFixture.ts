import { test as base } from '@playwright/test';
import { PlaylistPage } from '../pages/PlaylistPage';
import { ResultPage } from '../pages/ResultPage';
import { HomePage } from '../pages/HomePage';
import { loadTestData } from '../utils/JSONHelper';
import { TestData } from '../interface/Module1TestData.interface';

export const test = base.extend<{
    saveLogs: void;
    homePage: HomePage;
    resultPage: ResultPage;
    playlistPage: PlaylistPage;
    testData: TestData;
}>({
    saveLogs: [async ({ }, use) => {
        console.log('Global beforeEach is running...');

        await use();

        console.log('Global afterEach is running...');
    },
    { auto: true }],
    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        await use(homePage);
    },
    resultPage: async ({ page }, use) => {
        const resultPage = new ResultPage(page);
        await use(resultPage);
    },
    playlistPage: async ({ page }, use) => {
        const playlistPage = new PlaylistPage(page);
        await use(playlistPage);
    },
    testData: async ({ }, use) => {
        const data = await loadTestData();
        await use(data);
    }
});

export { expect } from '@playwright/test';