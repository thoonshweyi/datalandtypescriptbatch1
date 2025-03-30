// => Basic Types

// => void Type

let country:void;
console.log(country); // undefined

let brandname:string = "";

let phone = (brand:string):void =>{
     brandname = brand;
}

console.log(phone("iPhone")) // undefined (because the function is void)
console.log(brandname)

// function userpoints(cashdown:boolean):number{

//      if(cashdown){
//           return points = 100;
//      }else{
//           return points = 0;
//      }
// }

// let user1 = userpoints(true);
// let user2 = userpoints(false);
// let user3 = userpoints(null);
// let user4 = userpoints(undefined);


let age1:undefined = undefined;
// let age2:undefined = null;
// let age3:undefined = 25;
// let age4:undefined = "Hay";

let age5:undefined | null = null;
let age6:undefined | number = 25;
let age7:undefined | string = "Hay";


console.log(age1)
console.log(age5)
console.log(age6)
console.log(age7)

// => Type Aliases
let cashback:number = 1000;
cashback = 500;
console.log(cashback);

type Promotion = number; // Note: this is not value ! it's just type
let cashreturn:Promotion = 2000
console.log(cashreturn); // 2000

const price:300 | 500 | 700 = 500;
console.log(price);

type FixedPrice = 300 | 500 | 700; // Note: this is not value ! this is justy type
const itemprice:FixedPrice = 500;
console.log(itemprice);

type DLTClassType = 'zoom' | "vdo";
const newcourse:DLTClassType = 'vdo'
console.log(newcourse)

type PersonInfo = {
     name:string,
     gender:string,
     age:number
}

const student:PersonInfo = {
     name:"Aung Aung",
     gender:"male",
     age:25
}
// student.hascar = false;

console.log(student);
//  => Recursive Type

type NestedArray = number | NestedArray[];

// let numberarrs:NestedArray = [10,20];
// let numberarrs:NestedArray = [10,20,[30,40]];
let numberarrs:NestedArray = [10,20,[30,40,[500,600]]];


console.log(numberarrs);

// => Type Assertions

type Employee = {
     id:number,
     name:string,
     department:string
};
const officestaff:Employee = {
     id:1001,
     name:"Yu Yu",
     department: "Accounting"
}

console.log(officestaff); //
console.log(typeof officestaff); //

const newstaff = JSON.stringify(officestaff);
console.log(newstaff); //
console.log(typeof newstaff); 

function staffinfo(newstaffjson:string):Employee{
     // return JSON.parse(newstaffjson);

     // Old
     // return (<Employee>JSON.parse(newstaffjson));

     // New Method
     return (JSON.parse(newstaffjson) as Employee);
}
console.log(staffinfo(newstaff)); //{ id: 1001, name: 'Yu Yu', department: 'Accounting' }
console.log(staffinfo(newstaff).id); // 1001
console.log(staffinfo(newstaff).name); // Yu Yu
console.log(staffinfo(newstaff).department); // Yu Yu


// => Union Type
let luckynumber:number|string = "777";
console.log(luckynumber)

// Union Type in functions  
function userinfo(name:string,age:number|string){
     console.log(`My name is ${name}. i am ${age} years old.`);
}

userinfo("Tun Tun","20")
userinfo("Kyaw Kyaw",20)

// => exercise, Type Guards
function getinput(val:string|number){
     if(typeof val === "string"){
          return val.toUpperCase();
     }else{
          return val * 2;
     }
}
console.log(getinput("hi"))
console.log(getinput(20))

let dinner = (amount:number,servicefee: string|100|300|500):number=>{
     if(typeof servicefee === "number"){
          return amount + servicefee
     }else{
          return amount + parseInt(servicefee)
     }
}
console.log(dinner(3000,500)) // 3500

console.log(dinner(3000,"200")) // 3200

// console.log(dinner(3000,200)) // error
// console.log(dinner(3000,501)) // error

console.log(dinner(3000,"100 usd")) // 3100
console.log(dinner(3000,"use 50")) // NaN

let lunch = (amount:number,servicefee: string|number):number=>{
     if(typeof servicefee === "number"){
          return amount + servicefee
     }else{
          return amount + parseInt(servicefee)
     }
}
console.log(lunch(3000,500)) // 3500
console.log(lunch(3000,"200")) // 3200
console.log(lunch(3000,"100 usd")) // 3100
console.log(lunch(3000,"use 50")) // NaN


// 1VO

// Understanding the Type Definition
// type NestedArray = number | NestedArray[];
// This means that NestedArray can be either:
// A number
// An array of NestedArray (which means it can contain numbers or other nested arrays)

