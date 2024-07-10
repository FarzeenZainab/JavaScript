// exporting module
// always executed before the importing module
// console.log('exporting Module');

// top level await example
// blocking code
// console.log('start fetching users');
// await fetch('https://jsonplaceholder.typicode.com/users');
// console.log('Finish fetching user');

const shippingCost = 10;
export const cart = [];

// There are two types of exports in ES6 modules
// Named exports and default exports

// This variable / function is private to this module
// We will use export so we can use in other modules
// Named export
export const addToCart = (product, quantity) => {
  cart.push(product);
  console.log(`${quantity} ${product} added to the cart`);
};

// Exporting multiple variables at the same time

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity };

// We use default exports when we want to export 1 thing per module
export default (product, quantity) => {
  cart.push(product);
  // console.log(`${quantity} ${product} added to the cart`);
};
