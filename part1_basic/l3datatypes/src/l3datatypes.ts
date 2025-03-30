let fullname:string = "Su Su";
console.log(fullname);

let age:number = 25;
console.log(age);

// this is comment
let hascar:boolean = true;
console.log(hascar);

hascar = false;
console.log(hascar);

// Any types 
let studentid;
studentid = 1001;
studentid = "1002";

// Array of string
let colorarrs:string[] = ["red","green","blue"];
console.log(colorarrs);

// Array of number
let numarrs:number[] = [10,20,30,40,50];
console.log(numarrs);

// Array of strint & number
let mixarrs1:(string|number)[] = ["red","green","blue",100,200,300];
console.log(mixarrs1);

// Array of strint & number & bool
let mixarrs2:(string|number|boolean)[] = [true,100,"red","green","blue",100,200,300,false];
console.log(mixarrs1);

// Nested array of string
let greetarrs:string[][] = [
     ['hi'],
     ["hello","hay"],
     ["hifi","zoho"]
];
console.log(greetarrs);

// Nested array of number
let evenarrs:number[][] = [
     [2,4],
     [6,8,10],
     [12,14,16]
];
console.log(evenarrs);

// Nested array of number
let infoarrs:(string|number|boolean)[][] = [
     ["aung aung",1001],
     ["age",28],
     ["hobby","sport","reading"],
     ["hascar",false]
];
console.log(infoarrs);

// Tuple (fixed value or fixed length)
const product:[string,number] = ["Redbull",2500]
console.log(product)

// 12DT



// Understanding [][] Syntax
// The [][] syntax means "an array of arrays", where:

// The outer array contains inner arrays.
// The inner arrays contain the specified data type.


// Notation	Meaning	Example
// string[]	Single-level array (list of strings)	["hi", "hello"]
// string[][]	Two-level nested array (array of string arrays)	[["hi"], ["hello", "hey"]]
// string[][][]	Three-level nested array (array of arrays of string arrays)	[[["hi"]], [["hello", "hey"]]]


// Example of deeper nesting
// let deepNested: number[][][] = [
//     [ [1, 2], [3, 4] ],  // First outer array
//     [ [5, 6], [7, 8] ]   // Second outer array
// ];

// console.log(deepNested[0]);   // Output: [ [1, 2], [3, 4] ]
// console.log(deepNested[0][1]); // Output: [3, 4]
// console.log(deepNested[0][1][0]); // Output: 3



// Each sub-array can contain any combination of string, number, or boolean.
// 📌 (string | number | boolean)[][]
// string | number | boolean: Union type — each item can be any of these types.
// [][]: Indicates it's a 2D (nested) array — an array of arrays