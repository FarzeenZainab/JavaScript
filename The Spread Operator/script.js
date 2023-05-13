'use strict';

/*

    The Spread Operator
    
    --> DEFINITION 
    We can use the spread operator to expand any array into its elements, unpacking
    all the array elements at once separated by a comma

*/

// adding elements in an array method 1
const arr = [7, 8, 9];
// arr.unshift(1);

// adding elements in arr method 2
// const arr2 = [1, 2, arr[0], arr[1], arr[2]];
// console.log(arr2);

// modern way of adding elements and unpacking at the same time
const arr3 = [1, 3, ...arr];
console.log(...arr3);

// when we need to use the elements of an array individually then we can use the spread operator

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`here is your pasta ${ing1}, ${ing2}, ${ing3}`);
  },
};

const newMenu = [...restaurant.mainMenu, 'Gnocci', 'Speghetti'];
console.log(newMenu); // completly new array

// copy array
const mainMenuCopy = [...restaurant.mainMenu];

// join two or more arrays
const joinArr = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(joinArr);

// Iterable are all strings, arrays, sets and maps but not objects. Basically, all the data structures build inside JS are now iterables accept objects

const str1 = 'Farzeen';
const strSpread = [...str1, 'Z'];
console.log(...strSpread);

// we can not use ... opertor inside the template string cause it does not accept multiple values separated by commas
//  mulitple vlaues separated by a comma are usually expected when passing arguments to a function or an array

// const ingredient = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];

// restaurant.orderPasta(...ingredient);

// Spread Operator also work on objects even though it is not iterable
const resturant2 = {
  ...restaurant,
  founder: 'Farzeen',
  foundedIn: 1999,
};
console.log(resturant2);
