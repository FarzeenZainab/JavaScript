'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP
// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const euroToUSD = 1.1;
const accounts = [account1, account2, account3, account4];

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

let currentAccount;

/* --------------------------------------------------------------- */
// Functions
// It is a best pratice to pass in the varaiable as an argument in a function and so the function does not have to work with global variables

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (move, index) {
    // check if it is a deposit or a withdrawal
    const type = move > 0 ? 'deposit' : 'withdrawal';
    // creating html template to append on the frontend
    const htmlTemplateMovements = `
          <div class="movements__row">
            <div class="movements__type movements__type--${type}">${
      index + 1
    } ${type}</div>
            <div class="movements__date">3 days ago</div>
            <div class="movements__value">${move}€</div>
          </div>
      `;
    // appending the template html
    containerMovements.insertAdjacentHTML('afterBegin', htmlTemplateMovements);
  });
};

// This function accepts an array as an argument and add a new property of username in each of the object element inside of that array
const username = function (accs) {
  accs.forEach(function (acc) {
    const createUsername = function (name) {
      return name
        .toLowerCase()
        .split(' ')
        .map(function (name) {
          return name[0];
        })
        .join('');
    };
    acc.username = createUsername(acc.owner);
  });
};

// Finds the Maximum Value using the Reduce method
const maxValue = account1.movements.reduce((acc, mov) => {
  if (acc > mov) {
    return acc;
  } else {
    return mov;
  }
}, account1.movements[0]);

// Calculates Total Balance
const calcPrintBalance = function (acc) {
  return (acc.balance = acc.movements.reduce(function (acc, mov, i) {
    return acc + mov;
  }));
};

// Deposits converted in USD
const depositsUSD = function (movements) {
  return movements
    .filter(mov => mov > 0)
    .map(mov => mov * euroToUSD)
    .reduce((acc, mov) => (acc += mov), 0);
};

// Withdrawals converted in USD
const withdrawalsUSD = function (movements) {
  return movements
    .filter(mov => mov < 0)
    .map(mov => mov * euroToUSD)
    .reduce((acc, mov) => (acc += mov), 0);
};

// Displays Summary
const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => (acc += mov), 0);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => (acc += mov), 0);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, int) => (acc += int), 0);

  labelSumIn.textContent = `${incomes}€`;
  labelSumOut.textContent = `${Math.abs(out)}€`;
  labelSumInterest.textContent = `${interest}€`;
};

const showUI = function (currAcc) {
  // Display Balance
  labelBalance.textContent = `${calcPrintBalance(currAcc)}€`;

  // Display Summary
  calcDisplaySummary(currAcc);

  // Display Movements
  displayMovements(currAcc.movements);
};

const totalAccBalance = accs => {
  const movs = accs.map(acc => {
    return acc.movements;
  });
  const amount = movs.flat().reduce((acc, curr) => (acc += curr), 0);
  return amount;
};

//

const totalAccBalance2 = accs => {
  const amount = accs
    .flatMap(acc => {
      return acc.movements;
    })
    .reduce((acc, curr) => (acc += curr), 0);
  return amount;
};

/* --------------------------------------------------------------- */
// Event Handlers

// Login
btnLogin.addEventListener('click', function (e) {
  // clicking the button or pressing the enter is the same thing both submits the form and both will trigger this event listener
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    const firstname = currentAccount.owner.split(' ')[0];
    labelWelcome.textContent = `Welcome back, ${firstname}!`;
    containerApp.style.opacity = 1;

    // Clear input fields;
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // show UI
    showUI(currentAccount);
  } else {
    console.log('Incorrect Username or Password!');
    containerApp.style.opacity = 0;
  }
});

// Transfer Amount
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const transferTo = accounts.find(acc => {
    return acc.username === inputTransferTo.value;
  });

  const amount = Number(inputTransferAmount.value);

  if (
    transferTo &&
    amount > 0 &&
    transferTo.username !== currentAccount.username &&
    currentAccount.balance >= amount
  ) {
    // Transfer amount
    currentAccount.movements.push(amount * -1);
    transferTo.movements.push(amount);
    inputTransferAmount.value = '';
    inputTransferTo.value = '';
    inputTransferAmount.blur();
    // Update UI
    showUI(currentAccount);
  }
});

// Request Load
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const loan = Number(inputLoanAmount.value);
  const deposits = currentAccount.movements.some(mov => mov >= loan * 0.1);
  if (loan > 0 && deposits) {
    // push ammount
    currentAccount.movements.push(loan);
    // Update UI
    showUI(currentAccount);
    inputLoanAmount.value = '';
  } else {
    console.log('Loan not granted');
  }
});

// Close Account
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(acc => {
      return acc.username === inputCloseUsername.value;
    });

    accounts.splice(index, 1);
    currentAccount = '';
    inputCloseUsername.value = inputClosePin.value = '';
    containerApp.style.opacity = 0;
  } else {
    console.log('incorrect username or password');
  }
});

/* --------------------------------------------------------------- */
// Putting the Pieces Together
username(accounts);
withdrawalsUSD(account1.movements);
