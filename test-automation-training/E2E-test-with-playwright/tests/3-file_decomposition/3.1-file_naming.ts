/*
In order for playwright to recognize the files as testcases, any test has to be called *.spec.ts. This ensures that playwright can find and execute the tests.
This can of course be adapted but this is not recommended.

As you can see, this file is just called .ts and will therefore not be recognized as a test.


As we are executing specific testcases only, it is important to note that file paths in the command line have to be typed
with a forward slash (/). Backward slashes are often used for character escaping and therefore can mess up the paths. For playwright,
it would be best if you ensure that paths have the following structure:
./tests/2-running_tests/2.1-example.spec.ts


The information after the dots tells programs what type of file it is and how it should be executed. As all files ultimately have to be compiled
to machine language and subsequently their binary state, it is important that the computer knows how to do this.

In this case we use .ts for typescript, whereas .spec stands for 'specification' to give the technical details of what needs to be done.
*/