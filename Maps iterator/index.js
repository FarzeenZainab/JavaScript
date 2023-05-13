'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Data Structure: Maps
// Maps are alot more useful then sets
// Maps is a data structure that we can use to map values to keys

// data is stored in key and value pairs in maps just like objects

// The main difference between objects and maps are is that the keys can have any type, while in objects the key name can only be a string

// In maps it can be any type of key, It can be objects or arrays or strings or numbers litrely any thing

// We have this feature in JS but we barely use it, it is not neccessary to use all the tools available in the tool kit but you should know that it is there

// example

const rest = new Map();

// adding values inside a map we can use the set method
rest.set('name', "henny penny");
rest.set(1, 'Karachi'); // key with a number
rest.set(2, 'Lahore');
console.log(rest);

// setting each value using set method is not a good idea when we have to add numerous values

// we can use the map iterator
const question = new Map(
  [
    ['question', 'Which is the best programming language'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'JavaScript'],
    ['answer', 3],
    [true, 'Correct'],
    [false, 'Try Again']
  ]
);

console.log(question);

// convert objects to map
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

console.log(Object.entries(restaurant.openingHours));

const hoursMap = new Map(Object.entries(restaurant.openingHours));
console.log(hoursMap);

// logging question
console.log(question.get('question'))

// How can we iterate on map
for (const [key, value] of question) {
  typeof(key) == 'number' && console.log(`Option ${key}: ${value}`); 
}

const answer = Number(prompt("Your Answer"));
console.log(answer);

answer === question.get('answer') ? console.log(question.get(true)) : console.log(question.get(false));