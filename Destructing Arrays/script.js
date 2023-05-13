'use strict';

//
/* 
    
    Array Destructuring
    --> DEFINITION : Destructuring is an ES6 feature and is basically a way of unpacking values from an array into
    separate variables. In simple words destructuing means is to breakdown a complex array into a smaller data
    structure like a variable.

    We destruct complex arrays by retreiving elements of the array and storing that in simple variables.

*/

// how we do it normally
const arr = [1, 3, 5, 7];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// now in destructing we can declare all the three vaiables at the same time
// we donot have to use indexes to store elements in variables. Destructure will do automatically
const [d, e, f, g] = arr; // destructing assignment
console.log(d, e, f, g);

// we are not destroying our orignal array we are just destructuring
console.log(arr);

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const [first, second] = restaurant.categories;
console.log(first, second);

const [starterMenuItem1, starterMenuItem2, starterMenuItem3] =
  restaurant.starterMenu;
console.log(starterMenuItem1, starterMenuItem2, starterMenuItem3);

// How to skip the elements we donot need
// Example
const [item1, , item2] = restaurant.categories;
console.log(item1, item2);

// how to flip/switch the values of variables
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);
// const temp = main; // normal way
// secondary = temp;

//with destructing we can do it easily by just reassigning the value below
[main, secondary] = [secondary, main];
console.log('flipped ', main, secondary);

// order food
const [starterItem, mainItem] = restaurant.order(2, 0);
console.log('The starter dish is: ', starterItem);
console.log('The main dish is:', mainItem);

// Destructuring in Nested Array

const arrNested = [
  ['Focaccia', 'Bruschetta', 'Garlic Bread'],
  ['Pizza', 'Pasta', 'Risotto'],
  ['Via Angelo Tavanti', 23, 'Firenze, Italy'],
];

const [[dish1, dish2], , [, number, city]] = arrNested;
console.log(dish1, dish2, number, city);

const [[dish01, dish02, dish03, dish04 = 'coming soon!'], arr2, arr4] =
  arrNested;
console.log(dish01, dish02, dish03, dish04, arr2, arr4);

//  We can set defult values for the element undefined in an array
const arr3 = [1, 2, 3, 4];
let [e1, e2, e3, e4, e5, e6] = arr3;
// console.log(e1, e2, e3, e4, e5, e6);
console.log(e1, e2, e3, e4, (e5 = 1), (e6 = 1));
