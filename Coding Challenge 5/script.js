'use strict';

/*
Given an array of forcasted maximum tempratures, the thermometer displays a string with these tempratures.

Example: [17, 21, 23] will print "...17C in 1 days ...21C in 2 days ...23C in 3 days"

Create a function 'print Forecast which takes in an array and logs a string like the above to the console

Test Data 1: [17, 21, 23]
Test Data 2: [12, 5, -5, 0, 4]

*/

/*
  1. What is forecasted tempratures
  2. How we will print ... for each array 

  TODO 
  1. break each temprature string into one part
  2. construct the string part one by one
  3. Add all parts together using loops
*/

// Solution :

const arr = [17, 21, 23];
const arr2 = [12, 5, -5, 0, 4];

const printForcast = function addParts(anyArray) {
  let result = ``;

  function constructString(temp, i) {
    const part = ` ...${temp}C in ${i} days`;
    return (result += part);
  }
  for (let i = 0; i < anyArray.length; i++) {
    constructString(anyArray[i], i + 1);
  }
  return result;
};

// FIXME ; The result have repeating value(Fixed) (Error: The scope of the "result" variable was global, hence the result of first array was never deleted.)

console.log(printForcast(arr));
console.log(printForcast(arr2));
