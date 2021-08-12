
const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');


const flatten = function (multipleArrays) {
  let singleArray = [];
  for (let i = 0; i < multipleArrays.length; i++) {
    let eachArr = multipleArrays[i];
    if (Array.isArray(eachArr) === false) {
      singleArray.push(eachArr);
    }
    for (let j = 0; j < eachArr.length; j++) {
      if (Array.isArray(eachArr) === true) {
        singleArray.push(eachArr[j]);
      }
    }
  }
  return singleArray;
};

module.exports = flatten;


// console.log(flatten([1, 2, [3, 4], 5, [6]]) )

// assertArraysEqual( (flatten([1, 2, [3, 4], 5, [6]]) ), [ 1, 2, 3, 4, 5, 6 ])