const eqObjects = function(obj1, obj2) {
  let isMatching;
  const obj1Arr = Object.keys(obj1);
  const obj2Arr = Object.keys(obj2);
  
  if (obj1Arr.length === obj2Arr.length) {
    for (let key in obj1) {
    
      if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
        isMatching = eqArrays(obj1[key], obj2[key]);
      } else if (obj1[key] === obj2[key]) {
        isMatching = true;
      } else {
        return false;
      }
    }
  } else {
    return false;
  }
  return isMatching;
};

const eqArrays = function(array1, array2) {
  let trueOrFalse;
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      trueOrFalse = false;
    }
    trueOrFalse = true;
  }
  return trueOrFalse;
};

// changed eqArrays to eqObjects
const assertObjectEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅ Assertion Passed: ${[inspect(actual)]} === ${[inspect(expected)]}`);
  } else {
    console.log(`🛑 Assertion Failed: ${[inspect(actual)]} !== ${[inspect(expected)]}`);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectEqual(ab, ba);