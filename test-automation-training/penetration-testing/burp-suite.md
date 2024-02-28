# About
Burp suite can be used for a variaty of use cases. These include but are not limited to:
- Intercepting requests to identify their structure
- Brute forcing credentials or endpoints

## Setup


## Use
Ensure burp is correctly using a proxy listener on the browser. The default configered browser burp uses is Chromium. This might 
conflict with existing ports on which your normal Chrome instance is running. Ensure that your proxy is set to port 8081.

When handling requests and you are strating to intercept the traffic, ensure that you forward within burpsuite to go to next
pages if so required.
