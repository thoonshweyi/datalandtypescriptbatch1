// => Enum 

// Numeric Enum (default, auto-increment from 0) 
// String Enum

// PascaleCase

// camelCase
// snake_case
 enum ListFruits{
     Apple,
     Orange,
     Banana,
     Mango,
     Tomato
}
console.log(ListFruits); // if you want direct print! "const can't use"
console.log(ListFruits.Apple); // 0
console.log(ListFruits.Mango); // 3

// let, var can't in enum
enum ListNumbers{
     Apple = 10,
     Orange,
     Banana,
     Mango,
     Tomato = 100
}

let fruitnum1:ListNumbers = ListNumbers.Apple;
let fruitnum2:ListNumbers = ListNumbers.Orange;
let fruitnum3:ListNumbers = ListNumbers.Tomato;

console.log(ListNumbers);

console.log(fruitnum1); // 10
console.log(fruitnum2); // 11
console.log(fruitnum3); // 12

enum HttpCode{
     OK = 200,
     BadRequest = 400,
     Unauthorized = 401
}

console.log(HttpCode.OK); // 200
console.log(HttpCode.BadRequest); // 400
console.log(HttpCode.Unauthorized); // 401

enum StaffInfo{
     Fullname = "Yamone",
     Position = "Manager"
}

let staffname:StaffInfo = StaffInfo.Fullname;
let staffposition:StaffInfo = StaffInfo.Position;
console.log(staffname,staffposition);


enum EmployeeDetails{
     ID = 1001,
     Fullname = "Yoon",
     Salary = 800000
}
let employeeid:EmployeeDetails = EmployeeDetails.ID;
let employeename:EmployeeDetails = EmployeeDetails.Fullname;
let employeesalary:EmployeeDetails = EmployeeDetails.Salary;
console.log(employeeid,employeename,employeesalary)

// Reverse Mapping (only works with numeric enums)

enum Color{
     Red = 1,
     Green,
     Blue
}
console.log(Color);
console.log(Color[1]); // Red

enum Size{
     Small = 10,
     Medium = 13,
     Large = 17,
}
console.log(Size[1]) // undefied
console.log(Size[13]) // Medium = 13,

// => Enum Merging, Ambient Enum
enum Colour{
     Red = "RED",
     Green = "GREEN"
}
enum Colour{
     Blue = "BLUE",
     Yellow = "YELLOW"
}
console.log(Colour) // { Red: 'RED', Green: 'GREEN', Blue: 'BLUE', Yellow: 'YELLOW' }
console.log(Colour.Green)
console.log(Colour.Blue)

// => with Function 

enum Direction{
     North,
     South,
     East,
     West
}

function move(direct:Direction){
     console.log("You are moving to: ",direct); // You are moving to:  2
}
move(Direction.East);

enum Role{
     Admin = "ADMIN",
     Editor = "EDITOR",
     User = "USER"
}
function getrole(role:Role){
     console.log(`You are a ${role}`);
}
getrole(Role.User);

enum CarEngine{
     Stopped,
     Started
}
function isenginerunning(status:CarEngine):boolean{

     return status === 1
}
console.log(isenginerunning(CarEngine.Stopped)); // false
console.log(isenginerunning(CarEngine.Started)); // true
// 14EN