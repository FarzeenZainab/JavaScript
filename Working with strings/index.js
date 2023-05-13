'use strict';


/**
 * 
 * Working with strings Part 1
 * 
 * 
 */

const airline = 'AirSial Pakistan';
const plane = 'A320';

// getting string at a certain position
// we can use bracket notation to find a character at a certain position
// This functionality has been introduced in ES5 which make a string behave like an array. Because of this we can use some array functions on strings as well

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[2]);

// finding length of a string
console.log(airline.length);
console.log('Farzeen'.length);

// String methods

// indexof: find the position of a certain letter inside a string
// string are also zero-based (zero-indexed)
console.log('Farzeen'.indexOf('e'));

// to get the position of last index
console.log('Farzeen'.lastIndexOf('e'));

// we can search for entire word
console.log(airline.indexOf('Pakistan'));

// indexof method is case sensitive

// we can use indexof method with combinition of slice method to extract a string

// slice method console.log
console.log(airline.slice(8)); // argument is the position from where the extraction will start

// slicing a string will not change the underlying string variable. we can not mutate strings because they are primitives

// we can also specify begin and end parameter
console.log(airline.slice(8, 10));

// Many times we do not know the string that we receive yet, so we can not directly extract the string
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// we can give a negative value is the parameter
// so it will start extracting letters form the end

console.log(airline.slice(-3));
console.log(airline.slice(1, -1));

// write a function which receives if the airplane seat is middle seat or not. log the result in the console

const checkMiddleSeat = function(seatNo){
  // check if the string we receive is a B or an E
  const number = seatNo.slice(seatNo.lastIndexOf()).toUpperCase();
  number ==  'B' || number == 'E'  ? console.log('It is a middle seat') : console.log('It is not a middle seat');

  
}

checkMiddleSeat('11E');
checkMiddleSeat('23d');
checkMiddleSeat('3B');

// Question: Why strings have methods? It is a primitive data type and not an object so why we have methods attached to strings

// Answer: What JS does when we declare a string, it takes that string and BTS convert it into an object. 

// Example const a = 'abc'; will be new String('abc') for JS. So it will be an object and we can use string functions

//  this process is called boxing.


/**
 * 
 * Working with strings Part 2
 * 
 * 
 */

// Changing the case of a string
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// fix the capatalization in a passenger name

// long way
// const passenger = 'fArZeEn'; // Farzeen
// const passengerLower = passenger.toLowerCase();
// const passengerFirstLetter = passengerLower.slice(0, 1);
// const upperLetter = passengerFirstLetter.toUpperCase();

// const passengerName = upperLetter.concat(passengerLower.slice(1));

// console.log(passengerName);

// short way

/**
 * Psuedo Code
 * 1. convert whole name to lowercase
 * 2. extract the first aplhabet of the name
 * 3. concatinate it with the rest of the alphabets in the name
 */

let pName = "FarZEEn";
let pNameLower  = pName.toLowerCase();
let nameFirstLetter = pNameLower[0]; // because we can use [] in strings to get a character at x position
nameFirstLetter = nameFirstLetter.toUpperCase();
pName = nameFirstLetter + pNameLower.slice(1);
console.log(pName);

// Example 2:
// Comparing Emails

const email = "hello@jonas.io";
let loginEmail = "   Hello@Jonas.Io   \n";

// console.log(email == loginEmail); // result: false

// // when we check for this type of userinput the first thing we do is to convert it into lowercase
// loginEmail = loginEmail.toLowerCase();
// loginEmail = loginEmail.trim();
loginEmail = loginEmail.toLowerCase().trim();
console.log(loginEmail);
console.log(email == loginEmail);

// there are two new trim methods in ES2019, in which you can choose to only trim the start or the end of the string

/**
 *  Important Part:
 *    Replacing Parts of Strings
 */

const priceGB = "288,87GBP"; 

// In UK , is used to separate decimal where as in the US . is used to separate decimals. The task in to find where the , is present in the string and then replace that comma with a decimal

// 1. Replace GBP with $
// 2. Replace , with .

const priceUS = priceGB.replace(',', '.').replace('GBP', '$');
console.log(priceUS);

let announcement = "All passengers come to boading door 23, Boarding door 23!";
// It is not called door it is called gate. So replace door with gate
// announcement = announcement.replaceAll("door", "gate");
// console.log(announcement);

// replace() only replaces the first occurrance of the specified string.
// to replace all the occurrances we need to use replaceAll() method

// string methods will never mutate the orignal string but creates a new one.

// if replaceAll method is not working for some reason then we can use regular expression

// target all the occurrances of door 

announcement = announcement.replace(/door/g, 'gate');
console.log(announcement);

// replace method is also case-sensitive
// so before replaing anything in the string; first convert that string to lowercase

