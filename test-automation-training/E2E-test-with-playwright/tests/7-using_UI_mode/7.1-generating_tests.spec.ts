/* 
Using codegen you can generate code for tests via a 'recorded' session. 

Try to generate the code for a testcase to verify the log in functionality here. You can 
start a codegen session via:
`npx playwright codegen localhost:3000`

You will get a popup menu and a browser will open with the page. Just perform the log in process like you
normally would, and in the Playwright inspector you will find a code snippet with all the necessary steps.

The bottoms at the top of the browser all you insert assertions. The code should look something like this and should run immediately!

*/

//test generated entirely by codegen
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByTestId('profile-link').click();
  await page.getByTestId('username-input').click(); // these steps are added but are not necessary for code execution.
  await page.getByTestId('username-input').fill('admin');
  await page.getByTestId('password-input').click();
  await page.getByTestId('password-input').fill('a');
  await page.getByTestId('login-submit').click();
  await expect(page.getByRole('heading')).toContainText('You are logged in');
});