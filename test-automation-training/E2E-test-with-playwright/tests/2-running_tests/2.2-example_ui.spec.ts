import { test, expect } from '@playwright/test';

/*
Playwright also includes a great UI mode to more easily view the details of tests, generate testcases via a sort of play back test generation,
and many more features we will touch upon.

Details of UI-mode can be found here: https://playwright.dev/docs/test-ui-mode

To access ui mode we will run:
npx playwright test ./tests/2-running_tests/2.1-example.spec.ts --ui


After running this, and executing your test you can visually see the exact steps which were executed to finalize the test along with visual indicators
of when simulated user interaction happened.
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
  