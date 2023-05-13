"use strict";



var x = 1;

const jonas = { // this here is not a block its is an object literal
    firstName: "Jonas",
    year: 1999,
    calcAge: function () {  
        console.log(this);
        console.log(2037 - this.year);

        const isMillenial = function () {
            console.log('Millenial called');
            // console.log(this.year >= 1981 && this.year <= 1996);
        };
        
        // isMillenial();

        function functionCall( ){
            console.log('functionCall');
        }

        // functionCall();
    },

    greet: () => {
        console.log(`The this keyword for arrow function is ${this}`);
        console.log(`Hey ${this.x}`);
        functionCall();
    },

};

// the result will be undefined because an arrow function does not have its own this keyword instead it uses this keyword from its surrondings
jonas.greet();  // in this case the this keyword is the window object
console.log(this.x);

// we should not use var to create variables as these variables will become the property of the window object, which then can be accessed by the windows' this keyword

// You should never use arrow function as method inside an object, even if you will never need this keyword. 

jonas.calcAge();