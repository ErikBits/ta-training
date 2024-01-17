import { test, expect } from '@playwright/test';

/*
This test fails when you run it. Use the UI debugging mode to find out what is going wrong and try to fix it!

Run: `npx playwright test ./tests/7-using_UI_mode/7.2-debugging_tests.spec.ts --debug
*/


test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByTestId('profile-link').click();
  await page.getByTestId('username-input').fill('John Doe');
  await page.getByTestId('password-input').fill('password');
  await page.getByTestId('user-details').fill('Straat 10');
  await page.getByTestId('user-details').selectOption('3');
  await page.getByTestId('user-details').fill('9999AA');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByTestId('products-link').click();
  await page.getByTestId('profile-link').click();
  await expect(page.getByTestId('user-details-address')).toHaveValue('Straat 10');
  await expect(page.getByTestId('user-details-country')).toHaveValue('3');
  await expect(page.getByTestId('user-details-postal-code')).toHaveValue('9999AA');
});

//TIP: use F10 or the button 'Step Over' to continue step by step.