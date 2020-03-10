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

const flatten = function(nestedArr) {
  let newArr = [];

  for (let i = 0; i < nestedArr.length; i++) {

    if (Array.isArray(nestedArr[i])) {

      for (let j = 0; j < nestedArr[i].length; j++) {
        newArr.push(nestedArr[i][j]);
      }
    } else {
      newArr.push(nestedArr[i]);
    }
  }
  return newArr;
};

module.exports = flatten;

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
//assertArraysEqual(flatten([1, 2, ["3", 4], "5", [6]]), [1, 2, "3", 4, 5, 6]);
//assertArraysEqual(flatten([1, 2, [3, 4], "5", [6]]), [1, 2, 3, 4, "5", 6]);
//assertArraysEqual(flatten([0, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);