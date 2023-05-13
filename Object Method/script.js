'use strict'
/*const person1 = {
   details: [],
   collectInfo: function(){
       //here we are setting new value pairs for person object using this.key notation
       this.firstName = prompt(`Enter your first name`);
       this.lastName = prompt(`Enter your last name`);
       this.fatherName = prompt(`Enter your father's name`);
       this.motherName = prompt(`Enter your mother's name`);

       //Pushing info inside details property
       this.details.push(this.firstName, this.lastName, this.fatherName, this.motherName);
       console.log(this.details);
   } 
}

//person.collectInfo();

const person = {
    firstname: "Chris",
    lastname: "Doe",

    fullname: `${this.firstname} ${this.lastname}`,
}

console.log(person.fullname);
*/

// Jonas is 46 years old teacher, and he has a driver's license

const person = {
    name: 'Jonas',
    age: 46,

    driversLicense: function(){
        return((this.age > 18) ? 'a' : 'no') ;
    },

    profession: 'teacher',

    details: `${this.name} is a ${this.age} years olf ${this.profession}, and has ${this.driversLicense} driver's license`
}

console.log(`${person.name} is a ${person.age} years olf ${person.profession}, and has ${person.driversLicense()} driver's license`); 