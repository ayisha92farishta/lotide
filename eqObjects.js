const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(` ✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!



const eqObjects = function(object1, object2) {
  let output = 0;
  // getting the number of keys in Object 1 and two to later compare with the output length
  let length1 = Object.keys(object1).length;
  let length2 = Object.keys(object2).length;
  for (const key1 in object1){
    for (const key2 in object2){   
    if ((key1 in object2) && (key2 in object1)) {
      // check if any of the values are an array
      //if so then in the arrays are strictly equal to the other value
      //if both checks out then output++
    }
    }
  }
  if (output === length1 && output === length2) {
    return true;
  } 
    return false
  }
  



const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

console.log (eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false