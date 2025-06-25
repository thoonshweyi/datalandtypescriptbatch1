"use strict";
// => Enum 
// Numeric Enum (default, auto-increment from 0) 
// String Enum
// PascaleCase
// camelCase
// snake_case
var ListFruits;
(function (ListFruits) {
    ListFruits[ListFruits["Apple"] = 0] = "Apple";
    ListFruits[ListFruits["Orange"] = 1] = "Orange";
    ListFruits[ListFruits["Banana"] = 2] = "Banana";
    ListFruits[ListFruits["Mango"] = 3] = "Mango";
    ListFruits[ListFruits["Tomato"] = 4] = "Tomato";
})(ListFruits || (ListFruits = {}));
console.log(ListFruits); // if you want direct print! "const can't use"
console.log(ListFruits.Apple); // 0
console.log(ListFruits.Mango); // 3
// let, var can't in enum
var ListNumbers;
(function (ListNumbers) {
    ListNumbers[ListNumbers["Apple"] = 10] = "Apple";
    ListNumbers[ListNumbers["Orange"] = 11] = "Orange";
    ListNumbers[ListNumbers["Banana"] = 12] = "Banana";
    ListNumbers[ListNumbers["Mango"] = 13] = "Mango";
    ListNumbers[ListNumbers["Tomato"] = 100] = "Tomato";
})(ListNumbers || (ListNumbers = {}));
let fruitnum1 = ListNumbers.Apple;
let fruitnum2 = ListNumbers.Orange;
let fruitnum3 = ListNumbers.Tomato;
console.log(ListNumbers);
console.log(fruitnum1); // 10
console.log(fruitnum2); // 11
console.log(fruitnum3); // 12
var HttpCode;
(function (HttpCode) {
    HttpCode[HttpCode["OK"] = 200] = "OK";
    HttpCode[HttpCode["BadRequest"] = 400] = "BadRequest";
    HttpCode[HttpCode["Unauthorized"] = 401] = "Unauthorized";
})(HttpCode || (HttpCode = {}));
console.log(HttpCode.OK); // 200
console.log(HttpCode.BadRequest); // 400
console.log(HttpCode.Unauthorized); // 401
var StaffInfo;
(function (StaffInfo) {
    StaffInfo["Fullname"] = "Yamone";
    StaffInfo["Position"] = "Manager";
})(StaffInfo || (StaffInfo = {}));
let staffname = StaffInfo.Fullname;
let staffposition = StaffInfo.Position;
console.log(staffname, staffposition);
var EmployeeDetails;
(function (EmployeeDetails) {
    EmployeeDetails[EmployeeDetails["ID"] = 1001] = "ID";
    EmployeeDetails["Fullname"] = "Yoon";
    EmployeeDetails[EmployeeDetails["Salary"] = 800000] = "Salary";
})(EmployeeDetails || (EmployeeDetails = {}));
let employeeid = EmployeeDetails.ID;
let employeename = EmployeeDetails.Fullname;
let employeesalary = EmployeeDetails.Salary;
console.log(employeeid, employeename, employeesalary);
// Reverse Mapping (only works with numeric enums)
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
console.log(Color);
console.log(Color[1]); // Red
var Size;
(function (Size) {
    Size[Size["Small"] = 10] = "Small";
    Size[Size["Medium"] = 13] = "Medium";
    Size[Size["Large"] = 17] = "Large";
})(Size || (Size = {}));
console.log(Size[1]); // undefied
console.log(Size[13]); // Medium = 13,
// => Enum Merging, Ambient Enum
var Colour;
(function (Colour) {
    Colour["Red"] = "RED";
    Colour["Green"] = "GREEN";
})(Colour || (Colour = {}));
(function (Colour) {
    Colour["Blue"] = "BLUE";
    Colour["Yellow"] = "YELLOW";
})(Colour || (Colour = {}));
console.log(Colour); // { Red: 'RED', Green: 'GREEN', Blue: 'BLUE', Yellow: 'YELLOW' }
console.log(Colour.Green);
console.log(Colour.Blue);
// => with Function 
var Direction;
(function (Direction) {
    Direction[Direction["North"] = 0] = "North";
    Direction[Direction["South"] = 1] = "South";
    Direction[Direction["East"] = 2] = "East";
    Direction[Direction["West"] = 3] = "West";
})(Direction || (Direction = {}));
function move(direct) {
    console.log("You are moving to: ", direct); // You are moving to:  2
}
move(Direction.East);
var Role;
(function (Role) {
    Role["Admin"] = "ADMIN";
    Role["Editor"] = "EDITOR";
    Role["User"] = "USER";
})(Role || (Role = {}));
function getrole(role) {
    console.log(`You are a ${role}`);
}
getrole(Role.User);
var CarEngine;
(function (CarEngine) {
    CarEngine[CarEngine["Stopped"] = 0] = "Stopped";
    CarEngine[CarEngine["Started"] = 1] = "Started";
})(CarEngine || (CarEngine = {}));
function isenginerunning(status) {
    return status === 1;
}
console.log(isenginerunning(CarEngine.Stopped)); // false
console.log(isenginerunning(CarEngine.Started)); // true
// 14EN
