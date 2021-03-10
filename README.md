# nodejs-tuto
###### Using Netninja playlist : [Node.js Crash Course Tutorial](https://www.youtube.com/playlist?list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU)

# Install nodeJS on windows:
- nodejs.org/en
- download
- click install 

easy huh ?
> node -v

to get the node version.
So, i did it and got the 14.3.0 version yay !

# Send request
backend is not only about nodeJS, we actually need a [server.js](https://github.com/locust49/nodejs-tuto/blob/main/VID%2303/server.js)
so.. run it run it run it run it ... infinitely ? nop.
# Receive response
We've only made a request "localhost:3k" without receiving a response.
Check the [server.js](https://github.com/locust49/nodejs-tuto/blob/main/VID%2304/server.js)
# Basic routing
it's aint fun if we always get the same page whatever the url is right ?
===> [server.js](https://github.com/locust49/nodejs-tuto/blob/main/VID%2304/server.js) again..
# Status Code
Status code | Definition				|
------------|---------------------------|
|	200 	| OK						|
|	301 	| Resource moved			|
|	404 	| Not found					|
|	500 	| Internal server error		|

Status range	| Definition				|
----------------|---------------------------|
|	100 Range 	| informational responses	|
|	200 Range 	| success codes				|
|	300 Range 	| codes for redirects		|
|	400 Range 	| user or client error		|
|	500 Range 	| server error				|

# Installing packages
[Here](https://www.npmjs.com/) we can search for whatever package we need
I installed **nodemon** because it helps us reload the server without *Ctrl-C* it each time we change our file and run it again

A [package.json](https://github.com/locust49/nodejs-tuto/blob/main/package.json) file is needed if we're using 3rd party packages which we definitely going to use, soo.. let's run this command :
> npm init

* So yea, i installed a github extension on Vscode (id : codezombiech.gitignore) so that it helps me ignore some ~~people~~ euh.. directories and/or files since i'm new to nodejs and i don't really know what should i keep and not.. *