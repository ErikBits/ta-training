import { test, expect } from '@playwright/test';

/*
NOTE: this specification would also fail when executing.

In order to simulate behavior you can use playwright methods to perform actions. These are functions you will use often,
as you will likely want to mimic the behavior of a user in certain scenarios.

An overview of some methods can be found below. More details can be found here: https://playwright.dev/docs/input
*/

test('element actions showcase', async ({ page }) => {
    /*
    After using locators to find objects in the DOM, we can perform actions on the objects we get returned.

    It is often more legible to save these DOM objects in a variable and interact with them later, otherwise we code which may be harder to maintain
    and/or read by others.
    */

    //fill() - focus an element and input the entered text.
    const usernameField = await page.getByTestId('username-input'); //get the username field object
    usernameField.fill('admin');

    //check() - check or uncheck a checkbox or radio button.
    const checkbox = await page.getByLabel('I agree to the terms above');
    checkbox.check();

    //selectOption() - selects one or multiple options
    const genderInput = await page.getByTestId("user-details-gender");
    genderInput.selectOption('Male');

    //click()
    const signInButton = await page.getByRole("button", { name: 'Sign in' });
    signInButton.click();

    /* as mentioned, these are the most common ones but there are more operators which can be used in certain niche situations. */

});