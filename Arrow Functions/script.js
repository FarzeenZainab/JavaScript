'use strict';

//Good for one liner functions
//no need to write return keyword
//no need to write curly braces
//easier to write and organize code

//syntax 
//const variable name = argument => expression

const ageOfRetirement = 63;
const yearInRetirement = age => ageOfRetirement - age;

const farzeen = yearInRetirement(21);
console.log(farzeen);

//In some cases we need to have more than one line of code in arrow function so in this case we will use the {}
//Example

const yearsUntilRetirement = age => {
    const retirementAge  = 65 ; 
    return retirementAge - age;
}

console.log(yearsUntilRetirement(21));

//All we did above is just 1 agr fuction if we want to have multiple arguments in our arrow function we need to write our arguments in parenthesis
const UntilRetirement = (name, age) => {
    const retirementAge  = 65 ;
    const yearsLeft = retirementAge - age; 
    return `${name} you have ${yearsLeft} years left in retirement`;
}

console.log(UntilRetirement("Farzeen Zainab", 21));
console.log(UntilRetirement("Zainab Ali", 35));

//Disadvantage of using arrow function for complex code
//1. We can not use "this" keyword in our arrow function
//2. It becomes hard to organize as the code block increases


