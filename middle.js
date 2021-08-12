
const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');


const middle = function(array) {
  let output = [];
  if (array.length <= 2) {
    console.log(output);
  } else if (array.length > 2) {
    let middleNum = array[Math.floor(array.length / 2)];
    if (array.length % 2 === 0) {
      output.push(array[array.indexOf(middleNum - 1)]);
      output.push(middleNum);
      console.log(output);
    } else {
      output.push(middleNum);
      console.log(output);
    }
  }
  return output;
};


module.exports = middle;