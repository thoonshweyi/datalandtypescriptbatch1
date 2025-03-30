"use strict";
// => Basic Types
// => void Type
let country;
console.log(country); // undefined
let brandname = "";
let phone = (brand) => {
    brandname = brand;
};
console.log(phone("iPhone")); // undefined (because the function is void)
console.log(brandname);
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
let age1 = undefined;
// let age2:undefined = null;
// let age3:undefined = 25;
// let age4:undefined = "Hay";
let age5 = null;
let age6 = 25;
let age7 = "Hay";
console.log(age1);
console.log(age5);
console.log(age6);
console.log(age7);
// => Type Aliases
let cashback = 1000;
cashback = 500;
console.log(cashback);
let cashreturn = 2000;
console.log(cashreturn); // 2000
const price = 500;
console.log(price);
const itemprice = 500;
console.log(itemprice);
const newcourse = 'vdo';
console.log(newcourse);
const student = {
    name: "Aung Aung",
    gender: "male",
    age: 25
};
// student.hascar = false;
console.log(student);
// let numberarrs:NestedArray = [10,20];
// let numberarrs:NestedArray = [10,20,[30,40]];
let numberarrs = [10, 20, [30, 40, [500, 600]]];
console.log(numberarrs);
const officestaff = {
    id: 1001,
    name: "Yu Yu",
    department: "Accounting"
};
console.log(officestaff); //
console.log(typeof officestaff); //
const newstaff = JSON.stringify(officestaff);
console.log(newstaff); //
console.log(typeof newstaff);
function staffinfo(newstaffjson) {
    // return JSON.parse(newstaffjson);
    // Old
    // return (<Employee>JSON.parse(newstaffjson));
    // New Method
    return JSON.parse(newstaffjson);
}
console.log(staffinfo(newstaff)); //{ id: 1001, name: 'Yu Yu', department: 'Accounting' }
console.log(staffinfo(newstaff).id); // 1001
console.log(staffinfo(newstaff).name); // Yu Yu
console.log(staffinfo(newstaff).department); // Yu Yu
// => Union Type
let luckynumber = "777";
console.log(luckynumber);
// Union Type in functions  
function userinfo(name, age) {
    console.log(`My name is ${name}. i am ${age} years old.`);
}
userinfo("Tun Tun", "20");
userinfo("Kyaw Kyaw", 20);
// => exercise, Type Guards
function getinput(val) {
    if (typeof val === "string") {
        return val.toUpperCase();
    }
    else {
        return val * 2;
    }
}
console.log(getinput("hi"));
console.log(getinput(20));
let dinner = (amount, servicefee) => {
    if (typeof servicefee === "number") {
        return amount + servicefee;
    }
    else {
        return amount + parseInt(servicefee);
    }
};
console.log(dinner(3000, 500)); // 3500
console.log(dinner(3000, "200")); // 3200
// console.log(dinner(3000,200)) // error
// console.log(dinner(3000,501)) // error
console.log(dinner(3000, "100 usd")); // 3100
console.log(dinner(3000, "use 50")); // NaN
let lunch = (amount, servicefee) => {
    if (typeof servicefee === "number") {
        return amount + servicefee;
    }
    else {
        return amount + parseInt(servicefee);
    }
};
console.log(lunch(3000, 500)); // 3500
console.log(lunch(3000, "200")); // 3200
console.log(lunch(3000, "100 usd")); // 3100
console.log(lunch(3000, "use 50")); // NaN
const desktop = {
    brand: "MSI",
    price: 800,
    cpu: "Intel Core I9",
    coolingfun: false
};
console.log(desktop);
const laptop = {
    brand: "HP",
    price: 600,
    cpu: "Intel Core I7",
};
console.log(laptop);
laptop.cpu = "Corei7";
console.log(laptop);
const newperson = {
    uid: 1001,
    name: "Maung Kyaw",
    age: 30,
    department: "IT"
};
console.log(newperson);
//  exe2 (intersection types with function)
function printpersoninfo(obj) {
    console.log(`ID is ${obj.uid}, Name is ${obj.name}, Age is ${obj.age}, Department is ${obj.department}`);
}
printpersoninfo(newperson);
const nextjsclass = {
    id: 1002,
    title: "Nextjs Batch 1",
    price: 80000,
    type: "Zoom Class",
    content() {
    },
    cloudprovider() {
    },
    paymentgateway() {
    }
};
console.log(nextjsclass);
// => Function Type , Default Parameter (=value),  Optional Parameter (?)
// exe 1 Default Parameter
function greet(name, age = 18) {
    return `Hello, my name is ${name} and I am ${age} year old.`;
}
console.log(greet("Hnin Mya", 20));
console.log(greet("Hsu Hnin"));
// exe 2 (Optional Parameter)
function greeting(name, age) {
    if (age !== undefined) {
        return `Hello, my name is ${name} and I am ${age} year old.`;
    }
    else {
        return `Hello, my name is ${name}.`;
    }
}
console.log(greeting("Nyi Nyi", 20)); // Hello, my name is Nyi Nyi and I am 20 year old.
console.log(greeting("Nyaung Nyaung")); // Hello, my name is Nyaung Nyaung.
// exe 3 
let sayhi;
sayhi = (msg) => {
    return msg;
};
console.log(sayhi("Mingalar Par"));
//  exe 3 (ii)
let sayhello;
sayhello = (msg, name, content = "What are you doing.") => {
    if (name !== undefined) {
        return `Hello ${msg}!, ${name} ${content}`;
    }
    else {
        return `Hello ${msg}!, ${content}`;
    }
};
console.log(sayhello("Min Ga Lar Par", "Muyar", "How are you.")); //Hello Min Ga Lar Par!, Muyar How are you.
console.log(sayhello("Min Ga Lar Par")); //Hello Min Ga Lar Par!, What are you doing.
const vipcu = {
    name: "U Hla",
    phone: "09123456",
    address: {
        street: "123 Main st",
        city: "Mandalay",
        country: "Myanmar",
    }
};
console.log(vipcu);
// => Literal Object Type
function employer(owner) {
    return owner.fullname;
}
console.log(employer({ fullname: "Mon Mon" }));
// => Literal Object Type (Destructuring)
function lawyer({ fullname }) {
    return fullname;
}
console.log(lawyer({ fullname: "U Ba" }));
// => typeof in "in typescript Typequery"
console.log(typeof "Hello Sir"); // string
console.log(typeof 1500); // number
const Animal = {
    name: "Panda",
    age: 7
};
let petone = {
    age: 10,
    name: "Cut Cat"
};
console.log(petone);
