"use strict";
// => Syntax
class MyClass {
}
// Example
class Staff {
}
const staffoneObj = new Staff();
console.log(staffoneObj);
staffoneObj.hasnrc = true;
staffoneObj.hascar = false;
console.log(staffoneObj); // Staff { hasnrc: true, hascar: false }
const stafftwoObj = new Staff();
console.log(stafftwoObj);
stafftwoObj.hasnrc = true;
stafftwoObj.hascar = false;
stafftwoObj.hasgirlfriend = false;
console.log(stafftwoObj); // Staff { hasnrc: true, hascar: false, hasgirlfriend: false }
class People {
    constructor() {
        this.name = "Maung Maung";
        this.email = "mgmg@gmail.com";
    }
}
const peopleObj = new People();
console.log(peopleObj); // People { name: 'Maung Maung', email: 'mgmg@gmail.com' }
peopleObj.city = "Mandalay";
console.log(peopleObj);
console.log(peopleObj.city);
// Exercise
class Employee {
    constructor() {
        this.name = "Yu Yu";
    }
}
const employeeObj = new Employee();
console.log(employeeObj); // Employee { name: 'Yu Yu' }
// add dynamic propertyeis
employeeObj.hasnrc = true;
employeeObj.hascar = false;
employeeObj.department = "IT Department";
console.log(employeeObj);
console.log(employeeObj.name); // Yu Yu
console.log(employeeObj.hasnrc); // true
console.log(employeeObj.department); // IT Department
// 11ID
