'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const moveDate = new Date(acc.movementsDates[i]);
    const date = `${moveDate.getDate()}`.padStart(2, 0);
    const month = `${moveDate.getMonth() + 1}`.padStart(2, 0);
    const year = moveDate.getFullYear();
    const hours = moveDate.getHours();
    const minutes = moveDate.getMinutes();

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${date}/${month}/${year}, ${hours}:${minutes}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

// logout timer
const startLogoutTimer = () => {
  // // this logic only gives us seconds
  // // Set the time to five minutes
  // let time = 100;
  // // Call the timer every second
  // setInterval(function () {
  //   // In each callback call print the remaining time to the UI
  //   labelTimer.textContent = time;
  //   // Decrease 1 sec
  //   time--;
  //   // When the timer is 0 seconds, stop timer and logout user
  // }, 1000);
  // Converting seconds to minutes and seconds
};

///////////////////////////////////////
// Event handlers
let currentAccount;

// FAKE ALWAYS LOGGED IN
currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 100;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Setting current date
    const currDate = new Date();

    // format to display the date -> day/month/year
    // a good practice is to pad 0 at the begining of single digit numbers
    const date = `${currDate.getDate()}`.padStart(2, 0);
    const month = `${currDate.getMonth() + 1}`.padStart(2, 0);
    const year = currDate.getFullYear();
    const hours = `${currDate.getHours()}`.padStart(2, 0);
    const minutes = `${currDate.getMinutes()}`.padStart(2, 0);

    labelDate.textContent = `${date}/${month}/${year}, ${hours}:${minutes}`;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    startLogoutTimer();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    //Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = +inputLoanAmount.value;

  setTimeout(function () {
    if (
      amount > 0 &&
      currentAccount.movements.some(mov => mov >= amount * 0.1)
    ) {
      // Add movement
      currentAccount.movements.push(amount);

      //Add Loan date
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);
    }
  }, 5000);

  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// ------------- Coverting and checking numbers -------------

// In JS all numbers are represented internally as floating point numbers
// console.log(23 === 23.0);

// // numbers are alwaus stored in binary format i.e 0 and 1
// // this representation makes it hard to represent some fractions ex:

// // base 10 0-9
// // base 2: 0 and 1

// console.log(0.1 + 0.2);
// console.log(0.1 + 0.2 === 0.3);
// // you can not do really precise scientific and financial calculations in JS

// // Converting strings to numbers
// console.log(Number('23'));
// console.log(+'23'); // type coersion
// console.log(+'23X');

// // Parsing
// // redex is the base of the system that we are using eg base10 & base2
// console.log(Number.parseInt('24', 10));
// console.log(Number.parseInt('24em', 10));
// console.log(Number.parseInt('Ex24', 10));
// console.log(Number.parseInt('0110', 2));

// console.log(Number.parseFloat('24.33'));
// console.log(Number.parseFloat('24.33px'));
// console.log(Number.parseInt('24.33px'));

// // checking if the value is a number or not
// // we have 2 functions isNaN() and isFinite();

// // isNaN() - only use if want to check value === NaN (literaly)
// console.log(Number.isNaN(20));
// console.log(Number.isNaN('20'));
// console.log(Number.isNaN(+'20X'));
// console.log(Number.isNaN(23 / 0));

// // isFinite()
// console.log(Number.isFinite(20));
// console.log(Number.isFinite('20'));
// console.log(Number.isFinite(+'20'));
// console.log(Number.isFinite(+'20X'));
// console.log(Number.isFinite(23 / 0));

// -------------Lecture skipped Math and Rounding -------------

// ------------- end -------------

// -------------The Remainder Operator -------------
// // The remainder operator has some special use cases
// // It simply returns the remainder operator of a division
// console.log(5 % 2);
// console.log(8 % 2);

// // When is a number even?
// // The number is even if it is divisible by 2 and the remainder is 0 otherwise the number is odd

// console.log(6 % 2);
// console.log(10 % 2);
// console.log(7 % 2);
// console.log(5 % 2);

// const isEven = n => n % 2 === 0;
// console.log(isEven(8));
// console.log(isEven(3));
// console.log(isEven(58453));
// console.log(isEven(103456676));

// // color alternate row of the movements
// labelBalance.addEventListener('click', () => {
//   [...document.querySelectorAll('.movements__row')].forEach((row, i) => {
//     if (i % 2 === 0) {
//       row.style.backgroundColor = '#f7f7f7';
//     }

