import {test, expect} from '@playwright/test'

import { parse } from 'csv-parse/sync';
import fs from 'fs'; // importing file system
import path from 'path';

type TestRecords = {
    Skill1: string,
    Skill2: string
}

const records = parse(
    fs.readFileSync(path.join(__dirname, '../../test-data/qa/testdata.csv')),
    {
        columns : true,
        skip_empty_lines: true
    }
) as TestRecords[];

for (const record of records) {
    test(`Data driven testing using CSV in Playwright: ${record.Skill1}`, async ({ page }) => {
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
        await page.getByText(record.Skill1 + ' ✅').first().click();
        await page.locator('video').first().click();
        await expect(page.getByRole('link', { name: record.Skill1 + ' ✅' })).toBeVisible();
    });


}