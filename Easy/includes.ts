// typescript challenge - Includes
// Includes<[1,2,3], 2>

type Includes<T extends unknown[], U> = boolean extends {
  [I in keyof Omit<T, "length"> as Equal<T[I], U> extends true
    ? I
    : never]: T[number];
}
  ? false
  : true;


// T : an array of any type

// U : a type that represents the value that is gonna be searched in the array

// boolean.extends makes sure that the object created in {} extends boolean type

// I in keyof Omit<T, "length"> : it is an index signature for looping through keys of T array , we are removing 
// the length property (just log an array)

// we loop through keys of an array, then we asses whether that key is equal to the value that we're searching for 
// if the value is true, we return the number else we return never

// the never keyword is used to remove the ones that don't satisfy the condition 

// here is an example that explains T[number] :  
type myArray = [number, string, boolean]
type elType = myArray[number]
// the above line is equivalent of : type elType = string | number | boolean
// so T[number] is the union type of all possible types that the T array can get