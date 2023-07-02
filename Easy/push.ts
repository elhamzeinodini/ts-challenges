// typescript challenge - push
// Push<[1,2], 3>

type Push<T extends unknown[], U> = [...T, U]
// we are passing an array of numbers and the item that we want to add at the 
// end of that array of numbers
type PushResult = Push<[1,2], 3>

