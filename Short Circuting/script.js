'use strict';

// || operator can use ANY data type, return any data type, short-circuting

// || will imediatly return the first true value immediatly without looking at the other values

// In case of OR, the expression is evaluated until we get one true result because the result will always be true, independent of the further conditions.

console.log('---------- OR ---------');
console.log(3 || 'Jonas');
console.log(false || 'Jonas');
console.log(true || 33);
console.log(undefined || 'jonas');
console.log(undefined || null);

const restaurant = {
  restaurantName: 'Henny Penny',
};

// we can set default values and return if the variable does not have a value

const moving = true;
const driving = moving || 'not moving';
console.log(driving);

restaurant.numGuests = false;
const sittingGuests = restaurant.numGuests || 'no guests';
console.log(sittingGuests);

// if we use ternary operator or if-else statement then it will be a lengthy process
const sittingGuests1 = restaurant.numGuests ? restaurant.numGuests : 'no guest';
console.log(sittingGuests1);

let sittingGuests2 = restaurant.numGuests;
if (sittingGuests2) {
  sittingGuests2 = sittingGuests2;
} else {
  sittingGuests2 = 'no guests here';
}

console.log(sittingGuests2);

// Short circuting in AND operator
// AND operator will return the first falsy value immediatly without looking at the other value

// In case of OR, the expression is evaluated until we get one true result because the result will always be true, independent of the further conditions.
console.log('---------- AND ---------');
console.log(0 && 'Jonas');
console.log('Jonas' && 0);
console.log(false && 1);
console.log('hello' && null && 'Jonas');

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

  orderPizza: function (mainIngre, ...otherIngre) {
    console.log(mainIngre);
    console.log(otherIngre);
  },
};

// checking if a method exists
if (restaurant2.orderPizza) {
  restaurant2.orderPizza('mushrrooms', 'tomato', 'capsicum');
}

// we can simply use && short circuiting
restaurant2.orderPizza &&
  restaurant2.orderPizza('mushrrooms', 'tomato', 'capsicum');
