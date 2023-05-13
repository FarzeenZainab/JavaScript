"use strict";

// 1. Destructuring
// Rest operator does the opposite of the spread operator. It will pack elements in the array

// Spread, because on the right side of =
// unpacks the array elements and create a new arr array
const arr = [1, 2, ...[3, 5, 6]];
console.log(arr);

// Rest Operator beacuse on the left side of the =
// pack the remaining elements in an array that is REST of the elements not destructed
const [a, b, ...others] = [1, 3, 4, 6, 7, 8];
console.log(others);

// using ... on the both sides of the array
const [c, d, e, f, g, h, i, j, ...other] = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  ...[8, 9, 10, 11, 12],
];

console.log(other);
console.log(j);

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

  orderPizza: function (mainIngre, ...otherIngre) {
    // ex: pizza needs atleast one ingredient and rest of the ingredients are optional so function should apdapt the number of parameters it requires to the number of arguments given when calling

    console.log(mainIngre);
    console.log(otherIngre);

  }


};

const [pizza, , , focaccia, ...restElements] = [...restaurant.mainMenu, ...restaurant.starterMenu];

console.log(pizza, focaccia, restElements);

// objects
const {sat, ...weekDaysTime} = {...restaurant.openingHours};

console.log(sat);
console.log(weekDaysTime);

// 2. Functions
// The second use case of the spread operator was to pass multiple arguments in a function at the same time

// In an addition function we have to pass arbitaroy amount of numbers and add them all together. We can not specify how many arguments there will be but we can use the rest pattern to pack all the values and pass it as one parameter



const add = function(...number){
  let sum = 0;
  for(let i = 0; i < number.length; i++){
    sum += number[i];
  }
  console.log(sum);
}

add(1, 5, 6, 7);

const x = [23, 5, 7];
add(...x);

// first argument is necessary and rest are optional
restaurant.orderPizza("mushroom", "onion", "olives", "spinach");

restaurant.orderPizza("mushroom");