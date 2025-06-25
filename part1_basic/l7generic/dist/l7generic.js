"use strict";
// => Regular Array
let colorregarrs = ["red", "green", "blue"];
let numregarrs = [10, 20, 30];
let mixregarrs = [100, 200, 300, "red", "green", "blue"];
// nexted number
let evennumregarrs = [[2, 4], [6, 8], [10, 21]];
// nested string,number,boolean array
let inforegarrs = [["aung"], ["age", 28], ["hobby", "sport"]];
//=> fixed value
const productdetails = ["Redbull", 2500];
// let numbers:NextedArray = [1,2];
let numbers = [1, 2, [30, 40]];
// => Generic 
// Array Notation => T[]
// Generic Array Type => Array<T>
let colorgenarrs = ['red', 'green', 'blue'];
console.log(colorgenarrs);
let numgenarr = [10, 20, 30];
let boolgenarrs = [true, false];
let mingenarrs = [100, 200, 300, "red", false, "green", "blue", true];
console.log(mingenarrs);
// => nested number type array
let evengenarrs = [[2, 4], [6, 8], [10, 12]];
console.log(evengenarrs);
// => nexted string,number,boolean type array
let mixgenarrs = [["aung aung"], ["age", 28], ["hobby", "sport", "reading"], ['hascar', false]];
console.log(mixgenarrs);
// => Generic Function for Arrays
// syntax
// function funname<T>(parameter:T):T{
//        return parameter
// }
// <T> is a type parameter that acts as a placeholder
//  T is used as the type for the function parameter and return type.
function genfunone(value) {
    return value;
}
console.log(genfunone('hello')); // hello
console.log(genfunone(1500)); // 1500
console.log(genfunone(true)); // true
console.log(genfunone('hello')); // hello
console.log(genfunone(1500)); // 1500
console.log(genfunone(true)); // 1500
// exe 2
function genfuntwo(arrs) {
    return arrs[0];
}
console.log(genfuntwo(["red", "green", "blue"])); // red
console.log(genfuntwo([10, 20, 30])); // 10
// exe 3
function genfunthree(val) {
    return val[2];
}
let strresult = genfunthree(["aung aung", "maung maung", "tun tun", "kyaw kyaw"]);
console.log(strresult);
let numresult = genfunthree([10, 20, 30, 40]);
console.log(numresult);
let boolresult = genfunthree([true, false, true, false]);
console.log(boolresult);
// => Function with Two Generic Types
function genfunfour(val1, val2) {
    return [val1, val2];
}
console.log(genfunfour("Hsu Hsu", 28)); // [ 'Hsu Hsu', 28 ]
console.log(genfunfour("has car", false)); // [ 'has car', false ]
// => Default type for generic function
function genfunfive(value) {
    return value;
}
console.log(genfunfive(""));
console.log(genfunfive("Hello"));
console.log(genfunfive(100));
console.log(typeof genfunfive(100));
console.log(genfunfive(true));
console.log(typeof genfunfive(true));
const Article = {
    title: "Artile 1",
    content: "This is the story of article 1",
    price: "20 USD"
};
const Post = {
    title: 2,
    content: 2.2222,
    price: 20
};
console.log(Article);
const item = {
    name: "Redbull",
    price: 250
};
const item2 = {
    name: "Sponsor",
    price: "FOC"
};
let myset = new Set([10, 20, 30, 10, 20]);
console.log(myset); // Set(3) { 10, 20, 30 }
console.log(myset.size); // 3
console.log(myset.has(20)); // true
console.log(myset.has(90)); // false
// Generic Set
let numberset = new Set([1, 2, 3, 1, 3]);
console.log(numberset); // Set(3) { 1, 2, 3 }
let nameset = new Set(['aung aung', 'kyaw kyaw', 'tun tun']);
console.log(nameset); // Set(3) { 'aung aung', 'kyaw kyaw', 'tun tun' }
let mixeddata = new Set([1, "2", "Three"]);
console.log(mixeddata); // Set(3) { 1, '2', 'Three' }
// => Common Set Methods with Generics
const numset = new Set();
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
const colorset = new Set(["Red", "Green", "Blue", "White", "Black"]);
for (let color of colorset) {
    console.log(color);
}
colorset.forEach(color => {
    console.log(color);
});
const userset = new Set([
    { id: 1, name: "Hsu Hsu", age: 20 },
    { id: 2, name: "Nu Nu", age: 18 },
    { id: 3, name: "Yu Yu", age: 15 },
]);
userset.add({ id: 4, name: "Hla Hla", age: 16 });
console.log(userset);
// exe
const shop = {
    name: 'Apple Store',
    city: "Yangon"
};
let store = {
    name: "Cherry Store",
    city: "Mandalay"
};
console.log(store);
function getshopinfo(obj, info) {
    return obj[info];
}
let shopname = getshopinfo(store, 'name');
console.log(shopname); // Cherry Store
let shopcity = getshopinfo(store, 'city');
console.log(shopcity); // Mandalay
