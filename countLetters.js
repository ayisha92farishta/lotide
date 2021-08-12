const assertEqual = require('./assertEqual');


const countLetters = function(str) {
  let result = {};
  let withoutSpace = str.replace(/\s/g, '');
  //console.log(withoutSpace)
  for (let i = 0; i < withoutSpace.length; i++) {
    let currentLetter = withoutSpace[i];
    if (currentLetter in result) {
      continue;
    }
    result[currentLetter] = 0;
    for (let j = i; j < withoutSpace.length; j++) {
      if (currentLetter === withoutSpace[j]) {
        result[currentLetter] += 1;
      }
    }
  }
  return result;
};

//console.log(countLetters(" lighthouse in the house "))

module.exports = countLetters;