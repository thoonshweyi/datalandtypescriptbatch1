"use strict";
//  Modifier        Main Class     Sub Class      Outside
// public           yes            yes            yes
// protected        yes            yes            no
// provate          yes            no             no
// Syntax
// class ClassName{
//      private _property:Type
//      get propertyName():Type{
//           return this._property
//      }
//      set propertyName(value:Type){
//           this._property = value;
//      }
// }
// Example
class Person {
    constructor(name) {
        this._name = name;
    }
    // Getter
    get name() {
        return this._name;
    }
    // Setter
    set name(newname) {
        if (newname.length > 0) {
            this._name = this.name;
        }
        else {
            console.log("New name cannot be empty");
        }
    }
}
const personObj = new Person("Hsu Hsu");
console.log(personObj); // Person {_name: "Hsu Hsu"}
// console.log(personObj._name); // error
// console.log(personObj.name()); // error
console.log(personObj.name); // Hsu Hsu // before setter
personObj.name = "Su Su"; // after setter
// personObj.name = "";
console.log(personObj.name); // Su Su
// =>Exercise
class Student {
    constructor(id, name, age, _hasnrc, phone) {
        this.id = id;
        this.name = name;
        this.age = age;
        this._hasnrc = _hasnrc;
        this.phone = phone;
    }
    content() {
        console.log("Email is available.");
    }
    getage() {
        return this.age;
    }
    get hasnrc() {
        return this._hasnrc;
    }
    set hasnrc(value) {
        this._hasnrc = value;
    }
}
const studentObj = new Student(1001, "Kyaw Kyaw", 18, true);
console.log(studentObj);
studentObj.name = "Naw Naw";
console.log(studentObj.name); // Naw Naw
studentObj.phone = "09123456";
console.log(studentObj.phone); // 09123456
// studentObj.id = 1002 // error, readonly
// console.log(studentObj.age); // error, private
console.log(studentObj.getage()); // 18
console.log(studentObj.hasnrc); // true
studentObj.hasnrc = false;
console.log(studentObj.hasnrc); // false
