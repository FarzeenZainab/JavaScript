'use strict'

//arrow function is a one liner function

//declaration

//           arrow function
//              ||
const bornIn = age => 2021 - age;
//     ||       ||           ||
//   any const  paramerter   parameter

console.log(bornIn(22));

const attendence = (entryTime, name) => {
    const time = 9;
    entryTime = 8.25;
    
    let res =  `${name} you are`;
    
    if ( entryTime > time){
       res += ` late!`;
    }
    else {
        res += ` ontime!`;
    }

    return res;
}

console.log(attendence(11, "Farzeen"));

//When we have more complex functions that are not one liner we need to use brackets
//for a complex where we have more than one parameters we have to enclose them in brackets as well
// we can not use this keyword in arrow function
//arrow function are handy but we can not use them all the time, better option is to use function expressions

