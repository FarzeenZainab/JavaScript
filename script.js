// importing module
// console.log(
//   'importing Module ---- blocked code execution because shoppingCart.js has top level await'
// );

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
// console.log(totalPrice, quantity);
// console.log(ShoppingCart.totalPrice, ShoppingCart.totalQuantity);

// default import
import add from './shoppingCart.js';
add('bread', 5);
add('oranges', 5);
add('bananas', 5);

// live connect to the cart
import { cart } from './shoppingCart.js';

// console.log(cart);

// importing named and default exports at once
// import addItem, {
//   addToCart as addNewItem,
//   totalPrice as price,
// } from './shoppingCart.js';
// addItem('oranges', 5);
// addNewItem('banana', 5);
// console.log(price);

// Top level await

// before top level await we have to do the fetching inside an async function
// async function x () => {
// await fetch call...
// }

// console.log('start fetching');

// const getPosts = await fetch('https://jsonplaceholder.typicode.com/posts');
// const posts = await getPosts.json();
// console.log(posts);

// This feature is easier to use and modern but it actually
// blocks the execution of the entire block now, making it synchronous

// We can verify it by slowing down the request by changing throttling to slow 3G

// console.log('code block after request');

// const getLastPost = async () => {
//   const getPosts = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const posts = await getPosts.json();
//   console.log(posts);

//   return { title: posts.at(-1).title, text: posts.at(-1).body };
// };

// const lastPost = getLastPost(); // if log this, it will not return us the value
// Because it is an async function it will return a promise
// To get hold to value return by the promise we have to use a promise
// console.log(lastPost);

// get the value from the promise
// Not very clean, so we can use top level await here
// lastPost.then(last => console.log(last));

// const lastPost2 = await getLastPost();
// console.log(lastPost2);

// IMPLICATION: If one module import a module that uses a top level await, then
// the importing module will wait for the imported module to finish execution of the
// blocking code
// example is in shoppingCart file

// THE MODULE PATTERN
const shoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = (product, quantity) => {
    cart.push(product);
    console.log(
      `${quantity} ${product} added to the cart (shipping cost is ${shippingCost})` // closure
    );
  };

  const addStock = (product, quantity) => {
    cart.push(product);
    console.log(`${quantity} ${product} order from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

shoppingCart2.addToCart('apples', 4);
shoppingCart2.addToCart('pizza', 4);
console.log(shoppingCart2.shippingCost); // not accessible

const formatString = list => {};
formatString([
  [0, 'ab'],
  [6, 'cd'],
  [0, 'ef'],
  [0, ''],
]);

import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

console.log(cloneDeep);

const state = {
  cart: [
    { produce: 'bread', quantity: 5 },
    { produce: 'pizza', quantity: 8 },
  ],
  user: {
    loggedIn: true,
  },
};

const stateClone = Object.assign({}, state); // clones the object but, it still is referencing to state

console.log('Object.assign', stateClone);

const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;

console.log('deep clone', stateDeepClone);
