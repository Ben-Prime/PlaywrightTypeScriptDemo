import { Locator, Page } from '@playwright/test';


export class HomePage {
    readonly page: Page;
    readonly searchInput: Locator;

    constructor(page: Page) {
        this.page = page;

        //Elements locators
        this.searchInput = page.getByPlaceholder('Search').first();
    }

    // Method to perform a search
    async goToURL() {
        // Fetch URL based on env.
        if (process.env.TEST_EXECUTION_ENV == 'qa') {
            await this.page.goto(`${process.env.YOUTUBE_URL}`);
            console.log(`Tests are running in ${process.env.TEST_EXECUTION_ENV} env.`)
        } else if (process.env.TEST_EXECUTION_ENV == 'dev') {
            await this.page.goto(`${process.env.YOUTUBE_URL}`);
            console.log(`Tests are running in ${process.env.TEST_EXECUTION_ENV} env.`)
        }else {
            await this.page.goto(`${process.env.YOUTUBE_URL}`);
            console.log(`TEST_EXECUTION_ENV is not set or has an unexpected value. Defaulting to ${process.env.YOUTUBE_URL}`);
        }

        const acceptButton = this.page.locator('button:has-text("Accept all")').first();
        if (await acceptButton.isVisible().catch(() => false)) {
            await acceptButton.click();
            await this.page.waitForLoadState('domcontentloaded');
        }
    }

    async searchWithKeyword(keyword: string) {
        await this.searchInput.click();
        await this.searchInput.fill(keyword);
        await this.searchInput.press('Enter');
    }
}