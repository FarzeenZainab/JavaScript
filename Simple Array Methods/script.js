'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// Array Methods
// We have array methods simply because arrays are objects.
// These are simply functions attached to all the arrays we create in JS

/*
let arr = ['a', 'b', 'c', 'd', 'e'];

// Slice method: we can extract part of any array but without changing the original array
console.log('------------------');
console.log('SLICE METHOD');
// arr.slice(startExtractingPosition, ExtractionEndingPosition)
console.log(arr.slice(2));
console.log(arr.slice(2, 4));

// -ve parameter will start the extraction from the end of the array
console.log(arr.slice(-1));
console.log(arr.slice(-2));
console.log(arr.slice(1, -1));

// last elements in not icluded in the output array

// creating a shallow copy
console.log(arr.slice());
console.log([...arr]);

// SPLICE METHOD
// it works the same as slice method but the fundamental difference is that it actually changes the orignal array

console.log('------------------');
console.log('SPLICE METHOD');

// console.log(arr.splice(2));
console.log(arr.splice(-1));
console.log(arr); // mutated array retures the remaining elements not spliced

// most common case to use splice method is to just remove the last element from the orignal array

// splice method works a little differently. The first argument is the begin position and the second parameter is the deleteCount that means number of elements should be removed
console.log(arr.splice(1, 2)); // begin position is 1 and 2 elements will be removed in the array

// REVERSE METHOD
//  it works the same as slice method but the fundamental difference is that it actually changes the orignal array

console.log('------------------');
console.log('REVERSE METHOD');

// it will reverse the array and also mutates the orignal one
const arr2 = ['g', 'e', 'l', 'q'];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT METHOD
console.log('------------------');
console.log('CONCAT METHOD');
const letter = arr.concat(arr2);
console.log(letter.join(' - '));
*/

// AT METHOD (ES2022)
// console.log('------------------');
// console.log('AT METHOD introduced in ES2022');

// const arr = [23, 11, 64];
// console.log(arr.at(1));
// console.log(arr.at(-1)); // last element of the array

// // at method also work for strings
// const str = 'farzeen';
// console.log(str.at(0));
// console.log(str.at(-1));

// // LOOPING ARRAYS
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// positive values are deposits and -ve values are withdrawals

// for (const [i, move] of movements.entries()) {
//   const moveTosStr = move.toString();
//   if (moveTosStr.at(0) == '-')
//     console.log(`Amount Withdrawn: ${Math.abs(move)}`);
//   if (moveTosStr.at(0) != '-') console.log(`Amount Deposited: ${move}`);
// }

// we can do the exact same thing using a simple method called forEach()
// movements.forEach(function (move) {
//   if (move > 0) {
//     console.log(`Amount Withdrawn: ${Math.abs(move)}`);
//   } else {
//     console.log(`Amount Deposited: ${Math.abs(move)}`);
//   }
// });

// how to access the counter variable in forEach() ?
// when the forEach function call the callback function it passes in 3 things as argument to that function

// 1. The element
// 2. The index of the element (current iteration number)
// 3. The whole array that we are looping

// The order of the argument matters in the forEach loop
// The first parameter will always be the current element
// The second parameter will be the index of the element
// The third parameter will be the array itself

// movements.forEach(function (move, index, array) {
//   if (move > 0) {
//     console.log(`Move ${index + 1}: Amount Deposited: ${Math.abs(move)}`);
//   } else {
//     console.log(`Move ${index + 1}: Amount Withdrawn: ${Math.abs(move)}`);
//   }
// });

// When to use for-of and forEach
// The difference between two of them is that you can not break out of a forEach loop
// The continue and break statements donot work in forEach loop

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// // we can use forEach on a map
// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// // Also available for set
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique['USD']);

// //because sets doesnt have key so it will not make sense to have a key for it, so we will use _ which means a throw away varaible (varaible not necessary), it is convention
// currenciesUnique.forEach(function (value, index, set) {
//   // console.log(`${value} ${index}`);
//   console.log(`${value} ${index}`);
// });

///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.
Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets
HINT: Use tools from all lectures in this section so far 😉
TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
GOOD LUCK 😀
*/

// const dogsJulia = [3, 5, 2, 12, 7];
// const dogsKate = [10, 5, 6, 1, 4];
// const dogsJulia = [9, 16, 6, 8, 3];
// const dogsKate = [10, 5, 6, 1, 4];

// //shallow copy of julia's data
// const dogsJuliaCorrected = [...dogsJulia].slice(1, -2);

// const checkDogs = function (dogsJulia, dogsKate) {
//   const checkAge = function (age, index) {
//     const strResult =
//       age >= 5
//         ? `Dog number ${index + 1} is an adult and is ${age} years old`
//         : `Dog number ${index + 1} is an puppy and is ${age} years old`;
//     return strResult;
//   };

//   // dogsJulia.forEach(function (ele, i) {
//   //   console.log(checkAge(ele, i));
//   // });

//   // dogsKate.forEach(function (ele, i) {
//   //   console.log(checkAge(ele, i));
//   // });

