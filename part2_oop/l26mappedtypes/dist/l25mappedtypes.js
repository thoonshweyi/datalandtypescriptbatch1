"use strict";
// => Mapped Types 
// => Indexed Access Type
const Employee = {
    name: "aye aye",
    gender: "female",
    city: "mandalay"
};
const member = {
    name: "Ni Ni",
    age: 25
};
member.name = "War War";
console.log(member); // { name: 'Ni Ni', age: 25 }
const user = {
    name: "Su Su",
    age: 30
};
// user.name  = "Yu Yu";
console.log(user); // { name: 'Ni Ni', age: 25 }
const guestlogin = {
    name: "Kyaw Kyaw",
    email: "kyawkyaw@gmail.com"
};
console.log(guestlogin); // { name: 'Kyaw Kyaw', email: 'kyawkyaw@gmail.com' }
const emplogin = {
    name: "Nadi",
    age: 25,
    email: "kyawkyaw@gmail.com",
    password: "abc123456789"
};
console.log(emplogin); // {name: 'Nadi',age: 25,email: 'kyawkyaw@gmail.com',password: 'abc123456789'}
// 23MT
