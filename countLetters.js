const eqArrays = require('./eqArrays');
const assertEqual = require('./test/helper/assertEqual');

// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅ Assertion Passed: ${[actual]} === ${[expected]}`);
//   } else {
//     console.log(`🛑 Assertion Failed: ${[actual]} !== ${[expected]}`);
//   }
// };

const countLetters = function(sentence) {
  const letterCount = {};
  let newArr = sentence.split(" ").join("");
  
  for (let letter of newArr) {
     
    if (letterCount[letter]) {
      letterCount[letter] += 1;
    } else {
      letterCount[letter] = 1;
    }
  }
  return JSON.stringify(letterCount);
};

assertEqual(countLetters("Hello World"), JSON.stringify({"H":1,"e":1,"l":3,"o":2,"W":1,"r":1,"d":1}));
// assertEqual(countLetters("LHL"), JSON.stringify({"L":2,"H":1}));

module.exports = countLetters;