const eqArrays = function(array1, array2) {
  for (let i = 0; i <= array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
};
//comparing the two and if true passing it
const assertEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: ${[actual]} === ${[expected]}`);
  } else {
    console.log(`🛑 Assertion Failed: ${[actual]} !== ${[expected]}`);
  }
};
const middle = function(array) {
  let divArray = Math.floor(array.length / 2);
  let newArr = [];
  switch (array.length) {
  case 1:
  case 2:
    return [];
  default:
    if (array.length % 2 === 0) {
      newArr.push(array[divArray - 1], array[divArray]);
    } else {
      newArr.push(array[divArray]);
    }
  }
  return newArr;
};

assertEqual(middle([1, 2, 3, 4]), [2]);
assertEqual(middle([4, 5, 6, 10]), [5, 6]);
assertEqual(middle([2, 3]), [3]);
assertEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]);
assertEqual(middle(["1", "2", "3", "4"]), ["3"]);

//assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);

// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);