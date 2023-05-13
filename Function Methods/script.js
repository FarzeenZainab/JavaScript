'use strict';

// We have a concept of function borrowing in JS. In this we can borrow a function declared inside an object to use in a separate object without coping it

// we can do it using call and bind methods. Both methods works differently

const lufthansa = {
  airline: 'lufthansa',
  iataCode: 'LH',
  bookings: [],
  //old method to declace a function method of a string
  //book: function(){}

  // Enhanced Object Literal
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline}, flight ${this.iataCode}${flightNum}`
    );

    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book('332', 'Farzeen Zainab');
lufthansa.book('635', 'Maxsmith');
console.log(lufthansa.bookings);

// we need the same lufthansa.book() method inside this object as well
// but copying the method and pasting it here inside the object is not a good practice
// so we will take the method and store it in another function

const eurowings = {
  airline: 'eurowings',
  iataCode: 'EW',
  bookings: [],
};

// what we will do is (creating a separate copy on the method)
const book = lufthansa.book ;

//this will not work because now  book() is just a simple functions now and simple functions have this keyword points to undefined

// //example:
// const myName = function () {
//   console.log(this);
// };

// myName();

// book('212', 'Farzeen Zainab');

// So we use the function method to tell JS how should the this keyword look like, which object to reference when using this keyword

// the first argument will the object that we want for reference
book.call(eurowings, '22', 'Farzeen Zainab');
book.call(lufthansa, '12', 'Farzeen Zainab');
console.log(eurowings.bookings);

//key names of the properties should be same in all objects calling book() function
const swiss = {
  airline: 'Swiss Airline',
  iataCode: 'SW',
  bookings: [],
};

book.call(swiss, '332', 'Farzeen');

// we have another method that is the apply method
// but we donot use it

//The bind Method:
// Just like the call method bind method also lets us set the this keywords on any function call

// The difference is that the bind method does not immediatly call the function insteat it returns the new function in which the new function with this keyword is bound

// https://www.javascripttutorial.net/javascript-bind/

// For example:
/*
  We need to use book function with eurowings all the time
  book.call(eurowings, '22', 'Farzeen Zainab');
  
  So here we will use the bind method to create a new function with the this keyword
  set to eurowings
  This will not call the book function instead it will create a new fucntion
*/ 

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookSW = book.bind(swiss);
bookEW(23, 'Steven Williams');
bookLH(23, 'Steven Williams');
bookSW(23, 'Steven Williams');
// bookEW(23, 'Mark Jason');
// console.log(eurowings.bookings);


// we can alse set pre-defined paramters using bind
const bookEW23 = book.bind(eurowings, 23); // here we set the this keyword and the flight number in advance
bookEW23("Hardeeys"); // now we only have to pass in the passenger's name

// Challenge buy a new plane on "buy plane" button click

lufthansa.planes = 322;
lufthansa.buyPlane = function () {
  console.log("++++++++ issue here ++++++++ ");
  console.log(this);
  this.planes++;
  console.log(this.planes);
}

const buyBtn = document.querySelector('.buy');
buyBtn.addEventListener('click', lufthansa.buyPlane); // here this.plane will be NaN, because the this keyword is set the ELEMENT (buy button) 

// In an event handler function the this keyword always points to the Element the handle function is attached to.

// In this example the this keyword points to the button element because the handle is attached to the element

lufthansa.buyNewPlane = function () {
  console.log("++++++++ issue fixed ++++++++ ");
  console.log(this);
  this.planes++;
  console.log(this.planes);
}

const buyPlaneBtn = document.querySelector('.buy');
buyBtn.addEventListener('click', lufthansa.buyNewPlane.bind(lufthansa) );

// this keyword is set dynamically by JS 

// we can not use call() method becuase it will immediatly call the function inside the handler function

// This is why we used bind method because the bind method will return a new function



// Partial Application
// partial application means that we can preset the arguments of a function

const addTax = (rate, value) => value + value * rate; // this is a general method of adding tax

console.log(addTax(0.1, 200)); 

// lets say we need to function that can be used to add tax all the time and the rate is the same that is 10%. We can preset the rate using partial application

// in some cases we do not need to use the this keyword at all so we will set this to null

const addVAT = addTax.bind(null, 0.1);
//same as addVAT =  value + value * 0.1;
console.log(addVAT(200));

// now the question is why this can not be done using default parameters
// this is different because this partial application creates a "new" more specific function based on a more general (function ex: addTax)

// Coding Challenge
const addNewVAT = function (value) {
  return function addTAX(rate) {
    return value + value * rate;
  }
}

console.log(addNewVAT(200)(0.1)); // here we want to set the rate as predefined

// correct solution
const setRate = function (rate) {
  return function (value) {
    return value + value * rate;
  }
}

const addVAT2 = setRate(0.12);
console.log(addVAT2(200));