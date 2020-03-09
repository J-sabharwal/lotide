// refactored with Jason Park @zeipar

const assertEqual = require("../assertEqual");
const tail = require("../tail");


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