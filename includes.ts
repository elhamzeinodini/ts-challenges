// typescript challenge - Includes
// Includes<[1,2,3], 2>

// T : an array of any type
// U : a type that represents the value that is gonna be searched in the array
// boolean.extends makes sure that the object created in {} extends boolean type
// Omit<T, "length"> 

type Includes<T extends unknown[], U> = boolean extends {
  [I in keyof Omit<T, "length"> as Equal<T[I], U> extends true
    ? I
    : never]: T[number];
}
  ? false
  : true;

