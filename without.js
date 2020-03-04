const assertEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: ${[actual]} === ${[expected]}`);
  } else {
    console.log(`🛑 Assertion Failed: ${[actual]} !== ${[expected]}`);
  }
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const without = function(source, itemsToRemove) {
  let newArr = [];

  for (let i = 0; i < source.length; i++) {
    let isMatch = false;

    for (let j = 0; j < itemsToRemove.length; j++) {

      if (source[i] === itemsToRemove[j]) {
        isMatch = true;
      }
    }
    if (isMatch === false) {
      newArr.push(source[i]);
    }
  }
  return newArr;
};

assertEqual(without([1, 2, 3], [2]), [1, 3]);
assertEqual(without(['1', '2', '3'], [1, 2, "3"]), ["1", "2"]);
assertEqual(without([1, 2, 5, 3, 5], [2, 5]), [1, 3]);
assertEqual(without([1, 8, 5, 4, 2, 3], ["3", 4, 2, "5"]),[1, 8, 5, 3]);

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);

// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);