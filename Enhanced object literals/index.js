'use strict';

const openingHours = {
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
};

// we want to still have opening hours as the property of the restuarant object

// before es5 restuarant = {openinghours = openinghours}

// the second enhancement in ES6 is writing method in and object

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // old method of declaring a method
  // orderPasta: function (ing1, ing2, ing3) {
  //   console.log(`here is your pasta ${ing1}, ${ing2}, ${ing3}`);
  // },

  //enhanced ES6 object literal
  openingHours,

  // enchanced function declaration
  orderPasta(ing1, ing2, ing3) {
    console.log(`here is your pizza with ${ing1}, ${ing2} and ${ing3}`);
  },
};

restaurant.orderPasta('Peperroni', 'Meat', 'Double Cheese');
