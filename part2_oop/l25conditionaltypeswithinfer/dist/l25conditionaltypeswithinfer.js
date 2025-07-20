"use strict";
// Conditional Types with Inference
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
