# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @ayisha92farishta/lotide`

**Require it:**

`const _ = require('@ayisha92farishta/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:


*  head (array): takes in an array and returns the first item of that array.

*  tail (array): takes in an array and removes the first element and returns the remainder of that array.

*  middle (array): takes in an array and returns the single middle element if odd, and middle two elements if even.

*  countLetters (str): takes in a string and returns the total number of letters in the string.

*  countOnly (allItems, itemsToCount): takes in an array of items, and the item that needs to be tracked, then counts the times that item has been repeated in an array.

*  findKey (object, callback): takes in an object and a callback function, it then scans the object and return the first key for which the callback returns a truthy value.

*  findKeyByValue (list, value): takes in an object and a value, it then scans the object and return the first key which contains the given value.

*  flatten (multipleArrays): takes in an array of nested arrays and returns all the element inside one single array.

*  letterPositions (str): takes in a string and returns the index of each letter within that string.

*  map (array, callback): takes in an array to map, and a callback function, returns a new array based on the results of a callback function.

*  takeUntil (array, callback): takes in an array and a callback function. Keeps collecting items from the array until the callback provided returns a truthy value and returns a slice of the array with elements taken from the beginning.

*  without (source, itemsToRemove):takes in an array of all items, and a second array cintaining the items to remove. Then returns a subset of a given array, removing unwanted elements.