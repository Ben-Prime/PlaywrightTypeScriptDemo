import { test, expect } from '@playwright/test';
import testData from '../../test-data/qa/testdata.json';

// for type safety
type TestData = {
    TestDataSet1: {
        Skill1: string,
        Skill2: string
    },
    TestDataSet2: {
        Skill1: string,
        Skill2: string
    }
}

//convert testData into internal TestData type/object
const typedTestData = testData as TestData;

for (const dataSetName in typedTestData) {
    const skill = typedTestData[dataSetName as keyof TestData];

    test(`Data driven testing using JSON in Playwright: ${skill.Skill1}`, async ({ page }) => {
        //await page.goto(`${process.env.YOUTUBE_URL}`);
        await page.goto(process.env.YOUTUBE_URL as string)

        const acceptButton = page.locator('button:has-text("Accept all")').first();
        if (await acceptButton.isVisible().catch(() => false)) {
            await acceptButton.click();
            await page.waitForLoadState('domcontentloaded');
        }

        await page.getByPlaceholder('Search').first().click();
        await page.getByPlaceholder('Search').first().fill(skill.Skill1);
        await page.getByRole('button', { name: 'Search', exact: true }).click();
        await page.getByText(skill.Skill1 + ' ✅').first().click();
        await page.locator('video').first().click();
        await expect(page.getByRole('link', { name: skill.Skill1 + ' ✅' })).toBeVisible();
    });

}


