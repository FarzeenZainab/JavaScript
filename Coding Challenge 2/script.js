/*
    Tip calculator Rules:
    tip 15% if bill is between 50 to 300
    if the value is different tip 20%

    1. Build a function tip which will take any bill value and return the
    tip amount calculated based on the rules above

    2.Create an array calls bills containing the test data below

    3. Create an array 'tips' containing the tip value for each bill

    4. Create an array 'total' containing the total values so the bill + tip

*/

'use strict'

let calcTips = function (bill){
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

//bills
let bills = [125, 555, 44];

//tips
let tips = [calcTips(bills[0]), calcTips(bills[1]), calcTips(bills[2])];

//Total amount
let total = [bills[0]+tips[0], bills[1]+tips[1], bills[2]+tips[2]];

console.log(bills);
console.log(tips);
console.log(total);






