const eqArrays = require("../../eqArrays");

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: ${[actual]} === ${[expected]}`);
  } else {
    console.log(`🛑 Assertion Failed: ${[actual]} !== ${[expected]}`);
  }
};

// const eqArrays = function(array1, array2) {
//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] !== array2[i]) {
//       return false;
//     }
//   }
//   return true;
// };


// assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);

// assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
// assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);


module.exports = assertArraysEqual;