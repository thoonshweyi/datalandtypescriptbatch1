"use strict";
// => Pick Mapped Types 
const projectObj = {
    title: "Redbull",
    // price: 1000 // this will cause an error because "id" and "price" are notincluded in PickTitleONly
};
const userObj = {
    name: "Bo Bo",
    age: 25,
    // email: "bobo@gmail.com" // this will cause an error because "id" and "email" are notincluded in PickTitleONly
};
function Employeefun(obj) {
    console.log(`${obj.name} = ${obj.position}`);
}
Employeefun({
    name: "Ko Ko",
    position: "Developer"
});
