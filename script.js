// importing module
console.log('importing Module');

// all importing statements are hoisted to the top
import './shoppingCart.js';
import {
  addToCart,
  totalPrice,
  totalQuantity as quantity,
} from './shoppingCart.js';

// importing everything from inside a module at once
import * as ShoppingCart from './shoppingCart.js';

addToCart('Apples', 2);
console.log(totalPrice, quantity);
console.log(ShoppingCart.totalPrice, ShoppingCart.totalQuantity);

// default import
import add from './shoppingCart.js';
add('bread', 5);

// importing named and default exports at once
import addItem, {
  addToCart as addNewItem,
  totalPrice as price,
} from './shoppingCart.js';
addItem('oranges', 5);
addNewItem('banana', 5);
console.log(price);
