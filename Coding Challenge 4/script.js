"use strict";

//Bill calculator using loops

function calcTip(bill) {
  if (bill >= 50 && bill <= 300) {
    bill *= 15 / 100;
  } else if (bill <= 0) {
    alert("Please enter correct bill amount");
  } else {
    bill *= 20 / 100;
  }

  return bill;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

for (let i = 0; i < bills.length; i++) {
  let tip = calcTip(bills[i]);
  tips.push(tip);

  let total = tips[i] + bills[i];
  totals.push(total);

  console.log(
    `bill is ${bills[i]}, tip is ${tips[i]} total amount is ${totals[i]}`
  );
}

console.log(`----------- Bonus Question -----------`);

function calcAverage(arr) {
  let sum = 0;
  let avg;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  console.log(`Sum of the array is ${sum}`);

  avg = sum / arr.length;
  console.log(`Average of the array is ${avg}`);
}

calcAverage(totals);
