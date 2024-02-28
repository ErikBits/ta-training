
## About

Cross site scripting happens when you are able to execute javascript in ways which are you not supposed to. It is a very common issue. There are varying ways this can be done. 
- Reflected XSS - input from a user is directly returned to the browser, permitting injection of arbitrary content
- Stored XSS - input from a user in stored on the server (often in DB) and returned later without proper escaping
- DOM XSS - input from user is inserted into the pagess dom withou proper handling, enabling insertion of arbitrary nodes
    - has to be prevented on browser side.

## Testing for it

An easy, and the most basic example (which likely will work nowhere) is inserting the script tag plainly inside an input field like so:
`<script>alert(document.domain)</script>`
If you arent vulnerable to this version, maybe your browser is automatically transforming the brackets. An alternate method to try
is `%3cscript%3e`

Alternatively you can alter the DOM - input fields you could maybe type: `" onfocus="alert(document.cookie)`
TODO: why does this happen

But in instances when this does happen, you can look in to the javascript of a page, and see what variables are stored for 
example (think maybe cookies or something) and interact with these. 
During any point of the execution of any page you can interact with the functions being executed by the page. If you want to see how the interaction
with a certain API works for example (which you found in the network tab under XHR), you can see which functions will make use of this by searching for this 
function and setting breakpoints. Then you can get more details on what is required for the function and how the data is used. Anything done via the website
itself with javascript can be done form the console.

When you have set this breakpoint you can also call all these functions on your own. So long as you supply the correct input (which can be made clearer by setting
these breakpoints) you can interact with this as you wants, subsequently setting a good basis for your XSS tests.


finding XSS:
1. figure out where the data goes: does it get embedded in a tag attribute? Does it ambed into a string in a script tag? Does it get stored in a database?
2. figure out how the data is handled. is it stored in urls? html encoded before going into href code etc?
3. figure out how special characters are handeld. Insert something like `'<>:;"` and see if some of these go through.
    - try dom events like onmouseover to try xss

tricks to try when testing for xss:
"><h1>test</h1>
'+alert(1)+'
"onmouseover="alert(1)
http://"onmouserover="alert(1)


### Stored XSS
when pages support markdown you can maybe insert some code which does something like `<button onclick=alert('xss')>click</button>`

### Encoding sniffing
Browsers will encode message based on what they suspect these messages to be dependent on certain heuristics. It may be possible to 
insert payloads in a website by encoding your message differently (example will be UTF-7), which will allow the payload
to bypass certain filters or firewalls.

UTF-7 payload:
`+ADw-script+AD4-alert(1);+ADw-/script+AD4-`
Works on older browsers.

For coding: always specify an encoding / MIME types so this is not automatically sniffed and can be potentially exploited.

### forced browsing / improper authorization
i.e. a specific function inside the admin page not protected
or enumerate through values to see other users' data

verify this by enumerating through i.e. ids in the url `/?page=1` ..

verify auth by doing an action (i.e. altering user details as an admin) and then attempting to repeat this 
by using a low priviliged persona and replay the requests (changing ids and csrfs as necessary)


## Mitigation

mitigating XSS:
- user controlled input should not end up in a script tag
- put input into a hidden field and insert that into javascript
- if it is and int or bool, do proper type checking before inserting it into javascript.
- dont put user input on the page directly. Use innertext or innerhtml to put content into a page.

TODO: research when vulnerable and see if i am not vulnerable as is.

## Extra sources

https://owasp.org/www-project-web-security-testing-guide/latest/4-Web_Application_Security_Testing/07-Input_Validation_Testing/01-Testing_for_Reflected_Cross_Site_Scripting

https://cheatsheetseries.owasp.org/cheatsheets/XSS_Filter_Evasion_Cheat_Sheet.html