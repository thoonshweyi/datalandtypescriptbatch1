// Conditional Types with Inference

// Syntax 
// type Conditional<T> = T extends string ? "String Type" : "Not String Type";

// exe 1
type IsString<T> = T extends string ? true : false;
type Tone = IsString<"hello"> // true
type Ttwo = IsString<50> // false

// => Infer (Extract Type from Array)
// Syntax
// type Conditionl<T> = T extends SomePattern<infer U> ? U : Default Type;

// Note: Pattern (infer U)[]
// : number[] is extracted to number. after (infer U)
// : is mean infer we can extract array

// exe 1 (Extract Type from Array)
type SomeStructure<T> = T[];
type DefaultType = unknown;

type MyType<T> = T extends SomeStructure<infer U> ? U : DefaultType;

type NumberType = MyType<number[]>; // number
type BooleanType = MyType<boolean[]>; // boolean
type NoanArrTyp = MyType<string>; // unknown


// exe 2 (Extract Type from Array)
type ExtractArray<T> = T extends (infer U)[] ? U : "Not an array";
type T1 = ExtractArray<string[]>; // string
type T2 = ExtractArray<number[]>; // number
type T3 = ExtractArray<50>; // Not an array

// exe 3 (Extract Type from Array)
type ArrayElementType<T> = T extends (infer U)[] ? U : T;
type StringsT = ArrayElementType<string[]> // string
type NumbersT = ArrayElementType<number[]> // number
type MixedT = ArrayElementType<Array<number|string>> // string | number
type NotanArrayBooleanT = ArrayElementType<boolean> // boolean
type NotanArrayT = ArrayElementType<50> // 50

// => Nested Infer (Extract Type from Array)
type DeepArray<T> = T[][];
type NstArray<T> = T extends DeepArray<infer U> ? U : T extends (infer V)[] ? V : "Not an array"; 
// type NstArray<T> = string[] extends string[][] ? string : string[] extends string[] ? string : "Not an array"; 


type NestType1 = NstArray<number[][]>; // number
type NestType2 = NstArray<string[]>;  // string
type NestType3 = NstArray<number>;  // "Not an array"


// => Extract Tuple First Type ****
type FirstTuple<T> = T extends [infer F,...any[]] ? F: never; // Note, infer F captures the type of first element of the tuple
// type FirstTuple<T> = [number,string,boolean] extends [infer F,...any[]] ? F: never;
          
type Ftype1 = FirstTuple<[number,string,boolean]> // number 
type Ftype2 = FirstTuple<[boolean]> // boolean 
type Ftype3 = FirstTuple<[]> // never 

// => Extract Tuple Last Type ****
type LastTuple<T> = T extends [...any[],infer L] ? L: never;
type LType1 = LastTuple<[number,string,boolean]> // boolean 
type LType2 = LastTuple<[string]> // string 
type LType3 = LastTuple<[]> // never 

// => Extract Inner Type from Wrapper
type Wrapper<T> = {value:T};
type Unwrap<T> = T extends Wrapper<infer U> ? U : "Not a Wrapper"

type WType1 = Unwrap<Wrapper<number>> // number // type Unwrap<T> = {value:number} extends {value:T}<infer U> ? U : "Not a Wrapper"
type WType2 = Unwrap<Wrapper<string>> // string // type Unwrap<T> = {value:string} extends {value:T}<infer U> ? U : "Not a Wrapper"
type WType3 = Unwrap<{value:boolean}> // boolean
type WType4 = Unwrap<number> // Not a wrapper


// => Extract Promise Value
type GetPromiseValue<T> = T extends Promise<infer U> ? U : T;
type PType1 = GetPromiseValue<Promise<string>>; // string
type PType2 = GetPromiseValue<Promise<number>>; // number
type PType3 = GetPromiseValue<number>; // number
type PType4 = GetPromiseValue<boolean>; // boolean