//   const dogs = dogsJulia.concat(dogsKate);
//   dogs.forEach(function (ele, i) {
//     console.log(checkAge(ele, i));
//   });
// };

// checkDogs(dogsJuliaCorrected, dogsKate);

// Data Transformation: Map, Filter, Reduce methods
// These are methods that we use to calculate new arrays based on transforming data from other arrays.

//Map
// The Map methods is also used to loop over arrays. It similar to forEach method that we studied before but, the difference is that the map method creates a new array based on the original array.

// So the map method creates a brand new array based on the original array. So, essentialy the map method takes an array; loops over that array and at each iteration it call backs a function that we specify to the current array element.

// Example: Lets assume we are going to mulitply each element of an array with 2. So we will apply map method to and callbacks a function on each iteration that will multiply the current element with 2 at store it in a BRAND NEW ARRAY

// Filter Method
// It is used to filter the elements in the original array which satisfy a certain condition
// Example: we have an array and want to work with only those elements that are greate than 2. So we will use filter to filter the array and then the result will be stored in a new array

// Reduce Method
// Reduce boils(reduce) all array elements down to a single value
// The example of this can be adding all the elements of an array and returning that value

// we have to specify an operation that reduce method will execute on each element. Ex accumulator + element for summing all the values togther. No new array is retured but only a final value is returned

// Example of the Map method
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// EUR to USD
// const euroToUSD = 1.1;
// const movementsUSD = movements.map(function (mov, i) {
//   return mov * euroToUSD;
// });

// const movementsUSD = movements.map((mov, i) => {
//   return mov * euroToUSD;
// });

// console.log(movements);
// console.log(movementsUSD);

// // The map filter returns the new array in which the new calculated valued are stored
// // Map runs in a complete different manner as compared to for-of loop
// // We use a function to compute the new value of an element and in for-of loop we simply runs a loop and at each iteration something is done to the current element
// // The map method is the modern way of doing stuff and it is more of a functional procedure (functional paradigm)

// const USDmovements = [];
// for (const mov in movements) {
//   USDmovements.push(mov * euroToUSD);
// }

// console.log(USDmovements);

// The Filter Method
// The filter method creates a new array filled with elements that pass a test (condition) provided by a function
// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });

// const withdrawals = movements.filter(function (mov) {
//   return mov < 0;
// });

// console.log(`Your deposits are ${deposits}`);
// console.log(`Your withdrawals are ${withdrawals}`);

// // The Reduce Method (returns only one value not an array)
// // accumulator -> SNOWBALL
// const balance = movements.reduce(function (accumulator, curr, currIndex, arr) {
//   console.log(`Iteration ${currIndex}: ${accumulator}`);
//   return accumulator + curr;
// }, 0); // we have to specifiy the initial value of the accumulator after the callback function so the inital value of accumalator starts from that number

// console.log(balance);

// doing the same thing with for of loop
// let newBal = 0;
// for (const mov of movements) {
//   newBal += mov;
//   console.log(newBal);
// }

// console.log('Turn an array of numbers into a long string of all those numbers');

// // [200, 450, -400, 3000, -650, -130, 70, 1300]
// const longString = movements.reduce((acc, mov) => {
//   const accString = acc.toString();
//   const movString = mov.toString();
//   return accString.concat(movString);
// }, movements[0]);

// console.log(`Long String: ${longString}`);

// const voters = [
//   { name: 'Bob', age: 30, voted: true },
//   { name: 'Jake', age: 32, voted: true },
//   { name: 'Kate', age: 25, voted: false },
//   { name: 'Sam', age: 20, voted: false },
//   { name: 'Phil', age: 21, voted: true },
//   { name: 'Ed', age: 55, voted: true },
//   { name: 'Tami', age: 54, voted: true },
//   { name: 'Mary', age: 31, voted: false },
//   { name: 'Becky', age: 43, voted: false },
//   { name: 'Joey', age: 41, voted: true },
//   { name: 'Jeff', age: 30, voted: true },
//   { name: 'Zack', age: 19, voted: false },
// ];

// const totalVotes = voters.reduce((acc, curr) => {
//   if (curr.voted) {
//     return acc + 1;
//   } else {
//     return acc;
//   }
// }, 0);

// console.log(`The total number of votes casted are: ${totalVotes}`);

// const wishlist = [
//   { title: 'Tesla Model S', price: 90000 },
//   { title: '4 carat diamond ring', price: 45000 },
//   { title: 'Fancy hacky Sack', price: 5 },
//   { title: 'Gold fidgit spinner', price: 2000 },
//   { title: 'A second Tesla Model S', price: 90000 },
// ];

// const totalCost = wishlist.reduce((acc, curr) => {
//   return acc + curr.price;
// }, 0);

// console.log(totalCost);

// const arrays = [['1', '2', '3'], [true], [4, 5, 6]];

// const flatten = arrays.reduce((acc, curr) => {
//   acc.push(...curr);
//   return acc;
// }, []);

// const flatten = arrays.reduce((acc, curr) => {
//   return [...acc, ...curr];
// }, []);

