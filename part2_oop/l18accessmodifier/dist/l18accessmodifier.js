"use strict";
//  Modifier        Main Class     Sub Class      Outside
// public           yes            yes            yes
// protected        yes            yes            no
// provate          yes            no             no
// => Public (default)
class User {
    constructor(name) {
        this.name = name;
    }
    content() {
        console.log("Phone is available."); // 
    }
}
const userObj = new User("Kyaw Kyaw");
console.log(userObj.name); // Kyaw Kyaw
userObj.name = "Naw Naw";
console.log(userObj.name); // Naw Naw
console.log(userObj.content()); // Kyaw Kyaw
// => protected
class People {
    constructor(name) {
        this.name = name;
    }
}
class Employee extends People {
    greeting() {
        console.log(`Hello ${this.name}`);
    }
}
const employeeObj = new Employee("Tun Tun");
console.log(employeeObj.greeting());
// console.log(employeeObj.name); // error: because Property 'name is protected'
// => private 
class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }
    showbalance() {
        console.log(`Main Balance is ${this.balance}`);
    }
}
const bankObj = new BankAccount(2500);
// console.log(bankObj.balance); // error: because Property "balance is private"
console.log(bankObj.showbalance());
// => Exercise
class Student {
    // public readonly id: number;
    // public name:string;
    // private age:number; // Required params come before optional ones
    // protected phone?: string;
    // constructor(id:number,name:string,age:number,phone:string){
    //      this.id = id;
    //      this.name = name;
    //      this.age = age;
    //      this.phone = phone;
    // }
    constructor(id, name, age, phone) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.id = id;
        this.name = name;
        this.age = age;
        this.phone = phone;
    }
    content() {
        console.log("Email is available");
    }
    getage() {
        return this.age;
    }
    getphone() {
        return this.phone;
    }
}
const studentObj = new Student(1001, "Su Su", 18);
studentObj.name = "Hsu Hsu";
console.log(studentObj.name);
// studentObj.id = 1002; // error, readonly
// console.log(studentObj.age); // error, private
// console.log(studentObj.phone); error, protected
studentObj.content(); // Email is available
console.log(studentObj.getage()); // 18
const studentObj2 = new Student(1003, "Tun Tun", 20, "0912345");
console.log(studentObj2.getphone());
// 🔍 1. Optional Property (phone?: string in a class)
// This is used when you define a class or interface and you want to say:
// "This property may or may not exist on the object."
// ✅ Example:
// class Student {
//   name: string;
//   phone?: string; // 👉 optional property
// }
// Now, both of the following are valid:
// ts
// Copy
// Edit
// const s1 = new Student();
// s1.name = "Aung Aung";
// s1.phone = "0999999999"; // optional
// const s2 = new Student();
// s2.name = "Mya Mya"; // phone not set — also OK
// 💡 Optional property = "Can be missing in the object"
// 🔍 2. Optional Parameter (phone?: string in a function or constructor)
// This is used in functions or constructors to say:
// "This argument is optional when calling the function."
// ✅ Example:
// ts
// Copy
// Edit
// class Student {
//   phone?: string;
//   constructor(phone?: string) {
//     this.phone = phone;
//   }
// }
// Now you can create objects like:
// ts
// Copy
// Edit
// const s1 = new Student("0911111111"); // ✅ with phone
// const s2 = new Student();             // ✅ without phone
// 💡 Optional parameter = "Can be skipped when calling the function"
// 🧠 Summary Table
// Feature	Optional Property	Optional Parameter
// Used in	Class / Interface	Function / Constructor
// Syntax	phone?: string;	constructor(phone?: string)
// Meaning	The property might not be present	The argument might not be passed
// Default Value	undefined if not set	undefined if not passed
// Example Usage	Object structure	Function or constructor call flexibility
// class Students {
//   name: string;
//   phone?: string; // 👉 optional property
// }
// const s1 = new Students();
// s1.name = "Aung Aung";
// s1.phone = "0999999999"; // optional
// const s2 = new Students();
// s2.name = "Mya Mya"; // phone not set — also OK
// console.log(s1,s2)
// *Error (Property 'name' has no initializer and is not definitely assigned in the constructor)
// 🎯 Why initialize in the constructor?
// Because TypeScript’s goal is to protect you from using uninitialized (undefined) values.
// ✅ Main Reasons
// 1. Guaranteed Initialization
// When you use a constructor, you ensure that all required properties are set when the object is created.
// class Student {
//   name: string;
//   constructor(name: string) {
//     this.name = name; // ✅ name is always assigned
//   }
// }
// So now, TypeScript knows:
// "Whenever a Student is created, name will always be set."
// 2. Avoid Runtime Errors
// If you forget to assign a required property, you'll get undefined, which may cause bugs later.
// class Student {
//   name!: string; // dangerous if forgotten
// }
// const s = new Student();
// console.log(s.name.toUpperCase()); // ❗ runtime error if name is not set!
// 🧨 If you don’t assign it in the constructor, TypeScript can’t guarantee that name isn’t undefined.
// 3. Safer Code in Strict Mode
// TypeScript’s strictPropertyInitialization rule enforces that non-optional properties must be assigned.
// This helps catch bugs early while writing code instead of waiting for runtime errors.
