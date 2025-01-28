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
// A constructor function can not be created using6 arrow function because it does not have this keyword and we need that
// const Person = function (firstName, birthYear) {
//   console.log(
//     "the newly created empty object and it's type when we called the constructor function with the new keyword",
//     this
//   );
// };

// The difference between a normal function and a constructor function is
// we call constructor function using the new keyword

// new Person('Farzeen', 1999);

// What happens when the new keyword is executed
// 1. an empty object is created

// 2. The function is called and the this keyword is assigned to the newly created object.
//      All of this is happening because we are calling the function with the new keyword here

// 3. The newly created object is linked to the prototype

//  4. function automatically returns the newly created object

const Person = function (firstName, birthYear) {
  console.log(
    "the newly created empty object and it's type when we called the constructor function with the new keyword",
    this
  );

  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // this.firstName will create a new property inside the newly created object

  // Instance methods
  // This would work fine here but it is actually a bad practice
  // You should never create a method inside a constructor function
  // This will be copied for each object that is created using this constructor, will be copied 1000 times for 1000 objects
  // To solve this we will use prototypes and prototypal inheritance to create instance methods
  this.calcAge = function () {
    console.log(2037 - this.birthYear);
  };
};

const farzeen = new Person('Farzeen', 1999);
const matilda = new Person('Matilda', 2000);

console.table(farzeen);
console.table(matilda);

// JS does not have classes like traditional OOP but it has constructor functions
// that will act like a blueprint for objects
// each created with that constructor function will be an instance of that constructor (Person)

// There is an operator that we can use to test if an object is an instance of constructor

console.log(
  'is farzeen {} is an instance of Person constructor',
  farzeen instanceof Person
);
