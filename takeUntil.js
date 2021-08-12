
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


const takeUntil = function(array, isLessThanZero){
  let result = [];
  for(let item of array){ 
    if(!isLessThanZero(item)){
      result.push(item)
    } else {
      return result
    }
  }
  //console.log(result)
}

//const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
//const results1 = takeUntil(data1, x => x < 0);

//console.log(results1);

//console.log(takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0) )

//assertArraysEqual(results1,[ 1, 2, 5, 7, 2 ])


module.exports = takeUntil;