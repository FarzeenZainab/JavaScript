'use strict';

// Looping through array and skipping a word in array

const testArray = [
  'test1',
  'test2',
  'test3',
  'test4',
  'test5',
  'test6',
  'test7',
];

//Skip the current iteration
console.log('-----------Continue----------');
for (let i = 0; i < testArray.length; i++) {
  if (testArray[i].includes('5')) {
    console.log('skipped');
    continue;
  }
  console.log(testArray[i]);
}

//Break the loop completely
console.log('-----------Break----------');
for (let i = 0; i < testArray.length; i++) {
  if (testArray[i].includes('5')) {
    console.log('breaked');
    break;
  }
  console.log(testArray[i]);
}
