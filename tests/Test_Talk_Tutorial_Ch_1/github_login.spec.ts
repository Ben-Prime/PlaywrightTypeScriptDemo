import { test, expect } from '@playwright/test';

test('login', async ({ page }) => {

  await test.step('Navigate to URL', async () => {
    await page.goto('https://github.com/login');
  });

  await test.step('Enter username & password', async () => {
    //await page.getByRole('link', { name: 'Sign in' }).click();
    await page.getByRole('textbox', { name: 'Username or email address' }).fill('benprime');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('prime123');
  });

  await test.step('Click on signin', async () => {
    await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  });

  await test.step('Validate error message', async () => {
    await expect(page.getByRole('alert')).toContainText('Incorrect username or password.');
  });

});