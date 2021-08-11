
const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual')


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


module.exports = middle;