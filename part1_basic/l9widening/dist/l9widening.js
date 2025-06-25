"use strict";
// =>  Type Widening
let fullname = "Mar Lar";
fullname = "Kyi Pyar";
let age = 25;
age = 30;
const student = {
    name: "Yu Yu", // must be same value as type person, must contain "as const"
    age: 20
};
function studentname(student) {
    return student.name;
}
console.log(studentname(student));
