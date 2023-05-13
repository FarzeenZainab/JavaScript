'use strict';
//Mark weight and height
const markHeight = 1.69;
const markWeight = 78;
const markBMI = markWeight / markHeight**2;

//John weight and height
const johnHeight = 1.95;
const johnWeight = 92;
const johnBMI = johnWeight / johnHeight**2;

const markHigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI,markHigherBMI);






