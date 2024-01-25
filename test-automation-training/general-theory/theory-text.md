TODO: convert to notebook?
ADD: Why What Where When Who How (am i missing something?)


Keep in mind the test focus. We often want to start at E2E testing but this is resource and time intensive. Think about what added value E2E tests have over pure API testing in certain scenarios. For example, boundary value analysis is often better at API level as this decreases testing time by a lot. Whereas things which are done by the frontend mostly (i.e.g rounding numbers, seeing if long text is displayed properly) could better be done inside application tests. Thus, test automation is an extra to functional testing not something which completely replaces it. It can be described as checking, while testing encompasses other aspects such as exploratory testing or usability testing. It is paramount that tests are executed manually before automation. 

Ask yourself more often why are we testing? What is the end goal?

It saves a lot of time to ensure an easily adjustable testing environment. Using as many global and centralized keywords (or functions - for example a standardized login function), variables (e.g., credentials) as possible allows for quick adjustment if something changes which affects a lot of tests.

It is good to have the testcode inside the regular codebase to be able to make full use of version control. Say a feature was implemented and it turns out that it has to be reverted, it saves a lot of time if the working testcases are in the same version of the application so the test does not have to be manually changed back. And this ensures working testcases (especially helpful in BDD, where testcases function as a description of the product) for the specified features at that time.


## Tools ##
### Test Specification Tools ###
Need to research these tools further. Can be used to generate test cases. 
- SQA Mate
- MCDC gen tool

### Performance Testing Tools ###
JMeter is a GUI-based app which can be used for testing. Can also be used via CLI to be integrated in a pipeline for example. Java based. Load injector. 
Gatling is used by writing code. Also Java based.

Locust is python based.

Comparative performance of these tools is unknown to me. See which works better.

### Security Testing Tools ###
Unlikely you will have to focus on security a lot as a normal tester, as it is such a specialized area. A potential open-source tool can be OWASP ZAP, or with a little more knowledge you can try things with a Kali-linux VM (can be downloaded as a WSL instance on windows).

### Simulation Tools ###
BrowserStack or Saucelabs can be used for simulation (or the running on actual, physical hardware) of different operating systems like archaic Windows OSs or for the use of running on actual physical phones so emulators do not have to be used (there is a difference between emulators and real phones, i.e., when you need to use biometrics, cameras or actual GPS info). 

### Visual Testing Tools ###
Applitools can be used to test the visual representation. If it is very important that, for example, all browsers display the webapp in exactly the same way you can use this to check if there are no differences in pixels between different browsers.

### Mocking Tools ###
Wiremock to test mocks -> allows for HttpMocks

### GUI-tests for executables ###
Many tools present.
Squish ?
Zoomba Library for robotframework?


## Test Frameworks/suites ##
Cypress uses its own webdriver which is 3 to 5 times as fast as selenium webdriver.

Playwright is 8 to 10 x as fast as selenium webdriver as it integrates the application manipulation inside the process itself, rather than being a separate process. It allows for interaction with different tabs as well. 
The playwright driver can be integrated in robot via the BrowserLibrary... module rathar than using selenium.