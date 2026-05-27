import { test, expect } from '@playwright/test';

test('Handling mouse actions in PlayWright', async ({ page }) => {
  await page.goto('https://jqueryui.com/selectable/');

  const iframe = page.frameLocator('.demo-frame');

  const selectable = iframe.locator('[class="ui-widget-content ui-selectee"]');

  // left button click
  await selectable.nth(0).click({ button: 'left' });

  // middle button click
  await page.getByText('Draggable').click({ button: 'middle' });

  // right button click
  await page.getByText('Draggable').click({ button: 'right' });

  // hover action
  await page.getByText('Droppable').hover();

  // double click action
  await page.getByText('Droppable').dblclick();
});