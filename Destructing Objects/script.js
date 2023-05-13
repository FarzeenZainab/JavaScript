'use strict';

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
};

// to destruct an object we need to specify the exact name of the key as variable in the destructuring {}. In objects order of the element does not matter so we donot have to skip the element using empty spaces. Destructuring is very useful when we are making API calls and getting data from third party services
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// we can rename the variables
const {
  name: restaurantName,
  openingHours: restaurantHours,
  categories: tags,
} = restaurant;

console.log(restaurantName, restaurantHours, tags);

// how to set default values for undefined keys
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// we rename the variable with a colon and to set a default value we use =
// this is useful when we donot have hard coded data and getting data from somewhere else. It is useful to set default values like this

// mutating object's data
let a = 222;
let b = 2312;

const obj = {
  a: 23,
  b: 7,
  c: 14,
};

// as we know, to destruct the object we need to keep the destructing variable names same as the key names of the objects. So to mutate the variable the variable name should be same like the key variable, in this case a and b.

// to mutate variables a and b by asigning the value of obj.a and obj.b we need to wrap the statement in parenthesis to make it work

({ a, b } = obj);
console.log(a, b);

// Nested object
// destructing nested object and renaming the key variables to custom variable names
const {
  fri: { open: o, close: c },
} = openingHours;

console.log(o, c);

// destructing objects
const restaurant2 = {
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
};

const {
  name: resturantName,
  location: restuarantLocation,
  openingHours: resturantOpeningHours,
} = restaurant2;

console.log(restaurantName, restuarantLocationcation, resturantOpeningHours);
