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

const [team1Players, team2Players] = game.players;

// introduced in ES6 -> for-of loop

// used to iterate each element in an array
// we can use break and continue statement in for of loop

//in the for of loop we donot have to write counter variable and donot have to keep track of the counter inside the loop

// Here the player is an individual element in the array of team1Players, the loop will automatically iterate each element in the array
for (const player of team1Players) console.log(`Welcome: ${player}`);

// we can not directly use the counter variable i inside the for of loop. To use it we need to use array.entries().

// .entries() will return an array of each element inside of which first element will be the index of the element and the second element will be the value of the element

// example
for (const player of team1Players.entries()) console.log(player);

// as the .entries() returns an array we can desctruct that array to make our code simpler
for (const [i, player] of team1Players.entries()) console.log(i, player);
