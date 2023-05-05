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
// comparison
const item1 = true;
const item2 = "true";
// log(item1 === item2)  // false
// log(item1 == item2)   // false
// working with dates
const item3 = new Date();
const item4 = item3.toString();
const item5 = item3.toISOString();
const item6 = item3.getDate();
console.log(item4);
console.log(item5);
console.log(item6);
// convert string to number
const item7 = "12345";
const item8 = +item7;
console.log(item8, typeof item8);
const item9 = "1234";
const item10 = Number(item9);
console.log(item10, typeof item10);
const item11 = parseInt(item9);
console.log(item11, typeof item11);
// explain what is a callback function with an example
// a callback function is a function that is passed to another function as an argument
function example(arr, callback) {
    arr.push(10);
    callback();
}
const arr = [1, 2, 3, 4, 5, 6];
example(arr, () => {
    console.log("this is a callback");
});
// "Welcome to this Javascript Guide!" should be become "emocleW ot siht tpircsavaJ !ediuG"
const reverseString = (str) => {
    return str.split("").reverse().join("");
};
console.log(reverseString("Welcome to this Javascript Guide!"));
// How to empty an array
const arr1 = ["a", "b", "c", "d"];
const saveArr1 = arr1;
arr1.length = 0;
console.log(arr1);
// forEach vs map
// both of them are array methods, map returns a new array , doesn't modify the original array
// forEach doesn't return anything, it's just used to iterate over elements of an array
const mapResult = nums.map((num) => num + 2);
console.log(mapResult);
const forEachResult = nums.forEach((num) => num + 2);
console.log(forEachResult);
// returns undefined
// also, in map you can chain other array methods, but in forEach you cannot
const mapResultChained = nums.map((num) => num + 2)
    .filter((num) => num > 3);
console.log(mapResultChained);