//     // every third row
//     // if (i % 3 === 0) {
//     //   row.style.backgroundColor = 'blue';
//     // }
//   });
// });

// ------------- Creating Dates -------------

// Create a date => there are 4 ways of creating dates in JS

// // 1. Using new Date method
// const now = new Date();
// console.log(now);

// // 2. Parse the date using a string date
// console.log(new Date('Feb 16 2023 09:03:58'));

// // 3. Writing the date directly
// console.log(new Date('November 23, 1999'));
// // giving string date like this is not reliable and can create some issues
// // but it is ok to use if the string date is created by JS itself

// // Parsing dates given in our accounts data
// console.log(new Date(account1.movementsDates[0]));

// // 4. Writing in comma separated list
// console.log(new Date(2038, 10, 23, 15, 36, 5));
// // months in JS is 0 indexed means Jan -> 0, Feb -> 1

// // JS will autocorrect if the date is valid and set the next valid date
// console.log(new Date(2038, 10, 31, 23, 36, 5));

// // we can also pass the amount in milliseconds since the begining if the UNIX time
// console.log(new Date(0));
// console.log(new Date(3 * 24 * 60 * 60 * 1000));

// // These dates that we created here are just annother type of objects, which means that these dates also have some special properties and methods that we can use

// // We can use these methods to get or set components of a date

// Working with dates
// const future = new Date(2038, 10, 23, 15, 36);
// console.log(future);
// console.log(`Full Year: ${future.getFullYear()}`);

// // there is also getYear() but, never use that

// console.log(`Month: ${future.getMonth()}`);
// console.log(`Day: ${future.getDate()}`); //This is returns day on date, weired name
// console.log(`Day of the week: ${future.getDay()}, 0 based`);
// console.log(`Hours: ${future.getHours()}`);
// console.log(`Minutes: ${future.getMinutes()}`);
// console.log(`Seconds: ${future.getSeconds()}`);

// // We can get a nicely formated string of our date by using toISOString() method
// // ISO string follows some international standards
// console.log(`ISO String: ${future.toISOString()}`);

// // We can also get the timestamps for the date
// // getTime returns milliseconds passed since 1970
// console.log(`Timestamp: ${future.getTime()} | milliseconds passed since 1970`);
// console.log(
//   `Date created based on the milliseconds \n${new Date(future.getTime())}`
// );

// // Timestamps are so important that we can have a special method to get the timestamp of the time right now
// console.log(Date.now());

// // So far we have used the get____() versions of all of these method, we also have set___() versions for dates as well
// future.setFullYear(2040);
// console.log(future);

// ------------- Working with setTimeout() and setInterval() -------------
// these timers are asynchronous in nature and will never stop code execution

// setTimeout will execute a block of code after certain time has passed.

// When JS hits setTimeout it will basically keep counting the time in the background and registers the callback function passed to be called after that time has elapsed and then immediatly JS will move on to the next line which is the console.log() in this case
setTimeout(() => console.log('Hi there'), 3000);
console.log('Waiting, this is the line after setTimeout');

// How to pass arguments in the setTimeout function?
// passing arguments to the setTimeout function is different because we are not calling the callback function ourselves like ()

// all the arguments that we pass after the delay will be the arguments to the function
// setTimeout(
//   (ing1, ing2) =>
//     console.log(
//       `Hi there! Your first ingredient is: ${ing1} and second ingredient is: ${ing2}`
//     ),
//   3000,
//   'olives',
//   'spanich'
// );

// How to cancel the timer? So, before the delay has passed i.e 3s in this case have passed we can cancel the timer

// Example:
const ingredients = ['olives', 'tomato'];
const makePizza = setTimeout(
  (ing1, ing2) =>
    console.log(
      `Hi there! Your first ingredient is: ${ing1} and second ingredient is: ${ing2}`
    ),
  3000,
  ...ingredients // this spreads the elements and comma separate them
);

// we use clearTimeout to clear the timer and pass in the name of the timer
if (ingredients.includes('spanich')) clearTimeout(makePizza);

// In setTimeout the callback function only executes once after the delay

// What should we do if we want to run a function over and over again like every five-six seconds
// We should use setInterval if we want to run a block more than once after the specified delay

// setInterval
// setInterval(function () {
//   console.log(new Date());
// }, 1000);

// Implementing a counter timer
let time = 1000;
setInterval(() => {
  console.log(time--);
}, 1000);
