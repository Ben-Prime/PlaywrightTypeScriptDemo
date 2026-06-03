import { expect, Page } from '@playwright/test';


export class PlaylistPage {
    readonly page: Page;
   

    constructor(page: Page) {
        this.page = page;

        //Elements locators
       
    }

    // Method to perform a search
    async validatePageTitle(title: string) {
       await expect(this.page).toHaveTitle(title);
    }
}