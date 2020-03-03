const assertEqual = function(actual, expected) {
  let isTrue = true;
  for (let i = 0; i < expected.length; i++) {
    if (actual[i] === expected[i]) {
      isTrue = true;
    } else {
      isTrue = false;
    }
  }

  if (isTrue) {
    console.log(`✅ Assertion Passed: ${[actual]} === ${[expected]}`);
  } else {
    console.log(`🛑 Assertion Failed: ${[actual]} !== ${[expected]}`);
  }
};
const tail = function(arr) {
  let newArr = [];
  for (let i = 1; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]);

// const result = tail([1, 5, 12]);
// assertEqual(result, [5, 12]);


// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result, ["Lighthouse", "Labs"]);
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual("Tiny", "tiny");
// assertEqual("Hello", "Hello");
// assertEqual(5, 12);