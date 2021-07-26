// FUNCTION IMPLEMENTATION
/*
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(` ✅✅✅ Assertion Failed: ${actual} !== ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("I am a cat", "I am a cat");
assertEqual("I am a cat", "I am a dog");
assertEqual(3,4); 
*/

const head = function (array) {
  firstElement = array[0];
  return firstElement;
}

console.log(head([]));
console.log(head(["Hello", "Lighthouse", "Labs"]));