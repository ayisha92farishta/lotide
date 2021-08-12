

const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');



const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


// const output = map(words, word => word[0]);

// console.log(output);

// assertArraysEqual(output,[ 'g', 'c', 't', 'm', 't' ]
// )


module.exports = map;