// =>Object Type 
type ComputerUnit = {
     readonly brand: string,
     price: number,
     cpu: string,
     coolingfun?: boolean
 };

 const desktop:ComputerUnit = {
     brand : "MSI",
     price: 800,
     cpu: "Intel Core I9",
     coolingfun: false
 }
 console.log(desktop);

 const laptop:ComputerUnit = {
     brand : "HP",
     price: 600,
     cpu: "Intel Core I7",
 }
 console.log(laptop);

 laptop.cpu  = "Corei7";
 console.log(laptop);


// Intersection Type
 type Person = {
     name:string;
     age:number;
 }

 type Staff = {
     uid: number;
     department: string;
 }

 type StaffPerson = Person & Staff

 const newperson:StaffPerson = {
     uid:1001,
     name:"Maung Kyaw",
     age:30,
     department: "IT"
 }
 console.log(newperson);

//  exe2 (intersection types with function)

function printpersoninfo(obj:StaffPerson){
     console.log(`ID is ${obj.uid}, Name is ${obj.name}, Age is ${obj.age}, Department is ${obj.department}`)
}
printpersoninfo(newperson)

// exe 3
type Article = {
     id:number;
     title:string;
     price:number;
     type:string;
}

type ArticleDescription = {
     content():void
}
type ArticleVdoRecord = {
     cloudprovider():void
}

type ArticlePayment = {
     paymentgateway():void
}

type NewArticle = Article & ArticleDescription 
                    & ArticleVdoRecord & ArticlePayment;

const nextjsclass:NewArticle = {
     id: 1002,
     title: "Nextjs Batch 1",
     price: 80000,
     type: "Zoom Class",
     content(){

     },
     cloudprovider(){

     },
     paymentgateway(){

     }
}
console.log(nextjsclass);

// => Function Type , Default Parameter (=value),  Optional Parameter (?)

// exe 1 Default Parameter

function greet(name:string,age:number=18){
     return `Hello, my name is ${name} and I am ${age} year old.`
}
console.log(greet("Hnin Mya",20));
console.log(greet("Hsu Hnin"));

// exe 2 (Optional Parameter)

function greeting(name:string,age?:number):string{

     if(age !== undefined){
          return `Hello, my name is ${name} and I am ${age} year old.`
     }else{
          return `Hello, my name is ${name}.`
     }
}

console.log(greeting("Nyi Nyi",20)); // Hello, my name is Nyi Nyi and I am 20 year old.
console.log(greeting("Nyaung Nyaung")); // Hello, my name is Nyaung Nyaung.

// exe 3 
 let sayhi:Function;
 sayhi = (msg:string):string=>{
     return msg;
 }
 console.log(sayhi("Mingalar Par"));

//  exe 3 (ii)

let sayhello: (msg:string,name?:string, content?:string)=>string;

sayhello = (msg,name,content="What are you doing.")=>{
     if(name !== undefined){
          return `Hello ${msg!}!, ${name} ${content}`;
     }else{
          return `Hello ${msg!}!, ${content}`;

     }

}

console.log(sayhello("Min Ga Lar Par","Muyar","How are you.")); //Hello Min Ga Lar Par!, Muyar How are you.
console.log(sayhello("Min Ga Lar Par")); //Hello Min Ga Lar Par!, What are you doing.

// 5BH

// Why Declare in Two Lines?
// This is a common TypeScript pattern:

// First line (type declaration): Helps with strong typing and clarity.

// Nested Type
type Address = {
     street: string,
     city: string,
     country:string
}
type Customer = {
     name: string;
     phone: string;
     address:Address;
}
const vipcu:Customer = {
     name : "U Hla",
     phone : "09123456",
     address: {
          street : "123 Main st",
          city : "Mandalay",
          country : "Myanmar",

     }
}
console.log(vipcu)
// => Literal Object Type
function employer(owner:{fullname:string}):string{
     return owner.fullname
}
console.log(employer({fullname:"Mon Mon"}));

// => Literal Object Type (Destructuring)
function lawyer({fullname}:{fullname:string}):string{
     return fullname
}
console.log(lawyer({fullname:"U Ba"}));

// => typeof in "in typescript Typequery"
console.log(typeof "Hello Sir"); // string
console.log(typeof 1500); // number

const Animal = {
     name: "Panda",
     age:7
}
type Pet = typeof Animal;

let petone:Pet = {
     age:10,
     name:"Cut Cat"
}
console.log(petone);