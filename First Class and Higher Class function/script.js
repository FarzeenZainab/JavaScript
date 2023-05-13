'use strict';

// There are two concepts in JS that are used in the language.

// 1. First Class Function
/**
 * Functions are called first-class citizens
 * 
 * In practice that means that functions are simply
 * treated as values
 * 
 * WHy functions behave like values? the reason is that functions are simply another type of object in JS and since objects are values functions are values too
 * 
 * Because of this behavior we can store functions in variables or store it as a property of an object and we can pass it as argument of  other functions like we did in eventListener function
 * 
 *
 * Because function is an object we have methods that we can use on functions Ex: Bind
 * */ 


// 2. Higher Order Function
/**
 * A higher order function is either a function that receives another function as an argument or that returns a new function, or both
 * 
 * This is only possible because of first-class functions
 * 
 * 1. Function that receivers another function as an argument
    * Ex:
    * const greet = () => console.log('Hey User');
    * btnClose.addEventListener('click', greet);
    * 
    * A callback function is a function that is passed as an argument in higher order function
 * 
 * 2. Functions that returns new function
 * Ex:
 * function count() { // higher order function
 *      let counter = 0;
 *      return function () {
 *          counter++;
 *      }
 * */ 
