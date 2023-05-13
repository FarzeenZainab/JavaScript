'use strict'

//a block of code that can be called again and again

function foodProcessor(apples, milk, sugar){
    //Food Processor
    const juice = `juice with ${apples} and liters of ${milk} milk with ${sugar} spoon of sugar`
    return juice;   
    //return is the result of the function, to gest its value you need to store its value in a varible
}

const val = foodProcessor(3, 1, 5);
console.log(val);

//Difference between function expression and function declaration

/*
    function declaration is a simple function declared in our script 
    where function expression is a function which does not have a name
    and the value is stores in a variable

    we can then call that function by using the variable name we 
    gave it, then we can pass the parameter and use its value

    Another differece between the two is that we can not use the function
    expression before the declaration that means that the function expression
    can only be used after it is declared but we can call function declaration anywhere
    we want. The reason of this behavior is due to hoisting
*/

    //example

    const exp = function(a, b, c){
        const res = a + b + c;
        return res;
    }

    console.log(exp(23, 54, 55));