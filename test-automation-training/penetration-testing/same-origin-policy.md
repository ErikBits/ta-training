
## Same origin policy
SOP is how the browser restricts a number of security-critical flaws:
- what domains you can contact via XMLHttpRequest
- Access to the DOM across separate frames/windows

Origin matching mutch more strict than cookies:
- protocols must match - no crossing http/https boundaries
- port numbers must match
- domain names must be an exact match 

Its possible for developers to loosen SOP - you can change document.domain. This can be attacked
in a multitude of ways. Refrain from loosening SOP if you dont have a good reason

CORS (Cross origin resource sharing) - making requests across domains outside of SOP using XMLHttpRequests.
risky


## Cross Site Request Forgery (CSRF)
Attackers tricks a victim into going to a page controlled by the attacker, which submits data to the target site as the victim.

TODO: expand

whne you find a text input on a certain page, you can try putting in a link about another page to see if it works.

For example:
submit a ticket in the body you could paste:
`<a href="http://localhost/newUser?username=test&password=test&password2=test">TEST</a>`
Has to be a place where inputs are possible from the browser.
