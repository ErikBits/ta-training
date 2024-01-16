import { test, expect } from '@playwright/test';

/*
This will be a short test example to show you how to work with the website a little. And what a test
could look like.
*/

test('Verify products page content', async ({ page}) => {
    await page.goto('http://localhost:3000'); // go to the web app

    await page.waitForTimeout(2000); //added waits so we can follow what is going on 

    await page.getByTestId("products-link").click(); // go to the products page

    await expect(page).toHaveTitle("Qualitier Shop - Products"); //verify that we are on the correct page

    //in the current version, the first items cannot differ from the values with which I initialized the database
    // hence we know what to expect on this page
    await expect(page.getByTestId("product-1-name")).toHaveText("Drill"); //select first element from products list and compare its string

    await page.waitForTimeout(2000);

    //run via `npx playwright test ./tests/6-functional_tasks/6.0-verifying_products_page.spec.ts --headed`

});