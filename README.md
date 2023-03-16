# Timeout-in-ExpressJs
Achieving response timeout in Express Js

Ever wondered how to achieve a timeout if any of your asynchronous operations takes a huge amount amount of time to return a response ?
Do you want your user to wait for that long ?
Or do you want to debug the issue and add a timeout for the time being ?

In this example, the most basic way of achieving a response timeout in your Express Js application is shown

We are using a middleware where we attach a setTimeout to your response.

