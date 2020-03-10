// pair programming with Jason @zeipar
const middle = require('../middle');
const assert = require("chai").assert;

describe("middleTest", () => {

  it('should return 2 from "[1, 2, 3]"', () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it('should return 2,3 from "[1, 2, 3, 4]"', () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it('should return 3 from "[1, 2, 3, 4, 5]"', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  it('should return 3,4 from "[1, 2, 3, 4 ,5 6]"', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
  it('should return 1 from "[1]"', () => {
    assert.deepEqual(middle([1]), [1]);
  });
  it('should return 1,2 from "[1, 2]"', () => {
    assert.deepEqual(middle([1, 2]), [1, 2]);
  });
});



//CODE TEST
// assert.deepEqual(middle([1, 2, 3]), [2]);
// assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
// assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
// assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
// assert.deepEqual(middle([1]), [1]);
// assert.deepEqual(middle([1, 2]), [1, 2]);
