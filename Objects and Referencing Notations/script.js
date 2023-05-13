'use strict'

const cell = {
    cellname : 'AA batteries',
    color : 'white',
    cellcompany : 'Power cell',
}

console.log(cell)

//Dot notation
//We can not write any expression using the notation
console.log(cell.color);

//Braket notation
//We can write exspressions between the barckets

//Syntax

// object['key' here can be given the expression]

const exp = 'cell';
console.log(cell[exp + 'name']);
//above statement will compute as cell name and will give he property name exp + name => cellname and this is the name of the key


//Challenge

const jonas = {
    firstname: 'Jonas',
    lastname: 'Schemetmann',
    age: 24+21,
    friends: ['Michael', 'Peter', 'Steven']
}

console.log(`${jonas.firstname} has ${jonas.friends.length} friends, and his best friend is ${jonas.friends[0]}`);
