const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${[actual]} === ${[expected]}`);
  } else {
    console.log(`🛑 Assertion Failed: ${[actual]} !== ${[expected]}`);
  }
};

const eqObjects = function(obj1, obj2) {
  let isMatching;
  const obj1Arr = Object.keys(obj1);
  const obj2Arr = Object.keys(obj2);

  if (obj1Arr.length === obj2Arr.length) {
    for (let key in obj1) {
      if (obj1[key] === obj2[key]) {
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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);