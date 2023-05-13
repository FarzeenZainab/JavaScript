'use strict';

const rest1 = {
  name: 'Capri',
  numGuest: 20,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

rest2.numGuest = rest2.numGuest || 10;
console.log(rest1.numGuest);
console.log(rest2.numGuest);
