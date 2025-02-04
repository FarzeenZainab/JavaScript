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
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
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

// PROTOTYPES:

/* 
    Each and every function in JS automatically has a property called prototype, that includes constructor functions.
*/

const myFunc = function () {};

console.log('myFunc prototype', myFunc.prototype);
console.log('person prototype', Person.prototype);

/* 
    Every object that is created using a constructor function will get access 
    to all the properties and methods that we define in the prototype property
    of that construction function.
*/

/* 
    Person constructor function has a prototype property.
    On that property we define the calcAge function. 

    Person.prototype (this is not the prototype/blueprint of Person but blueprint/prototype the objects created by this constructor function)
    Person.prototype.calcAge
*/
Person.prototype.calcAge = function () {
  console.log(2025 - this.birthYear);
};

console.log(Person.prototype);
farzeen.calcAge();
matilda.calcAge();

/* 
    PROTOTYPAL INHERITANCE AND PROTOTYPE CHAIN:

    When a function is called by using new keyword following steps happens:
    
    const person1 = new Person('Jonas', 1999)

    1. An empty object is create
    2. this keyword in constructor function call is set to the new object 
        (because of this we can directly set the new object property using this.name = name → from parameter)
     
    3. The new object is linked to (__proto__property) to the constructor function's prototype property

    4. The new object is returned to the function
*/

/* 
    What happens when we call calcAge function on the person1 object
    
    1. When we reach person1.calcAge function, the compiler tries to find the function
        declaration in the person1 object but, it is not defined there
        
    2. Next, JS will look into its prototype, and if the method is available there it will call the method
    
    This terminology is called prototype chain. 

*/

///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

// Car constructor
const Car = function (name, make, speed) {
  //assigning newly created object with below properties after object initialization
  this.name = name;
  this.make = make;
  this.speed = speed;
};

const BMW = new Car('BMW', 2024, 120);
const Mercedes = new Car('Mercedes', 2024, 120);

console.log(BMW, Mercedes);

// Creating constructor methods using prototype

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`accelerate ${this.name}, new speed is ${this.speed} km/hr`);
};

Car.prototype.brake = function () {
  this.speed -= 10;
  console.log(`decelerate ${this.name}, new speed is ${this.speed} km/hr`);
};

console.log('========= BMW =========');

BMW.accelerate();
BMW.accelerate();
BMW.accelerate();
BMW.brake();
BMW.brake();
BMW.brake();
BMW.brake();

console.log('========= Mercedes =========');

BMW.accelerate();
BMW.accelerate();
BMW.accelerate();
BMW.brake();
BMW.brake();
BMW.brake();
BMW.brake();

/* 
  ES6 Classes:

  What we did previously was an outdated method. Now, we are going to do the 
  same thing but with ES6 classes which is the modern way of defining prototypes in JS.

  JS Classes does not work like traditional way like it works in C# and other programming 
  languages. In JS, classes are just the syntactic sugar on top of prototypal inheritance.

  Classes still implement prototypal inheritance behind the scenes. 
*/

// Class expression:
// const PersonCl = class {};

// Class declaration:
class PersonCl {
  // this is called when the class is  initializes with the new keyword
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // These methods will be added to the class
  greet() {
    console.log(`Hi, ${firstName}`);
  }
}

const jessica = new PersonCl('Jessica', 1999);

console.log(jessica);

/* 
  WORKING WITH SETTERS AND GETTERS:

  Every object in JS can have setter and getter properties. We call these properties
  accessor properties. While, normal properties are called data properties. Getters and setters are 
  functions that sets and gets a value.  

*/

const account = {
  owner: 'Jonas',
  movements: [120, -20, 40, 500],

  /* 
    To create a normal function to a getter function prepend it with
    get keyword
    */
  get latest() {
    return this.movements.slice(-1).pop();
  },

  /* 
    We can create a setter using the set keyword
  */
  set latest(movement) {
    this.movements.push(movement);
  },
};

/*   
  Because latest is now a getter function, we will treat the function as the 
  property. We will not call the function using ()
*/
console.log(account.latest);

/* 
  Setting a property
*/
account.latest = 32;
console.log(account.latest);

/* 
  We can use setters and getters in classes too, using same syntax
*/
class Account {
  constructor(fullName, balance, movements) {
    this.fullName = fullName;
    this.balance = balance;
    this.movements = movements;
  }

  // getter function
  get balance1() {
    return this.balance;
  }

  // setter function
  /* 
    We are creating a setter function of a property that 
    already exits. When we pass that value when we create the instance object
    the setter function is automatically called. So, whenever we set the fullName
    to the this keyword, the setter function is called.  
  */
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);

    /* 
     to avoid naming conflict we use _ convention, it is not a js feature.
     When we did this, we lost the fullName property from the class because it is now _fullName
     
     To fix this we have to create a getter function
    */
  }

  get fullName() {
    return this._fullName;
  }
}

const acc1 = new Account('Farzeen Zainab', 1500, [100, 20, 80, 60]);

/* 
  The difference between both consoles is that the first console is 
  directly accessing a crucial/private property of an object. The second
  is console is actually calling a method that return the value of the property 

  We can modify the property by doing acc1.balance = 500 that is insecure.
 */
console.log(acc1.balance);
console.log(acc1.balance1);
console.log(acc1.fullName);

/* 
  STATIC METHODS:
  method defined on the class rather than on the instance class to keep the 
  class level logic separate from instances are static methods. If a method 
  depends on instance level logic (uses this keyword), then it should not be
  static. 
*/

class User {
  constructor(name) {
    this.name = name;
  }

  static createWithBaseSetup() {
    console.log('Hi, user');
  }
}
const newUser = new User('Farzeen');
User.createWithBaseSetup();
// newUser.createWithBaseSetup();

///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

class Car2 {
  constructor(name, make, speed) {
    this.name = name;
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`accelerate ${this.name}, new speed is ${this.speed} km/hr`);
  }

  brake() {
    this.speed -= 10;
    console.log(`decelerate ${this.name}, new speed is ${this.speed} km/hr`);
  }

  set speed(value) {
    return (this._speed = value);
  }

  get speed() {
    return this._speed;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(value) {
    this.speed = value * 1.6;
  }
}

const ford = new Car2('Ford', 2021, 120);

console.log(`Speed: ${ford.speed}km/h`);
console.log(`Speed in US:  ${ford.speedUS}mi/h`);
ford.accelerate();
ford.accelerate();
console.log(`Speed: ${ford.speed}km/h`);
console.log(`Speed in US:  ${ford.speedUS}mi/h`);
