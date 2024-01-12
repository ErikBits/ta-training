import { test, expect } from '@playwright/test';

/*
By default, playwright runs tests in 'headless' mode. This means that we dont get any visual feedback as tester as to how the test is executed. This makes 
execution of tests faster, and this is the way you would integrate such tests in a pipeline for example. 

While debugging can very well be done in --ui mode, and is probably the recommended way to do this, you can also run the tests headed so you can 
follow along with what the tests are doing. We can do this by running the following command:
npx playwright test ./tests/2-running_tests/2.1-example.spec.ts --headed

As these tests are very short, and are automatically cross browser you will see a lot of screens pop up and dissapear shortly after. So long as you see '6 passed' in 
the terminal you can be assured that everything went as expected.
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
  