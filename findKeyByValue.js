const assertEqual = require('./assertEqual');


const findKeyByValue = function( list, value) {
  let output = undefined;
  for(const keys in list) {
    if (value === list[keys]) {
    output = keys;
    }
  }
  return output;
};

// const bestTVShowsByGenre = { 
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;