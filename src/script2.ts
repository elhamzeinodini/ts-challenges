const log = (msg: any): void => console.log(msg)

// filter vs find (array methods)
// filter returns an array that satisfies the condition
const nums: number[] = [1, 2, 3, 4, 5]
const filterMultiplyByTwo: number[] = nums.filter((num: number): boolean => num % 2 === 0)
log(filterMultiplyByTwo)


// find returns the first item that satisfies the condition
const findMultiplyByTwo: number | undefined = nums.find((num: number): boolean => num % 2 === 0)
log(findMultiplyByTwo)

// use cases
// When you have a use case where more than 1 element is expected
// to be returned ,and you want to perform operation on all elements,
// then you can use the filter() method. But if you expect only a single
// element to be returned from the array, then you can use find() and avoid extra iterations.

// comparison
const item1: boolean = true
const item2: string = "true"
// log(item1 === item2)  // false
// log(item1 == item2)   // false

// working with dates
const item3: Date = new Date()
const item4: string = item3.toString()
const item5: string = item3.toISOString()
const item6: number = item3.getDate()
console.log(item4)
console.log(item5)
console.log(item6)

// convert string to number
const item7:string = "12345"
const item8:number = +item7
console.log(item8, typeof item8)

const item9:string = "1234"
const item10:number = Number(item9)
console.log(item10, typeof item10)

const item11:number = parseInt(item9)
console.log(item11, typeof item11)