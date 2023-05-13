What is Synchronous Code?
Most of the code that we are writinig so far in the course has been synchronous code
This simply means that our code is executed line by line in the same order we define in our code.

Each line of code will always wait for the previous line of code to finish execution

This can create problems when one line of code takes longer time to run

Ex: alert() which shows a popup and stops the code execution until the user clicks on OK. Any code that comes after the alert() will not execute in sunchronous code.
It will block the coding execution

What is Asynchronous Code?
Example:

const p = document.querySelector('.p');
setTimeout(function () {
p.textContent = 'My name is Farzeen'
}, 5000);
p.style.color = 'red'

We enter the code block synchronously and once the setTimeout function executes, it executes asynchronously meaning that it will execute in the backgound thus, making our code asynchrounous

Asynchronous is non-blocking

Execution doesnot wait for an asynchronous task to finish its work

All Callback functions are not executed in asynchronous way
Example: the array's map() method, it also takes a callback but runs synchronously

Callback functions alone will not make the code asynchronous

=================================================================================

What is AJAX?
Asynchronous JS and XML: allows us to communicate with remote web servers in an asynchronous way. With AJAX calls, we can request data from web servers dynamically, without reloading the page

How AJAX works?
Lets say we have our JS application running inside our brower (also called client).

We want the application to get some data from the webserver

With ajax we can do an http request to the server which has this data

Then the server will send back the response containing that data that we requested and this back and forth between client and server all happens async in the background without reloading the page

We have different type of http request

GET - receive data
POST - save data
DELETE
PUT

The server we send request to have something called an API or a web API

What is an API?
Application Programming Interface is a piece of software that can be used by another piece of software in order to allow applications to talk to each other

There are many types of APIs ex: DOM API, Geolocation API and Online API

Online API (Web API):
An application running on a server, that receives requests from data, and sends data back as response

API Data Formats:
Ajax stands for asynchronous JS and XML

XML is a data format which used to widely used to transfer data on the net. But, these days no web api uses XML these days any more

Most API these days uses the JSON data format. It is basically a JS object converted to a string.

https://restcountries.com/v2/

==================================================================================
Implementing sequence of the ajax calls
