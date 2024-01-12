import { test, expect } from '@playwright/test';

/* THE SCRIPT
Tests are generally executed from scripts. It is a sequence of instructions intended to be interpreted or carried out by another program. In 
this case we write a set of instructions for playwright to repeatedly execute.
*/

/*
The 'test()' function tells playwright that everything within that code block is an individual test. This creates a new, fresh environment 
for testcases to not have to worry about resetting certain things you interact with on the page.

As can be seen when you hover over the word 'test', there are various options to pass to the function. 
In this case we are passing a title, and declaring a testfunction. 

In javascript functions can be declared with the '=>' notation. We will have a look at the async keyword later.

The function takes the input of the page which is an isolated page instance. This can be used to interact, verify or do other things
with the specific page in the browser. 
*/
test('has title', async ({ page }) => {
    await page.goto('https://playwright.dev/'); //pretty selfexlpanatory. We use the page object to navigate to this link.
  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/); //subsequently we verify that the page has a certain title.

    /*
    In the first step we execute the steps we need to take to get to a certain state. This could be an example of user behavior. 
    In the following step we execute a verification if the behavior led to the expected result: in this instance that we are on the
    correct page.
    */
  });
  

/*
This following example opens a page, clicks a link and verifies that a certain element is on the page.
*/
test('get started link', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    // Click the get started link.
    await page.getByRole('link', { name: 'Get started' }).click();

    // Expects page to have a heading with the name of Installation.
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  });
