import { Locator, Page } from '@playwright/test';


export class ResultPage {
    readonly page: Page;
   

    constructor(page: Page) {
        this.page = page;

        //Elements locators
       
    }

    // Method to perform a search
    async clickOnPlaylist(playlistName: string) {
       await this.page.getByText(playlistName).first().click();
       await this.page.locator('video').first().click();
    }
}