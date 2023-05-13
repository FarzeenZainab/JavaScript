
/**
 * Execution context contains 
 * variable environment
 * scope chain and 
 * this keyword
 * 
 */

// // Variable hoisting
// // temporal dead zone for lt and 
// console.log(me);
// console.log(job);
// console.log(year);
// var me = "Farzeen";
// // ===================
// let job = "Programmer";
// const year = 1999;


// Function hoisting
// console.log(addDecl(2,3));
//console.log(addExp(2, 3));
//console.log(arrExp(2, 3));


// function addDecl(a, b){
//     return a + b;

// }

// var addExp = function(a, b){
//     return a + b;
// }

// const arrExp = (a, b) => a + b;

// const confirmit = confirm("Are you sure");

// if(confirmit == true){
//     console.log("confirmed");
// } else{
//     console.log("not confirmed");
// }


// What is Hoisting

/*
    Hoisting: Makes some variable accessible or usable in the code before it is actually declared.
    "Variables lifted ti the top of their scope" -- looks like on the surface

    But behind the scene
    The code is scanned for variable declaration before execution, and for each variable, a new property is created
    in the variable environment.

    Hoisting is not the same for all variable types

    --------------------------------------------------------
    Function declaration
        hoisted: Yes
        initial value: Actual function 
        Scope: block (only for strict mode) / if not using strict then functions are function scoped

        Because of hoisting we can call function declartions before it is actually declared in the code.

    var variables
        hoisted: yes
        inital value: undefined
        Scope: function

        Becuase the value is undefined, var introduces alot of bugs in the program

    let and const
        hosited: no (technically yes but not in practice)
        value: <uninitialed> shows error, TDZ
        Scope: blocked

    function expressions and declarations:
        hoisted: It depends whether they are declared using var or const or let
        value:
        Scope

        any function expression or arrow function declared with var is hoisted and initial value is set to undefined
        any function expression or arrow function declared with let or const is not hoisted and the is not accessible in
        the temporal dead zone.

*/ 



/**
 * 
 *      Hoisting in practice
 * 
 */



//  Hoisting with variables
console.log(me);
console.log(job);
console.log(email);

// temporal dead zone of the variable declared with let or const is from the top of the current scope
// until the point in the code where the code is defined 
// lets try to use these three variable before declaring them
var me = "Farzeen";
let job = "Developer";
const email = "@zaidi";

// Hoisting with Function
 load();

function load(){
    console.log(`hi`);
};




