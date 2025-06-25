"use strict";
// =>Readonly 
class Student {
    constructor(id, name, age, phone) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.phone = phone;
    }
    content() {
        console.log("Email is available");
    }
}
const studentObj = new Student(1001, "Su Su", 18);
console.log(studentObj);
console.log(typeof studentObj); // object
console.log(studentObj.id); // 1001
console.log(studentObj.name); // Su Su
console.log(studentObj.age); // 18
console.log(studentObj.phone); // undefined
studentObj.content(); // Email is available
studentObj.phone = "0912345";
console.log(studentObj.phone); // 0912345
studentObj.name = "Hsu Hsu";
console.log(studentObj.name); // Hsu Hsu
// studentObj.id = 1004;
// console.log(studentObj.id) // Error
const stuObj = new Student(1002, "Tun Tun", 20, "09987654");
console.log(stuObj.phone); // 09987654
