const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let elem of array) {
    results.push(callback(elem));
  }
  return results;
};

const results1 = map(words, words => words[0]);
//console.log(results1);

const assertEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: ${[actual]} === ${[expected]}`);
  } else {
    console.log(`🛑 Assertion Failed: ${[actual]} !== ${[expected]}`);
  }
};

const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

// Passing in results variable as actual argument and expected output as second argument
assertEqual(results1, ["g", "c", "t", "m", "t"]);
assertEqual(results1, ["g", "c", "o", "m", "t"]);
assertEqual(results1, ["g", "c", 9, "m", "t"]);
assertEqual(results1, ["t", "m", "t", "c", "g"]);