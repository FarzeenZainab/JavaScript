'use strict';

const flight = "AB112";
const passenger  = {
    name: "Farzeen Zainab",
    passport: 1243488831,
}

const checkIn = function (flightNum, passengerId)  {
    // for example: the flightNum is changed for whatever reason
    // not a good practice to change the parameters of a function
    flightNum = "AC112"; // here this statement does not mutate the actual variable present in the global context. The reason is that Strings, numbers, float and booleans are primitive types. When ever a primitive typed variable is passed as an argument in the funtion, JS makes a copy of the orignal variable and does not mutate the original value  

    
    // and we want to change the name of the passenger by adding a mister or misses in the name
    passengerId.name = `Ms. ${passenger.name}`;

    // How ever when we mutate a property of an objet it will mutate the actual value of the property because objects are referenced type.

    // Important: when a reference type variable is passed as an argument of a function, JS does not make a copy of it but only passes the reference of the object in the function. That is why you should never mutate a referneced type. When ever we change the value of the referneced type it will change the orignal value 

    // const passenger2 = passenger(reference);

    if(passengerId.passport == 1243488831)
    {
        console.log("Check in");
    } else {
        console.log("Wrong Passport")
    }

}

checkIn(flight, passenger);
console.log(flight, passenger.name, passenger.passport);

// Example
const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 10000000);
}

newPassport(passenger);
checkIn(flight, passenger);
console.log(flight, passenger.name, passenger.passport)

// There are two termonaligies which are ofter used in functions

// 1. Passing By Value
// 2. Passing by reference
// JS does not have pass by reference. We pass in an address of that reference. however that reference address is still a value and not the reference itself. We pass the refernece TO the function and does not pass the refernece BY a function