import { test, expect } from '@playwright/test';

/*
This is a test automatically generated when installing and can be used to verify proper installation. The content of the file is not important for now.

The most important thing to do here is see if we can run tests. Ensure that you are in the correct directory 
(i.e. C:/users/luuk/documents/programming/training/test-automation-training/E2E-test-with-playwright).

Running tests can be done by inserting the following command in the terminal in vscode:
npx playwright test ./tests/2-running_tests/2.1-example.spec.ts

You can run all tests with 'npx playwright test'. But for this we only want to run very specific tests.

If you dont see a terminal, then you can issue the command ctrl+shift+` or go to the top menu and click Terminal > New Terminal.


In the terminal you will (hopefully) see that all tests have passed. To see a more detailed overview of the results you can run:
npx playwright show-report

This will open a new tab where the results of the test are outlined. As this is a local server running this, you need to press ctrl+c to shut this process
down and continue testing.

*/

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