// console.log(flatten);

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:
1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets
TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
GOOD LUCK 😀
*/

// const calcAverageHumanAge = function (dogAges) {
//   // looping over through map method which will create a new array and store the result in that array of each element
//   const ageInHumanYears = dogAges.map(function (dogAge) {
//     return dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4;
//   });

//   const filteredDogAges = ageInHumanYears.filter(function (age) {
//     return age >= 18;
//   });

//   const sumOfDogAges = filteredDogAges.reduce(function (acc, age) {
//     // sum of all ages in the arr and / number of elements in the array
//     return (acc += age);
//   }, 0);

//   return `The avegare human age of a dog is: ${
//     sumOfDogAges / filteredDogAges.length
//   } years`;
// };

// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
// console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!
TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
GOOD LUCK 😀
*/

// const calcAverageHumanAge2 = dogAges => {
//   // looping over through map method which will create a new array and store the result in that array of each element
//   const ageInHumanYears = dogAges
//     .map(dogAge => (dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4))
//     .filter(age => age >= 18)
//     .reduce((acc, age, i, arr) => {
//       const sumArr = acc + age / arr.length;
//       return sumArr;
//     }, 0);

//   // sum of all ages in the arr and / number of elements in the array

//   return `The avegare human age of a dog is: ${ageInHumanYears} years`;
// };

// console.log(calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3]));

// The Find Method
// We can retrive an element of an array based on a condition
// Find method also takes a callback function that gets executed while Find method loops the array

// A callback is a function that is passed as an argument to another function

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const firstWithdrawal = movements.find(mov => mov < 0);
// console.log(movements);
// console.log(firstWithdrawal);

// Find methods loops over the array and returns the FIRST ELEMENT that SATISSFIED the defined confition

// There are two fundamental difference between find and filter method. Filter method will returns all the elements in an array that satissfies the conditoin where as find method only returns the first element that satissfies the condition. The second difference is filter method returns an array and find method returns a single value

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];
const account = accounts.find(acc => acc.owner == 'Jessica Davis');
// console.log(account);

// Finding owner using for-of loop
// const findAcc = function (p_accounts) {
//   for (const acc of p_accounts) {
//     if (acc.owner == 'Jessica Davis') return acc;
//   }
// };

// console.log(findAcc(accounts));

// Find Index
// The method executes a function for each array element and returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfies the condition then -1 is returned.

// const arr = [1, 2, 3, 4, 5];
// const indexNumber = arr.findIndex(ele => {
//   return ele == 4;
// });

// console.log(indexNumber);

// some VS includes method
// const arr = [1, 2, 3, 4, 5];
// console.log(arr.includes(2)); // EQUALITY includes checks for equality === only

// CONDITION: some method checks for a specified conditions on every element inside an array and not only for === like includes method

// if the condition is true some will true otherwise it will return false
// console.log(
//   arr.some(ele => {
//     return ele > 0;
//   })
// );

// the difference between filter and some method is that filter will return a new array that contains all the elements that meets the specified condition but some will return boolean value i.e true or false

// EVERY method
// some and every method are almost the same but the only difference is that every method only returns true when all of the elements inside and array satisfies the condition

// check it all movements are deposits
// const deposits = movements.every(mov => mov > 0);
// console.log(deposits);

// separate callback
// it is important method for dry
// keep the condition separate in a new function expression and then pass it as an argument inside the array method so if there is any change to the function we donot have to change the condition in 3 or 4 places but only one

// const depositCallBack = mov => mov > 0;
// console.log(movements.every(depositCallBack));
// console.log(movements.some(depositCallBack));
// console.log(movements.filter(depositCallBack));

// function invert(array) {
//   const inverts = array.map((num, i) => {
//     const res = -num;
//     return res;
//   });

//   return inverts;
// }
// console.log(invert([1, 2, -3, 4, -5]));

// const reverseSeq = n => {
//   const result = [];
//   for (let i = 5; i >= 1; --i) {
//     result.push(i);
//   }
//   console.log(result);
// };

// reverseSeq(5);

// The Flat Method
// Flat and FlatMap method were introduced in 2019/ES2019 and does not work with super old browsers

// Flat method is used to put nestes arrays and inside one single array.

// Flat method only goes one method deep when flatening the array
// It will not flat deeper nested arrys - BY DEFAULT

const arr = [[1, 2, 3, 4], [4, 5, 8], 33, 56];
console.log(arr.flat());

// To flat deeper nested arrays we have to define the depth level that flat method should go

const arrDeep = [[[1, 2], 3, 4], [4, [5, 8]], 33, 56];
console.log(arrDeep.flat(2));

// It is a common scenerio when to chaing map method with flat and to avoid chaining JS introduced the flatMap method that does the same thing

// so function totalAccBalance
// The downside of flatMap method is that it only goes on level deep and we can not change it

// Sorting Arrays
const owners = ['Jonas', 'Zack', 'Adam', 'Martha'];
console.log(owners.sort());
console.log(owners); // Sort method will mutate the orignal array

console.log(movements.sort());
console.log(movements);
