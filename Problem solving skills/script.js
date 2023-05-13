'use strict';

// Problem
// We work for a company building a smart home thermometer. Our recent task is this:
// "Given an array of tempratures of one day, calculate the temprature amplitude. Keep in mind that sometimes there might be a sensor error."

const tempratures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const tempratures2 = [12, 45, -5, 3, 'error'];

// 1. Understanding the problem

//  What is temprature amplitude
// Explanation : difference between the highest and lowest temp in the array

// How to calculate the highest and lowest temp in an array?

//  What is a sensor error, and what to do when this error is given in the array
// Explanation : Random error, just inore the error when it occurs

// 2. Breaking up into sub-problems
// TODO ;

// Fing the max value
// Fing the min value
// Ignore if the value is 'error'
// Subtract the min from max (amplitude) and return the result

// Solution  1

let minTemp = tempratures[0];
let maxTemp = tempratures[0];

// Find Min Value
for (let i = 0; i < tempratures.length; i++) {
  if (tempratures[i] === 'error') {
    continue;
  } else if (tempratures[i] < minTemp) {
    minTemp = tempratures[i];
  }
}

// Find Max Value
for (let i = 0; i < tempratures.length; i++) {
  if (tempratures[i] === 'error') {
    continue;
  } else if (tempratures[i] > maxTemp) {
    maxTemp = tempratures[i];
  }
}

const tempAmplitude = function (min, max) {
  return max - min;
};

console.log(tempAmplitude(minTemp, maxTemp));

// Tip  1
//Always try to solve a problem using a function because function are more affective

// Solution  2

const tempAmp = function (temp) {
  let min = temp[0];
  let max = temp[0];

  for (let i = 0; i < temp.length; i++) {
    let currentTemp = temp[i];

    // 'error'
    if (typeof currentTemp !== 'number') continue;

    // Find min
    if (currentTemp < min) min = currentTemp;

    //Find Max
    if (currentTemp > max) max = currentTemp;
  }

  console.log(max, min);
  return max - min;
};
console.log(tempAmp(tempratures));

// lets say that two arrays will be passed to an array at the same time

// Tip  2
// Never change your function in the first place, always come up with the solution  that does not require you to change the functionality of the code

// 1. Understanding the problem
// how to join two arrays

// 2. Breaking up into sub-problems
// Join the two arrays
// use the pre-made function

let finalTemps = tempratures.concat(tempratures2);
console.log(tempAmp(finalTemps));
