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

// In some cases we donot know if a property exists inside an object. We usually use if-else statement to check if the property exists with the combination of && operator if we are checkin for more than one

//  lets pretend we donot know if the property mon exists, assuming that we are getting this data from a web service.

// example:

// console.log(restaurant.openingHours.mon); // result: undefined
// console.log(restaurant.openingHours.mon.close); // error is undefined.close

// to avoid this error we first have to check if resturant.openingHours.mon exists

// old method
if (restaurant.openHours && restaurant.openingHours.mon && restaurant.openingHours.close) {
    console.log(restaurant.openingHours.mon.close);
}


// console.log(restaurant.openingHours.wed);
// console.log(restaurant.openingHours.wed.close);

// so instead of writing multiple if conditions and using && operator numerous times we can use JS optional chaining feature

// ?. is used in optional chaining to check if the property of an object before the ? exists in an object or not

// Example
console.log(restaurant.openingHours.mon?.close); //if mon exists than only read the property of close if not return undefined

console.log(restaurant.openingHours?.mon);

// exists means here also nullish concept, if a property exists that is not null and not undefined. If it is zero or an empty string than it still exists

// if a property does not exists than it will return undefined
// thus there is no errors shown that the property does not exists

// The same concept of optional chaining is applicable on arrays as will

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// what we want to do is to loop over the array and check if the retuarant is open or close on each of the day

// when we want to call an objects property using variable name, we will use bracket notation and when we want to use key we will use . notation

// Example: in for of loop day is a variable and we want to call as it is the property of the restaurant object so we have to use bracket notation because the dot notation will fail here

// will not work restaurant.openingHours.day

// will work restaurant.openingHours[day]

for (const day of days) {
  console.log(`${day}: opens at:${restaurant.openingHours[day]?.open}`);
  // console.log(`${day}: closes at:${restaurant.openingHours[day]?.close}`);
}


// so far we have only checked if a property exists inside an object. How can we check if a METHOD exists inside an object

// the same way we check the properties using optional chainging, we can methods as well
 
console.log(restaurant.order(2, 0));
console.log(restaurant.diningCustomers?.(2, 5));

// array: we can check if the array is empty
const user = [
  {
    name: "Farzeen",
    email: "farzeen@gmail.com"
  }
]

console.log(user[0]?.name ?? "user name is empty");
console.log(user[2]?.name ?? "user name is empty");

// without optional chaining we have to do it this way
if (user.length > 0) console.log(user[0].name);
else console.log("user name is empty");