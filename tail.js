const assertEqual = require('./assertEqual')

const tail = function(array) {
  let copyArr = array.slice()
  copyArr.shift();
  return copyArr;
};


module.exports = tail;