// There are three methods that returns booleans; these are includes(), startsWith(),  endsWith()
const airplane = 'A23neo';
console.log(airplane.includes('23'), airplane.startsWith('A2'), airplane.endsWith('bus'));

// check if the airplane is part of the new airbus family
if(airplane.startsWith('A23') && airplane.endsWith('neo')) console.log("The airplane is a part new airbus fleet");

// so when ever you have to make a decision based on the content of a string, you should use these methods

// Practice Exercise
// check if the baggage of a certain passenger is allowed to be checked in
const checkBaggage = function(item){
  const items = item.toLowerCase();
  if(items.includes("gun") || items.includes("knife") || items.includes("food")){
     console.log("You are not allowed to aboard the plane"); 
  } else{
    console.log("Welcome Aboard!");
  }
}

checkBaggage("I have a laptop, some Food and a pocket Knife");
checkBaggage("I have some Socks and Camera");
checkBaggage("Got some Snacks and a Gun for PrOtection");

// Part 3
// Split() method in JS is used to split an array using a divider
console.log("This+is+a+very+nice+string".split("+"));
const [firstName, lastName] = "Farzeen Zainab".split(" ");
console.log(firstName, lastName);

// Join method
// This is the opposite of split method
const arr = ["Ms.", firstName, lastName.toUpperCase()].join(" ");
console.log(arr);

// Capatize name using split and join
const pass = "jessaca ann smith davis".split(" ");
console.log(pass);


// First we will split the surname, firstname, middlename and lastname
//  next we use a for of loop to extract the first letter in each subname and convert to uppercase
//  after than we will slice the rest of the alphabets in each subname and concatinate with the uppercase first letter
// and we will then push the subname in to an array
// to rejoin them into singal name we will rejoin them using the join method
const capatizeName = function(inputName){
  let arrNameCap = [];

  for (let name of inputName.split(" ")) {
    name = name.toLowerCase();
    const firstLetter = name[0].toUpperCase();
    const capatalizedName = firstLetter + name.slice(1);
    arrNameCap.push(capatalizedName);
  }

  return arrNameCap.join(' ');
}

// console.log(capatizeName("syeda farzeen zainab zaidi"));
// console.log(capatizeName("SyedA FarZEEN ZAinab"));
// console.log(capatizeName("HaSaN SyED"));

// The other way of doing the same thing is to use replace method
const capatizeName2 = function(inputName){
  let arrNameCap = [];

  for (let name of inputName.split(" ")) {
    const lowered = name.toLowerCase();
    const fixed = lowered.replace(lowered[0], lowered[0].toUpperCase());
    arrNameCap.push(fixed);
  }

  return arrNameCap.join(' ');
}

console.log(capatizeName2("syeda farzeen zainab zaidi"));
console.log(capatizeName2("SyedA FarZEEN ZAinab"));
console.log(capatizeName2("HaSaN SyED"));

// Padding a string: means to add extra characters to make the string of a certain length
// For example we have a string whose desried total length should be 25 characters long. The string right now has 16 characters so, make it 25 characters long we have to padd with some extra characters 
const message = "go to gate 23!";
console.log(message.padStart(25, " -"));
console.log("Farzeen".padStart(25, " -"));

// we can use padStart(totalLength, character to padd with string) and 
// padEnd(totalLength, character to padd with string)

console.log("Farzeen".padStart(25, " -").padEnd(35, "-"));

// So where should we use this?
// we can use this where we have a very long string but only want to show a preview
// hello! can you please... (example like this) 
// this is called masking

// create a function which will mask a long string and show a preview only
const maskMessage = function (message) {
  const previewLength = message.slice(0, 20);
  return previewLength.padEnd(23, ".");
}

console.log(maskMessage("Hello! This is Farzeen. Thanks for sending those notes they are really helpful and I am learning alot from them. Thanks Again!"));

// mask credit Card Number
const maskCreditCard = function (number){
  // so the task is to take out all the numbers except the last four digits and then padStart it will some symbols
  const numberString = String(number);
  const lastFour = numberString.slice(-4);
  console.log(lastFour.padStart(14, '**** ')); // to return the same length use .length instead of 14
}     

maskCreditCard(12334567889);
maskCreditCard(12334567889);

// Repeat
const message2 = "Bad Weather... All departures Delayed... ";
console.log(message2.repeat(4));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${' ✈ '.repeat(n)}`)
}

planesInLine(3);
planesInLine(5);
planesInLine(2);

const flightsAPI =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const flights = flightsAPI.split('+');


for(const flight of flights){
  
  const [type, from, to , time] = flight.split(";");
  let formated = type.replace(type[0], "").replace("_", " ") + " From " + from.slice(0, 3).toUpperCase() + " TO " + to.slice(0, 3).toUpperCase() + ` (${time.replace(":", "h")})`;

  if(formated.search("Delayed") != -1){
    formated = "🔴 " + formated;
  }

  
  console.log(formated.padStart(44));
  
}




