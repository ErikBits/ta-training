import { test, expect } from '@playwright/test';

/*

NOTE: This is not a working testcase. Running this will result in a failed attempt.

While implementing test automation you are likely to come across lists, buttons, links and input fields and other such elements
which you will need to interact with in varying ways. 

In order to interact with these elements, your webdriver needs to find a way to be able to identify what element you are trying to 
access. There are many ways to go about this. One of the easiest ways is to ensure that all elements which could be of use can
be uniquely identfied via an "id" or "test-id". I attempted to implement this for all relevant elements on the website, so it will be easy 
to interact with these things.

This is, however, not always a guarantee, and we will be looking at several 'locators' to identify elements here.

It is important to note that you should look to identify elements 'uniquely'. This means that there can be no other element within the DOM
which has the same locator. Say that there are two buttons on a page which do two different things, when instructing your script to
click a button on that page this might lead to unintended results and flaky or inconsistent text execution.

*/


//use the varying selectors to explain what all this can do.
test('element selectors showcase', async ({ page }) => {

    /* XPATH:
    The most basic selector is XPath. This can be used to navigate through elements in an XML document. It uses
    "path-like" syntax to identify nodes. You can select any element via XPath, and you can easily check if your selector
    is working in the browser console via `$x('//*[@attribute="attribute-name"]'). For more information: https://www.w3schools.com/xml/xpath_syntax.asp

    For example, if we are on the login page we can verify in the browser console that the submit button is present via:
    `$x('//*[@data-testid="login-submit"]').

    While playwright focusses on other selectors, XPath is very common with different tools (i.e. Selenium), so it will be useful to learn this
    so you can use other tools more easily as well.

    Some examples of selecting by xpath can be found here. For identifying specific options you can always ask google for help!

    Playwright automatically detects whether you are using an xpath or css selector when using an XPath or css locator, but you could be more specific and specify
    page.locator('css=') or page.locator('xpath=') if you want extra clarity in your code.
    */

    await page.locator('//button[text()="Submit"]'); //select a button which has the text 'Submit'
    await page.locator('//input[@placeholder="Enter your name"]'); //select an input field by the placeholder
    await page.locator('//a[@href="/about"]'); //select a link (<a> element) by its href attribute (where it links to)
    await page.locator('//div[@class="login-wrapper"]') //get a div based on the class name

    /* CSS

    Cascading Style Sheets (CSS) is used for styling a document. The only thing I will explain about it here is that many frameworks
    (this project uses Tailwind CSS) use class names to identify which styling you want to apply to which elements. Therefore,
    you can use these classes which frontend developers would use to identify elements as well for your test automation.

    For example, when you inspect a button on the web app you can see that I added the class "btn btn-green" to the button elements
    so it looks like a green button. We can use this to select the element.

    */
    await page.locator('btn btn-green'); //select the item with classes btn and btn-green


    /*
    Playwright offers many abstractions which allows you to find elements easier without having to deal with XPath's. And it is
    best to rely on these primarily, only using xpath or css selectors when the element cannot be uniquely identified without it. 
    Note that these are mostly playwright specific, so might not always translate when using different tools for your test automation.

    Playwright uses auto-waiting and retrying when using these locators, so there is no need to add explicit or implicits waits
    to identify elements. Only use waits (or timeouts) when constructing your tests and you need to see how your testcase if progressing.

    Practical examples of the locators include (with a link to more detailed explanations and uses):
    */

    //getByTestId() - https://playwright.dev/docs/api/class-page#page-get-by-test-id
    // for this project I ensured that the important buttons have data-testid attributes for easy identification
    await page.getByTestId('login-submit');

    //getByRole() - https://playwright.dev/docs/api/class-page#page-get-by-role
    await page.getByRole('button', { name: 'Sign in' });
    await page.getByRole('heading', { name: 'Please Log in'});

    //getByLabel() - https://playwright.dev/docs/api/class-page#page-get-by-label
    // labels are often used in forms and are the text which you will see on screen.
    await page.getByLabel('Username');

    //getByPlaceholder() - https://playwright.dev/docs/api/class-page#page-get-by-placeholder
    await page.getByPlaceholder('Enter username');

    //getByText() - https://playwright.dev/docs/api/class-page#page-get-by-text
    // find an element by substring, exact string or regex (regular expressions).
    await page.getByText('Safety Goggles');

    /*
    there are other locator methods offered by playwright, however these are not as prevalent. Their use
    and description can be found here: https://playwright.dev/docs/locators and here https://playwright.dev/docs/other-locators. This link also offers
    more information on the locators listed above. 
    */

});