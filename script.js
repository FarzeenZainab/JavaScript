'use strict';

/* 
    A class is a blueprint and objects are instantiated on that class. This object behaves like the defined class

    In JS, we have something called prototypes. Each object in JS is linked to that prototype. A prototype
    contains methods and properties that an object can access and use and this behavior is called PROTOTYPAL INHERITANCE.

    PROTOTYPAL INHERITANCE: An object can inherit/use the methods and properties of the prototype it is linked to.

    Prototypal inheritance is different from class based inheritance

    */

const arr = [1, 2, 3, 4];
console.log(arr); // shows all methods linked to the array prototype object

/* 
    We can create prototypes using:
    1. Construction functions (manual and traditional way)
    2. Classes introduced in ES6 (modern way)
    3. object.create() (difficult way)
*/

/* 
    Creating prototypes using Constructor function:
*/

// construction functions should be pascal cased
// A constructor function can be created using arrow function because it does not have this keyword and we need that
const Person = function (firstName, birthYear) {};

// The difference between a normal function and a constructor function is
// we call constructor function using the new keyword

new Person('Farzeen', 1999);
