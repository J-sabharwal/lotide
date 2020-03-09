// const assertEqual = function(actual, expected) {
//   let isTrue = true;
//   for (let i = 0; i < expected.length; i++) {
//     if (actual[i] === expected[i]) {
//       isTrue = true;
//     } else {
//       isTrue = false;
//     }
//   }

  // if (isTrue) {
  //   console.log(`✅ Assertion Passed: ${[actual]} === ${[expected]}`);
  // } else {
  //   console.log(`🛑 Assertion Failed: ${[actual]} !== ${[expected]}`);
  // }
//};

const assertEqual = require("./assertEqual");

const tail = function(arr) {
  let newArr = arr.slice(1).join()
  for (let i = 0; i < newArr.length; i++) {
    
  }
  
  return newArr.toString();
};

module.exports = tail;