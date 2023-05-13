'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {

  // mon:{
  //   open: 12,
  //   close: 0, 
  // },

  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },

  openingHours,

};

// we can loop over arrays using for of looping. Arrays are iteratable

// we can also loop over objects that are not iterable, we can iterate in indirect way

// indirect way means that we are not looping over object but an array inside of which object key and properties are stored

const restaurantOpenHours = {

  mon:{
    open: 12,
    close: 0, 
  },
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// 1. looping over keys
//Object.keys() creates and array of the object's key passed as argument
const properties = Object.keys(restaurantOpenHours);
console.log(properties); 

// number of days a restaurant is open
console.log(`We are open ${properties.length} days`);

let openStr = `we are open on `;
for (const day of properties) {
  openStr += `${day}, `;
}

console.log(openStr);

// When we want to loop over object values
const objPropertyValues = Object.values(restaurantOpenHours);
console.log(objPropertyValues)

// Next we want to loop over both the values and keys together = entries
const entriesProperties = Object.entries(restaurantOpenHours);
const [mon, thu, fri, sat] = entriesProperties;
console.log(mon);











