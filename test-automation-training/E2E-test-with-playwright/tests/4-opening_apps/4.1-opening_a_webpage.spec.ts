import { test, expect } from '@playwright/test';

/*
In previous examples we have seen how to open a webpage and verify if we are on the correct page. The first exercise will be for you to do the same. 

For all examples I would recommend executing the tests in headed mode and running only the specific testcase you are working on. 
As the amount of tests will grow very fast it might take a long time for everything to execute. And the headed mode helps you follow along.

To execute specific tests in headed mode use the following command:
`npx playwright .\path\to\test test --headed`

Remember to be in the base directory of the playwright project before you run this command: ./test-automation-training/E2E-test-with-playwright/
Remember also that forward slashes ('/') are important here for the test to execute. Tab completion would lead to backslashes which wont work.

*/

test('Qualitier shop has title', async ({ page }) => {
    
    //fill in the step to go to the local app page

    //and fill in the assertion if we are on the correct page


    await page.waitForTimeout(4000); //I have set a timeout so you can see the actual process

});

/* TIPS

While your browser can automatically resolve the http:// prefix, tests or requests most often can not. If you have trouble accessing the webpage
when just typing inserting "localhost:3000" as the url, then try to add the 'http://' prefix.

Execute this test via:
`npx playwright test ./tests/4-opening_apps/4.1-opening_a_webpage.spec.ts --headed`

*/