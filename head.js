const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
const head = function(arr) {
  return arr[0];
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Labs", "Lighthouse", "Hello"]), "Hello");
assertEqual(head([1, 5, 10]), 12);
assertEqual(head([1]), 1);
assertEqual(head([]), 1);

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Tiny", "tiny");
assertEqual("Hello", "Hello");
assertEqual(5, 12);
