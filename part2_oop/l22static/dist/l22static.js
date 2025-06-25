"use strict";
// => instance method
class Person {
    constructor(name) {
        this.name = name;
    }
    sayhi() {
        console.log(`Hellow, my name is ${this.name}`);
    }
}
const personObj = new Person("Aung Aung");
personObj.sayhi();
// => static method
class MathUtil {
    static square(num) {
        return num * num;
    }
}
console.log(MathUtil.square(2));
// => Exercise 1
class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // instance method
    introduce() {
        console.log(`Hi, I\'m ${this.name} and I\'m ${this.age} years old.`);
    }
    // static method
    static isover18(age) {
        return age >= 18;
    }
}
const peopleObj = new People("Yoon Yoon", 20);
peopleObj.introduce(); // Hi, I'm Yoon Yoon and I'm 20 years old.
// console.log(peopleObj.isover18(20))
console.log(People.isover18(20)); // true
// => Exercise 2 (static peoperty)
class NumCounter {
    static increment() {
        NumCounter.count++;
    }
    static showresult() {
        console.log(`Total Count is = ${NumCounter.count}`);
    }
}
NumCounter.count = 0;
NumCounter.showresult(); // Total Count is = 0
NumCounter.increment();
NumCounter.increment();
NumCounter.increment();
NumCounter.increment();
NumCounter.increment();
NumCounter.showresult();
// => Exercise 3 (static peoperty)
class Staff {
    constructor(name) {
        this.name = name;
        Staff.totalstaff++;
    }
    static showtotal() {
        console.log(`Total staff: ${Staff.totalstaff}`);
    }
}
Staff.totalstaff = 0;
const staffObj1 = new Staff("Su Su");
const staffObj2 = new Staff("Yu Yu");
const staffObj3 = new Staff("Nu Nu");
Staff.showtotal();
// 18ST
