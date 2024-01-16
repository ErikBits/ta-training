import { test, expect } from '@playwright/test';

/*
This test has some missing steps. Fill them in where required to get the test working.

*/

test("test login functionality", async ({ page }) => {
    await page.goto('http://localhost:3000');

    await page.getByRole("link", { name: "Profile" }).click();

    const unserNameInput = page.getByPlaceholder("Enter username");
    // fill out the missing steps:


    // final assertion to verify we are on the profile page (the automatic redirect after logging in succesfully).
    await expect(page).toHaveTitle('Qualitier Shop - Profile');

    //execute via: npx playwright test ./tests/6-functional_tasks/6.1-login.spec.ts --headed
});

//TIP: add timeouts where necessary to see what is going on. 