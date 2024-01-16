/*
Most web pages are made up out of HTML (HyperText Markup Language). This defines the structure and the content of a page.
Browsers interpret such HTML documents so we end up with our current examples of nice looking webpages which we can easliy
interact with and read. 

These HTML documents are made up out of HTML elements. These elements can be used for varying purposes and can include
pictures, headings, paragraphs and forms. These are denoted by tags. These tags are important for test automation as
they can be used to interact with a page from a script. 

For example, when we want to submit information such as login credentials, html pages often user forms (<form>) and 
within these are inputs for the user to insert their username and password (<input>). 

To interact with such elements from automated scripts, the webdriver (in our case playwright) needs to know what field to
perform the action you specified in your code on. Say we want to click a link so we can move to a different page, we 
need to ensure that the element we want to select can be identified by the webdriver. As we will see later on, this can be done in varying ways.

When setting up test automation it is important you know the basics of how to interpret the DOM (Document Object Model). The DOM is created after
a webpage is loaded and it converts the HTML elements to objects with properties, methods and events so one can use for example javascript to
interact with and manipulate these elements dynamically - rather than the page being a purely static HTML-based document.

To get a feel for the DOM, you can look at it for any web page you load by right clicking on the page and clicking inspect element. This will open
the devtools section. In the <body> section you can find the programming I did in the ./local-app/react-frontend/ project. On the home page you can 
for example find an unordered list (<ul>) section with three product items (<li>, list item). We will be interacting with such elements later on.

If you want you could make some alterations to this to see how it works. However, as the project is ran from docker containers these changes would not
be reflected immediately. If you want to play around with this you can check out the 'MakingChanges.MD' file in the react project.
*/