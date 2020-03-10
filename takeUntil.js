const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./test/helper/assertArraysEqual');

// const assertEqual = function(actual, expected) {
//   if (eqArrays(actual, expected)) {
//     console.log(`✅ Assertion Passed: ${[actual]} === ${[expected]}`);
//   } else {
//     console.log(`🛑 Assertion Failed: ${[actual]} !== ${[expected]}`);
//   }
// };

// const eqArrays = function(array1, array2) {
//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] !== array2[i]) {
//       return false;
//     }
//   }
//   return true;
// };

// Function created to take in array and callback as parameters
// loop through array and evaluate if condition is false to push element to array otherwise stop loop with break.
let takeUntil = function(array, callback) {
  let newArr = [];
  for (let element of array) {
    if (callback(element) === false) {
      newArr.push(element);
    } else {
      break;
    }
  }
  return newArr;
};

module.exports = takeUntil;
// New Array
// Created a variable and called takeUntil function passing in array and callback function as argument
const words = ["ground", "control", "to", "major", "tom"];
const results = takeUntil(words, elem => elem === "major");
assertArraysEqual(results, ["ground", "control", "to"]);

// const data = [2, 4, 6, 23, 5, 54, 6];
// const results2 = takeUntil(data, elem => elem > 20);
// assertArraysEqual(results2, [2, 4, 6]);