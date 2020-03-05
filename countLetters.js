const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${[actual]} === ${[expected]}`);
  } else {
    console.log(`🛑 Assertion Failed: ${[actual]} !== ${[expected]}`);
  }
};

const countLetters = function(sentence) {
  const letterCount = {};
  let newArr = sentence.split(" ").join("");
  
  for (let letter of newArr) {
     
    if (letterCount[letter]) {
      letterCount[letter] += 1;
    } else {
      letterCount[letter] = 1;
    }
  }
  return letterCount;
};

console.log(countLetters("Hello World"));
console.log(countLetters("LHL"));