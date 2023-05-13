'use strict';

let rep = 1;
while (rep <= 10) {
  console.log('Whaaaat!');

  rep++;
}

//While loop can be used on a wide range, which means that while loop does require a counter to run but it just needs ANY CONDITION to execute the code block. This is very useful when you want to execute code eith out a counter

// Example
// Role dice until we hit 6, now in this situation we donot know how many times a loop should run. So here we can not use for loop instead we will use while loop

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  //re-assigning dice variable for next iteration
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice == 6) {
    console.log(`Congradulation You rolled a ${dice}`);
  }
}
