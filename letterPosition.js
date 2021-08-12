

const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');


const letterPositions = function(sentence) {
  const results = {};
  let withoutSpace = sentence.replace(/\s/g, '');
  for (let i = 0; i < withoutSpace.length; i++) {
    let currentLetter = withoutSpace[i];
    if (currentLetter in results) {
      continue;
    }
    
    results[currentLetter] = [];
    
    for (let j = i; j < withoutSpace.length; j++) {
      if (currentLetter === withoutSpace[j]) {
        let currentLetterIndex = j;
        //console.log(currentLetterIndex)
        results[currentLetter].push(currentLetterIndex);
      }
    }
  }
  return results;
};

//console.log(letterPositions("lighthouse Labsh"))

module.exports = letterPositions;