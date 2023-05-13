'use strict';

// 1. Get all buttons and store inside variables

// Elements
const decimalEle = document.querySelector('.btn-decimal');
const btns = document.getElementsByClassName('bttn');
const btnNumber = document.getElementsByClassName('btn-number');

// Numbers / Operands
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Operator Element
const delEle = document.querySelector('.btn-del');
const backEle = document.querySelector('.btn-back');
const divideEle = document.querySelector('.divide');
const multiplyEle = document.querySelector('.multiply');
const subtractEle = document.querySelector('.subtract');
const addEle = document.querySelector('.add');
const equalsEle = document.querySelector('.equals');

// Display screen elements
const currentInputEle = document.querySelector('.current');
const nextInputEle = document.querySelector('.next');
const resultEle = document.querySelector('#result');
const removeSpaceEle = document.querySelector('.empty-space');
let stringTempl = ``;

// capture operands
let operand1 = Number(currentInputEle.textContent);
let operand2 = Number(nextInputEle.textContent);
let operator;

// 2. Add event listner on each button and display value of that number on display screen

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function () {
    if (removeSpaceEle.classList.contains('empty-space')) {
      removeSpaceEle.classList.add('empty');
    }

    currentInputEle.textContent += btnNumber[i].textContent;
  });
}

// 3. perform the operation on operators

// del
delEle.addEventListener('click', function () {
  if (removeSpaceEle.classList.contains('empty-space')) {
    removeSpaceEle.classList.remove('empty');
  }
  currentInputEle.textContent = '';
});

//back

backEle.addEventListener('click', function () {
  // 1. get the full string, split it in array
  let inputString = Array.from(currentInputEle.textContent);

  // 2. pop()
  inputString.pop();

  //3. Reconvert into string
  // Using join() method because we donot need comma in our string
  // And toString() method combines commas in the string when converting the string

  inputString = inputString.join('');

  // 4. display result
  currentInputEle.textContent = inputString;

  // 5. If there is no element in the array to pop
  if (inputString.length == 0) {
    removeSpaceEle.classList.remove('empty');
  }
});

let result;

// Perform operations
function add() {
  result = operand1 + operand2;
}

function subtract() {
  result = operand1 - operand2;
}

function multiply() {
  result = operand1 * operand2;
}

function divide() {
  result = operand1 / operand2;
}

// 4. Operation events

addEle.addEventListener('click', function () {
  add();
  currentInputEle.textContent += '+';
});
