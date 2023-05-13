'use strict';

// function only executed once in the program

(function () {
  console.log('Executed only once');
})();

// also known as self-executing anonymous fucntions

// 1. The first is the anonymous function with lexical scope enclosed within the Grouping Operator => (). This prevents accessing variables within the IIFE idiom as well as polluting the global scope

// The second part creates the immediately invoked function expression () through which JD engine will directly interpret the function.

// Used to create scopes so the variables outside the scope does not have same name as inner scope and inner scope variables are not accessible in outside scope

// also used for async and await

// variables declared with let and const are not accessible outside {} var is accessible

// The other alternative of IIFE is using { } to create a scope

// Example:
{
  const msg = 'not accessible';
  var msg2 = 'is accessible';
}
console.log(msg2);
console.log(msg);
