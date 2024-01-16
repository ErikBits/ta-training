import { test, expect } from '@playwright/test';

/*
Asynchronous programming ensures that some aspects of a program (the synchronous functions) can be run before other tasks finish (asynchronous). 

For a practical example: say we want to load a page as a user of a webpage. As you see on many websites there are 
loading screens (skeleton screens, https://medium.com/geekculture/what-is-a-skeleton-screen-69e55648891e). This gives feedback to the user 
that the page is working and that they should wait a little before assuming the website is not working.

In this example the loading of the skeleton page is the synchronous task which always has to be finished in completion. Meanwhile, the
asynchronous task is the getting of the necessary information from the database (for the medium example above this would be the posts feed). 

This means that synchronous tasks can be executed before any asychronous code finishes, and the page can later be updated to reflect the 
results of the asynchronous tasks. 
*/

test('has title', async ({ page }) => {
    /*
    Don't quote me on this, but apparently any node.js-based program is inherently asynchronous. For playwright this means that all our main functions 
    will require the `async` tag in its function declaration. Which is, in the end, a good thing. As you saw earlier when executing the tests 
    in the headed mode, many tabs will open at once and close shortly after. This means we are executing these tests in parallel rather than
    that they would have to wait for each other to finish. This decreases the overall testing time.
    */

    await page.goto('https://playwright.dev/');

    /*
    Within a testcase, we do not want certain lines to execute before other ones, as testcases are generally structured in a very specific way.
    For example, this test would fail if we were to check the page title before going to the actual page. 

    Asynchronous statements will return a 'Promise'. If we add the `await` statement before a line of execution, the program will wait for 
    the Promise to be fulfilled. This ensures us to maintain a chronological order within our testcase.

    So: every testcase you write in playwright will have the features of test declaration, async, the page object and await statements.
    */

    await expect(page).toHaveTitle(/Playwright/); 
  });


test('get started link', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    await page.getByRole('link', { name: 'Get started' }).click();

    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  });
