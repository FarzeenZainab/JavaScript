'use strict';

// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(passengerCount);
//   };
// };

// const booker = secureBooking();
// booker();
// booker();
// booker();

// function addByX(x) {
//   return function (y) {
//     console.log(x + y);
//   };
// }

// const addByTwo = addByX(2);

// // CHALLENGE 4
// function once(func) {
//   return function () {
//     func(4);
//   };
// }

// // /*** Uncomment these to check your work! ***/
// const onceFunc = once(addByTwo);
// onceFunc(4); // => should log 6
// onceFunc(10); // => should log 6
// onceFunc(9001); // => should log 6
