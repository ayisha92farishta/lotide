const assertEqual = function(arrayOne, arrayTwo) {
  if (arrayOne === arrayTwo) {
    console.log(` ✅✅✅ Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  } else if (arrayOne !== arrayTwo) {
    console.log(`🛑🛑🛑 Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
  }

};


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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]),true) // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]),false) // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]),true) // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]),false) // => false
assertEqual(eqArrays(['1', '2', '3'], ['1', '2', '3', '4']), false);