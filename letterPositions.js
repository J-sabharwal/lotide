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

const letterPositions = function(sentence) {
  const results = {};
  
  let i = 0;
  for (let letter of sentence) {
   
    if (letter !== " ") {
      if (results[letter]) {
        results[letter].push(i);
      } else {
        results[letter] = [i];
      }
    }
    i++;
  }

  return results;
};
module.exports = letterPositions;

// Check the string index against a index number, using the character you want to check
assertArraysEqual(letterPositions("hello").h, [0]);

module.exports = letterPositions;