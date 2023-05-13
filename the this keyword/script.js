"use strict";

console.log(this);

const calcAge = function (birthYear) {
    console.log(2037 - birthYear);
    console.log(this); //this will be undefined in strict mode otherwise it will be window/global object
}

calcAge(1999);


// arrow function does not have its own this keyword so it will use the
// lexical this keyword that is the window object - arrow function uses the 
// the this keyword of the parent function/scope
const calcAgeArrow = birthYear => console.log(this);
calcAgeArrow(1555);


//method this
const jonas = {
    fullname: "Jonas Schedettman",
    profession: "teacher",
    birthYear: 1999 ,
    age: null,
    calcAge: function(){
        this.age = 2022 - this.birthYear;
        console.log(this.age);
        console.log(this);
    },
};

//in this case the this keyword references jonas that is jonas.birthYear and
// jonas.age

jonas.calcAge();


// this keyword always points to the object that is calling  the method
// this keyword is dynamic depending on the method that is calling it
// example
const matilda = {
    birthYear: 2012,
    age: null,
}

matilda.calcAge = jonas.calcAge;
matilda.calcAge(2034);



const f = jonas.calcAge;
f();












