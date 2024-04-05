# Introduction #
Attempt at showing how test automation works via an actual codebase with a website so you can progam along and get practical examples. 

In the directory `./tests/` you will find all the information and steps and the intent is to guide you along and incrementally increase the level of difficulty. Code comments (in typescript files indicated by `// ...` or block comments `/* ... */`) will explain everything along the way.

Where I think it is useful to know some stuff, I have added some tips to the bottom of the page. Ideally you would try to figure it out yourself before accessing the tips.

# Requirments #

## git ##
Ensure you have forked the repository so you can make commits and save your work along the way. For this git has to be installed.

## Node ##
Ensure that node and npm are installed: https://nodejs.org/en/download

## installing dependencies ## 
run `npx playwright install` to install latest depedencies before running. This will automatically install dependencies based on the package.json.

# Running tests #
Ensure the website is up and running. Only then will the tests do anything. Refer to the README in the base directory for more information.

## Running tests from the command line ##
Playwright runs headless by default. This means you wont see what is happening without turning headless off in the playwirght.config.ts file. Running tests in headed mode can be done by adding the suffix `--headed` when running the tests from the command line.

## Running tests from VS Code ##
NOTE: Requires a plugin I think -> have not researched this.

## Running tests from Playwright UI mode ##
NOTE: Also requires more research from my part

## UI mode ##
You can run `npx playwright test --ui` to get a UI mode for debugging and an easier development experience. 

For more information: https://playwright.dev/docs/test-ui-mode

# Notes #


