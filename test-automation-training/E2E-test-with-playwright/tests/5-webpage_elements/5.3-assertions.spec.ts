import { test, expect } from '@playwright/test';

/*
NOTE: again, this test also wont work.

After locating elements and performing certain actions, it is likely you would want to verify if simulated user behavior
resulted in the correct response. This is an essential step to the test process, and it is up to you to decide what 
would be the best checks to perform to ensure that the behavior of the app is as expected.

When assertsion fail the test will terminate and be reported test as failure. 

Some examples will be shown below, and more information can be found here: https://playwright.dev/docs/test-assertions
*/

test('test assertion showcase', async ({ page }) => {
    /* To make assertions you call the expect functionwith a value and choose the matcher which reflects the expectation.

    Basic syntax:
    `expect(page.{locator(identifier)}.{matcher(value)});`

    You can plainly assert a condition once, or let playwright use an async function to wait until an expected condition is met
    by adding `await ...`.

    There are many assertions, but a few examples are shown here:
    */

    const locator = page.getByTestId("1"), value = "test", otherValue = "test"; //dummy values
    
    await expect(locator).toBeVisible(); //element is visible
    await expect(locator).toContainText(value); //element contains text
    await expect(page).toHaveTitle(value); //page has title

    /*
    Some assertions do not auto-retry. As pages can show slight inconsistencies in showing information, non-retrying assertions
    could lead to flaky tests. If you do need to retry assertions with these operators, try to use `expect.poll()` or `expect.toPass()`.
    */

    expect(value).toBe(otherValue);
    expect(value).toBeNull();
    expect(value).toBeTruthy(); //anything but negative results like false, 0, or null

    //this function will retry until the set timeout is passed or the assertions passes.
    await expect(async () => {
        const response = await page.request.get('https://localhost:3000/api/users/details');
        expect(response.status()).toBe(200);
    }).toPass();


    // When you want a condition to be the opposite, you can add the .not operator:
    expect(value).not.toContain(otherValue);


    // Soft asserts will mark a test as failed, but do not terminate the test.
    await expect.soft(locator).toHaveText(value); // can be useful if there are things outside of your control or with inconsistent behavior
});