"use strict";
// unknown va any
// Feaure                          unknown                       any
// Type safety                     Safe                          Unsafe
// Assin to other types            Not alloed without checks     Allow (even if wrong)
// => unknown
let sayhi = "Hello Sir";
let age = 28;
console.log(typeof age); // number
// let getage:number = age;
// console.log(getage); // can' use unknown to number types
// exe 1
let getage = typeof age === 'number' ? age : 20;
console.log(getage);
// exe 2
let phone = '0912345';
console.log(typeof phone); // string
let getphone = typeof phone === "number" ? phone : 119;
console.log(getphone);
// exe 3
let unknownval = 'hello';
unknownval = true;
unknownval = 20;
console.log(unknownval); // 20
let getval = typeof unknownval === 'number' ? unknownval : 0;
console.log(getval);
// -------------------------------
let fullame = "Kyaw Kyaw";
let nickname = fullame;
console.log(nickname);
let firstname = "Hsu";
let lastname = firstname;
console.log(firstname);
// exe 3
let anyval = 'hello';
anyval = 20;
anyval = true;
console.log(anyval); // true
let getnum = anyval;
console.log(getnum);
// -------------------------------
// => any with unknown
let brand = "Redbull";
let price = brand;
let fee = price; // beware: string is working with number
console.log(fee); // Redbull
// Recommended
let brandname = "Sponsor";
let oridinaryprice = brandname;
// let saleprice:number = oridinaryprice // error, beware: string is not working with number
let sellprice = typeof oridinaryprice === "number" ? oridinaryprice : 0;
console.log(sellprice);
// --------------------------------------------
// => unknown in Union (|) vs intersection (&) types
// let productname:unknown|string = "Sponsor"; // unknown|string not oki, any|string is oki
// let company:string = productname; // error
// let productname:unknown|number = 1500; // unknown|string not oki, any|string is oki
// let companyname:number = productname; // error
// let productname:unknown&string = "Sponsor"; // unknown|string not oki, any|string is oki
// let companyname:string = productname;
// console.log(companyname); // Sponsor
// let productname:unknown&number = 1500; // unknown|string not oki, any|string is oki
// let companyname:number = productname;
// console.log(companyname); // 1500
// let productname:unknown&string = 1500; // unknown|string not oki, any|string is oki
// let companyname:number = productname;
// console.log(companyname); // error, because oposite type
