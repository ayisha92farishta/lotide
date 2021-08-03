

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


const eqObjects = function(object1, object2) {
  var match = false;
  if (Object.keys(object1).length === Object.keys(object2).length){
    for(const item in object1) {
      match = false;
      if (typeof(object1[item]) === "object" && (object1[item].length === object2[item].length)) {
        match = eqArrays (object1[item],object2[item]);
      } else if (object1[item] === object2[item]){
        match = true;
    } 
  }
}
return match;
}

const assertObjectEqual = function(actual, expected) {
 const inspect = require('util').inspect; 
 if (eqObjects) {  
    console.log(` ✅✅✅ Assertion Passed: ${inspect(actual)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)}`);
  }
 };


