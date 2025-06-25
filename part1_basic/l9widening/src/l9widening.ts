// =>  Type Widening

let fullname = "Mar Lar";
fullname ="Kyi Pyar";

let age = 25;
age = 30;


type Person = {
     name:"Yu Yu";
     age:number
}

const student = {
     name:"Yu Yu" as const, // must be same value as type person, must contain "as const"
     age:20
}
function studentname(student:Person){
     return student.name
}

console.log(studentname(student));