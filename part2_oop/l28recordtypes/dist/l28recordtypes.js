"use strict";
// => Record Types
// exe 1
// const countryObj:Record<string, string> = {
//      MM: "Myanmar",
//      TH: "Thailand",
//      SLK: "Srilanka",
// }
// console.log(countryObj.MM); // Myanmar
// console.log(countryObj.TH); // Thailand
// => exe 2
// type RoleType = 'admin' | 'user' | 'guest';
// const permissionObj:Record<RoleType,string>={
//      admin: "full access",
//      user:"Limited access",
//      guest: "Read Only"
//      // vips:"special access " // vip is not included in role type
// }
// console.log(permissionObj.admin); // full access
// console.log(permissionObj.user); // Limited access
// // exe 3
// type UserRoleType = "teacher" | "student";
// type InfoType = {
//      name: string;
//      age: number;
//      email ?: string; // optional property
// }
// const userObj:Record<UserRoleType, InfoType> = {
//      teacher:{
//           name: "Mr.Tun Tun",
//           age: 30
//      },
//      student:{
//           name: "Ms.July",
//           age:18,
//           email : "ms.july@gmail.com"
//      },
// }
// exe 4
var Language;
(function (Language) {
    Language["Myanmar"] = "mm";
    Language["Emglish"] = "en";
    Language["Thailand"] = "th";
})(Language || (Language = {}));
const greetingObj = {
    mm: "Mingalarba",
    en: "Hello",
    th: "Sawadee",
    // japan: "Konnichiwa"
};
console.log(greetingObj.mm);
console.log(greetingObj.th);
const calculateObj = {
    add: (num1, num2) => num1 + num2,
    subtract: (num1, num2) => num1 - num2
};
console.log(calculateObj.add(10, 20));
console.log(calculateObj.subtract(100, 20));
// 30RT
