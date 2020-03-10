// refactored with Jason Park @zeipar

const assertEqual = require("./helper/assertEqual");
const tail = require("../tail");
const assert = require("chai").assert;

describe("tailtest", () => {

  it('should return ["Lighthouse", "Labs"] from ["Hello", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(result, ["Lighthouse", "Labs"].join());
  });

  it('should return 3 from ["Hello", "Lighthouse", "Labs"]', () => {
    assert(words.length, 3);
  });
});




const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"].join());

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);

// const result = tail([1, 5, 12]);
// assertEqual(result, [5, 12]);

// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result, ["Lighthouse", "Labs"]);
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual("Tiny", "tiny");
// assertEqual("Hello", "Hello");
// assertEqual(5, 12);