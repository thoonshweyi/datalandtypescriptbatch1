// => Regular Array

let colorregarrs:string[] = ["red","green","blue"];
let numregarrs:number[] = [10,20,30];
let mixregarrs: (string|number|boolean)[] = [100,200,300,"red","green","blue"]

// nexted number
let evennumregarrs:number[][] = [[2,4],[6,8],[10,21]];

// nested string,number,boolean array
let inforegarrs:(string|number|boolean)[][] = [["aung"],["age",28],["hobby","sport"]] 

//=> fixed value
const productdetails:[string,number] = ["Redbull",2500];

type NextedArray = number | NextedArray[];
// let numbers:NextedArray = [1,2];
let numbers:NextedArray = [1,2,[30,40]];


// => Generic 
// Array Notation => T[]
// Generic Array Type => Array<T>

let colorgenarrs:Array<string> = ['red','green','blue'];
console.log(colorgenarrs);

let numgenarr:Array<number> = [10,20,30];
let boolgenarrs:Array<boolean> = [true,false];
let mingenarrs:Array<string|number|boolean> = [100,200,300,"red",false,"green","blue",true];
console.log(mingenarrs);

// => nested number type array
let evengenarrs:Array<Array<number>> = [[2,4],[6,8],[10,12]]
console.log(evengenarrs);


// => nexted string,number,boolean type array
let mixgenarrs:Array<Array<string|number|boolean>> = [["aung aung"],["age",28],["hobby","sport","reading"],['hascar',false]]
console.log(mixgenarrs);

// => Generic Function for Arrays
// syntax
// function funname<T>(parameter:T):T{
//        return parameter
// }

// <T> is a type parameter that acts as a placeholder
//  T is used as the type for the function parameter and return type.

function genfunone<T>(value:T):T{
     return value;
}
console.log(genfunone('hello')) // hello
console.log(genfunone(1500)) // 1500
console.log(genfunone(true)) // true

console.log(genfunone<string>('hello')) // hello
console.log(genfunone<number>(1500)) // 1500
console.log(genfunone<boolean>(true)) // 1500

// exe 2
function genfuntwo<T>(arrs:T[]):T{
     return arrs[0];
}
console.log(genfuntwo(["red","green","blue"])) // red
console.log(genfuntwo([10,20,30])) // 10

// exe 3
function genfunthree<T>(val:Array<T>):T{
     return val[2];
}
let strresult = genfunthree<string>(["aung aung","maung maung","tun tun","kyaw kyaw"]);
console.log(strresult)

let numresult = genfunthree<number>([10,20,30,40]);
console.log(numresult)

let boolresult = genfunthree<boolean>([true,false,true,false]);
console.log(boolresult)

// => Function with Two Generic Types
function genfunfour<T1,T2>(val1:T1,val2:T2):[T1,T2]{
     return [val1,val2]
}
console.log(genfunfour<string,number>("Hsu Hsu",28)) // [ 'Hsu Hsu', 28 ]
console.log(genfunfour<string,boolean>("has car",false)) // [ 'has car', false ]

// => Default type for generic function
function genfunfive<T>(value:T):T{
     return value;
}
console.log(genfunfive(""))
console.log(genfunfive("Hello"))
console.log(genfunfive(100))
console.log(typeof genfunfive(100))
console.log(genfunfive(true))
console.log(typeof genfunfive(true))

// => Generic Object Type
// syntax
// type ObjectType<T> = {
//   key1: T
// }

type Book<T> = {
     title:T;
     content:T;
     price:T
}
const Article:Book<string> = {
     title: "Artile 1",
     content: "This is the story of article 1",
     price: "20 USD"
}
const Post:Book<number> = {
     title: 2,
     content: 2.2222,
     price: 20
}
console.log(Article)



// Generic Object with Multiple Properties
// type ObjectType<T1,T2> = {
//   first: T1
//   second: T2
// }

type Product<T1,T2> = {
     name: T1;
     price: T2;
};
const item:Product<string,number> = {
     name: "Redbull",
     price: 250
}
const item2:Product<string,string> = {
     name: "Sponsor",
     price: "FOC"
}


let myset = new Set([10,20,30,10,20])
console.log(myset); // Set(3) { 10, 20, 30 }
console.log(myset.size); // 3

console.log(myset.has(20)); // true
console.log(myset.has(90)); // false

// Generic Set
let numberset:Set<number> = new Set([1,2,3,1,3])
console.log(numberset); // Set(3) { 1, 2, 3 }

let nameset:Set<string> = new Set(['aung aung','kyaw kyaw','tun tun'])
console.log(nameset) // Set(3) { 'aung aung', 'kyaw kyaw', 'tun tun' }

let mixeddata:Set<string|number> = new Set([1,"2","Three"])
console.log(mixeddata); // Set(3) { 1, '2', 'Three' }

// => Common Set Methods with Generics
const numset:Set<number> = new Set();
numset.add(1);
numset.add(2);
numset.add(3);
numset.add(4);
numset.add(5);
console.log(numset); // Set(5) { 1, 2, 3, 4, 5 }
console.log(numset.has(2)); // true

numset.delete(3);
console.log(numset); // Set(4) { 1, 2, 4, 5 }

numset.clear();
console.log(numset); // Set(0) {}

// => Iterating Generic Set
const colorset:Set<string> = new Set(["Red","Green","Blue","White","Black"])

for(let color of colorset){
     console.log(color)
}

colorset.forEach(color => {
     console.log(color)
})

// => Generic Set with Object
type User = {
     id:number;
     name:string;
     age:number
}

const userset:Set<User> = new Set([
     {id:1,name:"Hsu Hsu",age:20},
     {id:2,name:"Nu Nu",age:18},
     {id:3,name:"Yu Yu",age:15},
])
userset.add({id:4,name:"Hla Hla",age:16});
console.log(userset);