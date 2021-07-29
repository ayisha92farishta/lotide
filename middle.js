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
  let output = 0;
  for(let i = 0; i< arrayOne.length; i++) {
    if(arrayOne[i] === arrayTwo[i]){
      output++
    }
  }
  if(output === arrayOne.length && output === arrayTwo.length){
    console.log(` ✅✅✅ Assertion Passed: ${arrayOne} === ${arrayTwo}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arrayOne} !== ${arrayTwo}`)
  }
}


//if array.length is more than 4 then 
//1) if % 2 is 0 then the middle 1 number , 
//2) if % 2 is not equal to 0, than the middle 2 numbers
// how to get the middle number
//[0,1,2,3,4,5] if % 2 = 0 then last index   


const middle = function(array){
  let output = [];
  if (array.length <= 2 ) {
    console.log(output); 
  } else if (array.length > 2) {
    let middleNum = array[Math.floor(array.length/2)];
    //console.log(middleNum);
    if (array.length % 2 === 0){
    output.push(array[array.indexOf(middleNum-1)])
    output.push(middleNum)
    console.log(output)
    } else {
      output.push(middleNum);
      console.log(output)
    }
  }
  return output
}


assertArraysEqual(middle([1]),[] )  // => []
assertArraysEqual(middle([1, 2]),[])  // => []
assertArraysEqual(middle([1, 2, 3]),[2]) // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]),[3])  // => [3]
assertArraysEqual(middle([1, 2, 3, 4]),[2, 3])// => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]) // => [3, 4]