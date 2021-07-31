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




const letterPositions = function(sentence) {
  const results = {};
  let withoutSpace = sentence.replace(/\s/g, '');
  for (let i = 0; i < withoutSpace.length; i++){
    let currentLetter = withoutSpace[i];
    if (currentLetter in results){
      continue
    }
    results[currentLetter] = []
    for (let j = i; j < withoutSpace.length; j++) {
      if (currentLetter === withoutSpace[j]) {
        let currentLetterIndex = withoutSpace.indexOf(withoutSpace[j]);
        //console.log(currentLetterIndex)
        results[currentLetter].push(currentLetterIndex)
      }
    }
  }
  
  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);