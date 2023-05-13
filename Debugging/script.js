'use strict';

// Explanation ;

/*
The process of fixing a potential bug which is causing an unexpected behaviour of a program
We can solve this issue by using two tools in google chrome
  1. Console
  We can use console and execute console.log at each statement when working with our code
  
  2. Sources
  When we use sources we can add the breakpoints at certain point of exection, these breakpoints will stop the execution of the program at the breakpoint

  Another advantage of the using the debugger is, this becomes handy when we are working with loops in our code we can see the execution of eacg iteration of our code.

*/

/*
  Tip 

    these have same functionality but different formatting

    1. console.warn()
    2. console.error()
    3. console.table()

    console.table is useful when working with objects, it will create a table and format our properties and values

*/

// Introducing a  BUG ,

const tempratures = [9, 13, 17, 15, 14, 9, 5];

const tempAmp = function (temp) {
  let min = 0;
  let max = 0;

  for (let i = 0; i < temp.length; i++) {
    let currentTemp = temp[i];

    // 'error'
    if (typeof currentTemp !== 'number') continue;

    // Find min
    if (currentTemp < min) min = currentTemp;

    //Find Max
    if (currentTemp > max) max = currentTemp;
  }

  console.log(max, min);
  return max - min;
};
console.log(tempAmp(tempratures));
