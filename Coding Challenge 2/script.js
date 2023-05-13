'use strict';

///////////////////////////////////////
// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓
Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!
And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.
GOOD LUCK 😀
*/

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();

/**
 * How is this code is executed?
 * Explanation is the closure. By the time the eventListener function is
 * executed the IIFE has already done executing and is not in the call stack anymore
 * So how can header variable can be accessed by the eventListener function?
 *  It is because of the closure eventListener can have access to the header variable
 * because it is born on the IIFE's scope thus can access all of its variable
 */
