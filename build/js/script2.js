"use strict";
const log = (msg) => console.log(msg);
// filter vs find (array methods)
// filter returns an array that satisfies the condition
const nums = [1, 2, 3, 4, 5];
const filterMultiplyByTwo = nums.filter((num) => num % 2 === 0);
log(filterMultiplyByTwo);
// find returns the first item that satisfies the condition
const findMultiplyByTwo = nums.find((num) => num % 2 === 0);
log(findMultiplyByTwo);
// use cases
// When you have a use case where more than 1 element is expected
// to be returned ,and you want to perform operation on all elements,
// then you can use the filter() method. But if you expect only a single
// element to be returned from the array, then you can use find() and avoid extra iterations.
