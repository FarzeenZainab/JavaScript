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

// Sets is a collection of unique values, that means a set can never have duplicated values

const orders = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);

// set is not same as an array becuase it only have unique values, sets are iterable
console.log(orders);

// we can iterate strings in sets
const username = new Set('Farzeen Zainab');
console.log(username);

// we can get size of the set using the size
console.log(orders.size)

// we can check if an element is in a set
console.log(orders.has("biryani"));

// adding new elements to set
orders.add("Garlic");
orders.add("Garlic");
console.log(orders);

// we can also delete elements in a set
orders.delete("Garlic"); 
console.log(orders);

// indexes doesnot work in sets, because there are no indexes and we can not take value out of a set

// delete all the elements of a set
// orders.clear();

// sets are iterable meaning that we can loop over them
for(const dish of orders){
  console.log(dish);
}

//  The real use case of a set is to delete duplicate values of an array

const arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
const arrSet = new Set(arr);
const uniques = [...arrSet];
console.log(uniques);
console.log(arrSet.size);

// counting how many letters are there in a string
console.log(new Set("Farzeen").size);

// sets are not to replace arrays