// => Extract Function Return Type
type GetReturnType<T> = T extends (...args:any[])=> infer R ? R: never;

type REtype1 = GetReturnType<()=>number>; // numbr
type REtype2 = GetReturnType<()=>string>; // string
type REtype3 = GetReturnType<(x:number,y:string)=>boolean>; // boolean
type REtype4 = GetReturnType<string>; // never
// T = check if T is a function type 
// ...args:any[] = Accepts and arguments (we ignore them)
// infer R = Captures the return type into R




// ------------------------------------------------------------------------------------------
// 1. The infer U pattern
// This pattern:

// T extends (infer U)[]
// ...means:

// “If T is an array of something, capture that something as U.”

// You're asking TypeScript to:

// Try to match T to the pattern U[], and if it fits, figure out what U is.


// 🧪 2. Plug in the actual value
// T = string[]
// Now TypeScript checks:

// string[] extends (infer U)[]
// This is a structural match check.

// 🧠 3. Matching Types Structurally
// Let’s rewrite this:

// Left side: string[] → means: an array of strings

// Right side: U[] → means: an array of some unknown thing U

// Now TypeScript thinks:

// If I say U = string, then U[] = string[] — ✅ match!

// So string[] fits the shape of U[] with U = string.



//  Step 1: Expand the Alias
// type SomeStructure<T> = T[];

// type MyType<T> = T extends (infer U)[] ? U : DefaultType;

//  Step 2: Subtype Matching with infer
//  string[] extends (infer U)[]
// U = string

// 🧠 The Core Rule
// When TypeScript sees T extends Pattern<infer U>, it does type decomposition:
// It tries to make the structure of T fit the structure of the pattern and extract U from it.


// ✅ Final Summary
// type MyType<T> = T extends (infer U)[] ? U : DefaultType;
// infer U is a placeholder TypeScript tries to solve by matching T to U[].

// It doesn't need to know U in advance.

// It asks:

// Is there a U such that U[] = T?

// If yes → use U
// If no → use fallback (DefaultType)




// => First Element 
// 1. What is [infer F, ...any[]]?
// It is a tuple pattern in TypeScript, which is used to:

// infer F → capture the type of the first element.

// ...any[] → represent the rest of the elements, which can be zero or more elements of any type.

// Think of [infer F, ...any[]] like saying:

// "I want to look at a tuple: take the first element as type F (whatever it is), and then match the rest of the elements as any array."

// 2. Example of Matching
// Example 1:
// ts
// Copy
// Edit
// type MyTuple = [string, number, boolean];
// When you check if MyTuple matches [infer F, ...any[]], TypeScript says:

// F = string (the first element type)

// ...any[] = [number, boolean] (the rest of the tuple)

// Example 2:
// ts
// Copy
// Edit
// type MyTuple = [number];
// When you check [infer F, ...any[]]:

// F = number (first element)

// ...any[] = [] (no more elements)

// Example 3:
// ts
// Copy
// Edit
// type MyTuple = [];
// This does not match [infer F, ...any[]] because there is no first element.
// (This is when never is returned in your code.)

// 3. Why the ...any[]?
// The ...any[] part is just like the rest operator (...rest) in JavaScript arrays:

// js
// Copy
// Edit
// const arr = [1, 2, 3];
// const [first, ...rest] = arr;
// console.log(first); // 1
// console.log(rest);  // [2, 3]
// In TypeScript's type world:

// first is like infer F.

// rest is like ...any[].

// 4. Visual Representation
// For [string, number, boolean]:

// typescript
// Copy
// Edit
// [infer F, ...any[]]
//    |         |
//    |         └─ [number, boolean]
//    └─ string (captured as F)
// 5. Another Analogy
// Think of [infer F, ...any[]] as a "type destructuring" of a tuple:

// "Take the first type as F."

// "The rest of the tuple elements, I don't care what they are, they just need to be any[]."

