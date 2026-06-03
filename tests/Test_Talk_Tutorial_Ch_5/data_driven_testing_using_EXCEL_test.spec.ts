import { test, expect } from '@playwright/test';
import path from 'path';
import { readExcelFile } from '../../src/utils/ExcelHelper';

const excelFilePath = path.join(__dirname, '../../test-data/qa/TestData.xlsx');

const records = readExcelFile(excelFilePath);

for (const record of records) {

    test(`Data driven testing using JSON in Playwright: ${record.Skill1}`, async ({ page }) => {
        //await page.goto(`${process.env.YOUTUBE_URL}`);
        await page.goto(process.env.YOUTUBE_URL as string)

        const acceptButton = page.locator('button:has-text("Accept all")').first();
        if (await acceptButton.isVisible().catch(() => false)) {
            await acceptButton.click();
            await page.waitForLoadState('domcontentloaded');
        }

        await page.getByPlaceholder('Search').first().click();
        await page.getByPlaceholder('Search').first().fill(record.Skill1);
        await page.getByRole('button', { name: 'Search', exact: true }).click();
        await page.getByText(record.Skill1).first().click();
        await page.locator('video').first().click();
        await expect(page.getByRole('link', { name: record.Skill1})).toBeVisible();
    });

}


