//const assertEqual = require("./helper/assertEqual");
const head = require("../head");
const assert = require('chai').assert;

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });
  it("should return 5 for [5,6,7]", () =>{
    assert.strictEqual(head([5,6,7]), 5);
  });
  it('should return "Hello" for "Hello", "Lighthouse", "Labs"]', () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });
  it("should return 2 for [2]", () =>{
    assert.strictEqual(head([2]), 2);
  });
  it('should return undefined for []', () =>{
    assert.strictEqual(head([]), undefined);
  });
});




// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head(["Labs", "Lighthouse", "Hello"]), "Hello");
// assertEqual(head([1, 5, 10]), 12);
// assertEqual(head([1]), 1);
// assertEqual(head([]), 1);

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual("Tiny", "tiny");
// assertEqual("Hello", "Hello");
// assertEqual(5, 12);
