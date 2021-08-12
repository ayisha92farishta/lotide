
const assertEqual = require('./assertEqual');

const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  var match = false;
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for(const item in object1) {
      match = false;
      if (typeof(object1[item]) === "object" && (object1[item].length === object2[item].length)) {
        match = eqArrays (object1[item],object2[item]);
      } else if (object1[item] === object2[item]) {
        match = true;
      } 
    }
  }
  return match;
};


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