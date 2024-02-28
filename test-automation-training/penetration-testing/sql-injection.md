# SQLi

## About
Queries which are not escaped properly thus allow you to access more information inside the database.

## Testing for it
For an input field try to insert a ' or " and see if you get back 'internal server error'. If so this means you are likely vulnerable to this. If a page is
vulnerable you can do a statement which is always true to return everything (1=1) or something which is always false (1=2) to return nothing.

So your input into a field which you suspect is interacting with the database could be something like:
`' OR 1=1;` 

If the site is vulnerable, afterwards you can add your sql statement to interact with the database. I.e.,:
`' OR 1=1; DROP TABLE Users;`
You can already see this can have severe consequences. Luckily most browsers and frameworks protect you against this, as well as better ways
for the server to handle this data.

When pages use ids or other information hardcoded in the url you can do sql injection in there. i.e. www.page.com/page/edit/1 could be injected via
`www.page.com/page/edit/1'`

### verify sql injection
If you get a valid link via this: `ticket?id=1 AND 1=1`
and an error via this: `ticket?id=1 AND 1=2` it is likely sql injection works

### directory traversal
A path injection attack: sby controlling path construction you are able to walk up the filesystem tree and control where files are being read or written

mitigate through not allowing path separators
best is indirect approach - dont allow paths what so ever

### command injection
mitigate by never inserting user data into shell commands
if absoluately necessary escape certain characters (i.e. escapeshellcmd() in php)

### sql injection
mitigate through proper escaping
use an ORM for data access instead of direct queries

finding sqli the most common way is the conditions of a select
try payloads:
`' OR 1='1` -- returns all rows (constant true)
`' AND 0='1` -- returns no rows (constant false)

find overly large return sets in the network or whathever.

exfiltration throgh union select
number of columns should match the amount of (likely to you unkown queries). 
if there are 3 columns which are returned in the query (e.g., name, password, address) you can try
adding `UNION SELECT 1, 2, 3; --';`


#### blind sqli 
when input is being inserted into a query, but you cant see the results of a query
types of blind sqli's:
- oracles - get back a binary condition : query succeded/retrns results or not
- truly blind - see no difference whether the query has failed or not

by introducing a conditional delay we can make the blind sqli into an oracle. i.e. 10 seconds delay if 1 no delay if 0
so you can watch load times to make blind sqli's into oracles, where you can see which succeeds or not

###  sqlmap
SQLmap can be run to automatically test for SQL injections. Supply it with more information to speed up the scan. 

An example query is:
`sqlmap -u https://979daadb284a94f2f9215132cd742270.ctf.hacker101.com/login --method POST --data "username=admin&password=" -p username --dbs --dbms mysql --regexp "Unknown user" --level 2 --dump --random-agent`

### setting password via sql injection
`' UNION SELECT '123' AS password#` -> sets the password for that instance, no need to insert username. then use 123 as the password
This is the sql statment that will be executed: `SELECT password FROM admins WHERE username='admin' UNION SELECT '123' AS password#`

## Mitigation




