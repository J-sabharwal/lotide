const eqArrays = require('./eqArrays');
const assertEqual = require('./test/helper/assertEqual');

// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅ Assertion Passed: ${[actual]} === ${[expected]}`);
//   } else {
//     console.log(`🛑 Assertion Failed: ${[actual]} !== ${[expected]}`);
//   }
// };

const findKey = function(object, callback) {
  const newArray = Object.keys(object);
  
  // Loop through newArray and check if callback object key is true
  for (let elem of newArray) {
    if (callback(object[elem])) {
      return elem;
    }
  }
  return false;
};

const names = {
  "Jenny":    { kids: 1 },
  "Sean":     { kids: 3 },
  "Gina":     { kids: 2 },
  "Elizabeth":{ kids: 3 },
  "Remi":     { kids: 5 },
  "Sarah":    { kids: 2 }
};

const firstTrue = findKey(names, elem => elem.kids === 5);

assertEqual(firstTrue, "Remi");

module.exports = findKey;
