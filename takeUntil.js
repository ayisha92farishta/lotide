
const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');

const takeUntil = function(array, isLessThanZero) {
  let result = [];
  for (let item of array) {
    if (!isLessThanZero(item)) {
      result.push(item);
    } else {
      return result;
    }
  }
};

//const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
//const results1 = takeUntil(data1, x => x < 0);

//console.log(results1);

//console.log(takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0) )

//assertArraysEqual(results1,[ 1, 2, 5, 7, 2 ])


module.exports = takeUntil;