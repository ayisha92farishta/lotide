
const assertArraysEqual = function(arrayOne, arrayTwo){
  const result = eqArrays(arrayOne, arrayTwo)
  if(result){
    console.log(` ✅✅✅ Assertion Passed: ${arrayOne} === ${arrayTwo}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arrayOne} !== ${arrayTwo}`)
  }
}

// assertArraysEqual([1,2,3],[1,2,3])


const without = function (source, itemsToRemove) {
 let output = source.slice();
 console.log(output)
 for (let i = 0; i < itemsToRemove.length; i++) {
   if (output.includes(itemsToRemove[i])){
    let indexToRemove = output.indexOf(itemsToRemove[i]);
    console.log(indexToRemove);
    output.splice(indexToRemove,1)
   }
 }
 return output;
}


// console.log(without([1,2,3,4,5,6],[3,5]))


// assertArraysEqual((without([1,2,3,4,5,6],[3,5])), [ 1, 2, 4, 6 ])

module.exports = without;