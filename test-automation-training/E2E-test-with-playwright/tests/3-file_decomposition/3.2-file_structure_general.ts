
/* IMPORTS:
The first thing in a file is importing the functions or variables you will need in your test or to execute a test
from the relevant modules. 

For the example test provided by playwright we need to import certain APIs which we can use to interact with the browser
and which will run our tests.

Imports are generally done at the beginning of a file. You could also insert the file path to the module when you call the function in your code,
but that would quickly become a mess and can lead to issues when trying to share the code.

import statements go as follows for javascript projects:
*/
import { test, expect } from '@playwright/test';
//As we have not implemented these functions, the import statement should be grey (in VSCode). This indicates that the statment is unused.


/* COMMENTS:
As you've seen by now all the files contain a lot of extra text (sorry about that). Different programming languages have different conventions in terms of
commenting, but for typescript you can either use line comments: */

// like this;

/*
or block comments like these. Which can be used to explain things more in detail. It is ill advised to type this much text inside your files in actual 
projects, but for these purposes I saw no better way. Normally background information would be included in *.md files. You can use comments to 
remind yourself of functionality or leave notes for others regarding special situations. Any commented text will not be compiled and has no effect on the program.
*/


