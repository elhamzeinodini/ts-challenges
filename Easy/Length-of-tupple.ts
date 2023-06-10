// typescript challenge - length of a tuple

const tesla = ["tesla", "model 3", "model X", "model Y"] as const;
// T is an array of type unknown and can have a property called length
type Length1<T extends readonly unknown[]> = T["length"];
type teslaLength1 = Length1<typeof tesla>;

const result: teslaLength1 = tesla.length;
console.log(result);

// solution two
// type T has a constraint of having a property called length, infer a generic 
// type called R to T.length
type Length2<T extends readonly unknown[]> = T extends { length: infer R }
  ? R
  : never;
type teslaLength2 = Length2<typeof tesla>