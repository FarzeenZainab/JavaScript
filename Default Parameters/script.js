'use strict';

const bookings = [];


const createBooking = function (flightNum, numPassengers = 1, price = (145 * numPassengers) ) {

    // ES5 way of setting default parameters
    // numPassengers = numPassengers || 1;
    // price = price || 129;


    const booking = { 
        flightNum, // using enhanced object literal -> flightNum: flighNum 
        numPassengers,
        price
    }
    console.log(booking);
    bookings.push(booking);
}



createBooking('LH123'); //numPassengers and price is set to undefined because we didnot specify them

createBooking('LH123', 2, 145);
createBooking('LH123', 2); // price * numPassengers
 
// we can use short circuiting because we know that these are falsy values. This is the ES5 way to set default values of the parameters

// In ES6 we can use = to set default parameters

// Another important use case of ES6 default parameters is that we can evaluate any expression and we can also use the value of the parameters defined before the expression

// example: see on top

// we can not skip any argument when calling a function
createBooking('LH123', 222);

// we can use a trick to skip an argument by passing undefined to that argument, this way JS will use the default value of the parameter
createBooking('LH123', undefined, 12);