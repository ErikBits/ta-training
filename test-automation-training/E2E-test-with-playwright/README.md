# Introduction #
Attempt at showing how test automation works via an actual codebase with a website so you can progam along and get practical examples. 

In the directory `./tests/` you will find all the information and steps and the intent is to guide you along and incrementally increase the level of difficulty. Code comments (in typescript files indicated by `// ...` or block comments `/* ... */`) will explain everything along the way.

# Requirments #

## git ##
Ensure you have forked the repository so you can make commits and save your work along the way. For this git has to be installed.

## installing dependencies ## 
run `npx playwright install` to install latest depedencies before running. This will automatically install dependencies based on the package.json.

# Running tests #
Playwright runs headless by default. This means you wont see what is happening without turning headless off in the playwirght.config.ts file.

## UI mode ##
You can run `npx playwright test --ui` to get a UI mode for debugging and an easier development experience. 

For more information: https://playwright.dev/docs/test-ui-mode

# Notes #


