
const assertArraysEqual = function(arrayOne, arrayTwo){
  const result = eqArrays(arrayOne, arrayTwo)
  if(result){
    console.log(` ✅✅✅ Assertion Passed: ${arrayOne} === ${arrayTwo}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arrayOne} !== ${arrayTwo}`)
  }
}

//create an empty array where all the elements shall be stored
//loop through each element of the main array
//if i is a nested array then get inside the array and push each elements of that nested array to the empty array
//else shall push the elements inside the main array to the empty array.

const flatten = function (multipleArrays){
  let singleArray = [];
  for (let i = 0; i < multipleArrays.length; i++){
    let eachArr = multipleArrays[i];
   if (Array.isArray(eachArr) === false) {
       singleArray.push(eachArr);
       //console.log(singleArray)
    } 
    for (let j = 0; j < eachArr.length; j++) {
      if (Array.isArray(eachArr) === true) {
      singleArray.push(eachArr[j]);
      //console.log(singleArray)
    } 
  }     

}
  return singleArray
}


console.log(flatten([1, 2, [3, 4], 5, [6]]) )

assertArraysEqual( (flatten([1, 2, [3, 4], 5, [6]]) ), [ 1, 2, 3, 4, 5, 6 ])