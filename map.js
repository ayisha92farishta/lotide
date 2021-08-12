
const eqArrays = function (arrayOne, arrayTwo){
  let output = 0;
  for(let i = 0; i< arrayOne.length; i++) {
    if(arrayOne[i] === arrayTwo[i]){
      output++
    }
    
  }if(output === arrayOne.length && output === arrayTwo.length){
    return true;
  } else {
    return false
  }
}

const assertArraysEqual = function(arrayOne, arrayTwo){
  const result = eqArrays(arrayOne, arrayTwo)
  if(result){
    console.log(` ✅✅✅ Assertion Passed: ${arrayOne} === ${arrayTwo}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arrayOne} !== ${arrayTwo}`)
  }
}


const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback){
  const results = [];
  for (let item of array){
   results.push(callback(item))
  }
  return results;
}


// const output = map(words, word => word[0]);

// console.log(output);

// assertArraysEqual(output,[ 'g', 'c', 't', 'm', 't' ]
// )


module.exports = map;