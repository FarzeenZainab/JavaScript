'use strict'

let currentYear = 2020;
const years = [1991, 2007, 1968, 2019];
let ages=[];
let age;


for(let i=0; i <years.length; i++){
    age = currentYear - years[i];
    ages.push(age);
}
console.log(ages);

//Bill calculator using loops

function calcTip(bill){
    if(bill >= 50 && bill<=300)
    {
        bill *= (15/100);
    }

    else if(bill<= 0){
        alert('Please enter correct bill amount');
    }

    else {
        bill *= (20/100);
    }

    return bill;
}

const bills = [225, 55, 771];
let tips = [];
let totals = [];

for(let i = 0; i < bills.length; i++){
    let tip = calcTip(bills[i]);
    tips.push(tip);

    let total = tips[i] + bills[i];
    totals.push(total);
}

console.log(tips, totals);

// Backwards loop

const testArray = [
    'bills',
    'tips',
    'total'
]

for(let i = testArray.length - 1; i < testArray.length && i > -1; i--){
    console.log(testArray[i]);
}

// Looping inside a loop

const exercise = ['Weight lifts', 'Pushups','Rope Skipping'];


for(let i = 0; i < exercise.length; i++){
    console.log(`Doing ${exercise[i]}`)

    for(let reps = 1; reps <= 5; reps++){
        console.log(`${exercise[i]} repition ${reps}`);
    }
}











