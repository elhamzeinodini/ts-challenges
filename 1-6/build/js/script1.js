"use strict";
// a function for logging items on the console
const logMsg = (msg) => console.log(msg);
// remove duplicates from an array
const sample = [1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 1, 1, 2, 3, 4];
const removeDuplicates = (arr) => {
    return Array.from(new Set(arr));
};
logMsg(removeDuplicates(sample));
// reverse a string
const reverse = (str) => {
    let reversedStr = [];
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr.push(str[i]);
    }
    return reversedStr.join('');
};
logMsg(reverse("reverse every word in this sentence"));
// given an unsorted array, return the missing number
const findMissing = (arr) => {
    let n = arr.length + 1;
    let expectedNums = n * (n + 1) / 2;
    const sum = arr.reduce((index, total) => index + total);
    return expectedNums - sum;
};
logMsg(findMissing([2, 4, 1, 5]));
// From an unsorted array, check whether there are any two numbers that will sum up to a given number.
const twoSums = (arr, sum) => {
    let len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            if (arr[i] + arr[j] === sum) {
                return true;
            }
        }
    }
    return false;
};
logMsg(twoSums([1, 2, 5, 6], 13));
// For the given string, determine if the strings of brackets in the input is balanced or not
const isBalanced = (input) => {
    let temp = [];
    let bracketMap = new Map();
    bracketMap.set(")", "(");
    bracketMap.set("]", "[");
    bracketMap.set("}", "{");
    let openingBrackets = [...bracketMap.keys()];
    let closedBrackets = [...bracketMap.values()];
    for (let i = 0; i < input.length; i++) {
        let ch = input[i];
        if (openingBrackets.indexOf(ch) > -1) {
            temp.push(ch);
        }
        if (closedBrackets.indexOf(ch) > -1) {
            let expectedBracket = bracketMap.get(ch);
            if (temp.length === 0 || (temp.pop()) !== expectedBracket) {
                return false;
            }
        }
    }
    return (temp.length === 0);
};
logMsg(isBalanced("()"));