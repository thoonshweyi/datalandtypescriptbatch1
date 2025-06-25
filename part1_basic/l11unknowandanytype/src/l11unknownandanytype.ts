// unknown va any
// Feaure                          unknown                       any
// Type safety                     Safe                          Unsafe
// Assin to other types            Not alloed without checks     Allow (even if wrong)

// => unknown
let sayhi:unknown = "Hello Sir";
let age:unknown = 28;
console.log(typeof age); // number

// let getage:number = age;
// console.log(getage); // can' use unknown to number types

// exe 1
let getage:number = typeof age === 'number' ? age:20;
console.log(getage);

// exe 2
let phone:unknown = '0912345'
console.log(typeof phone); // string

let getphone:number = typeof phone === "number" ? phone : 119;
console.log(getphone);

// exe 3
let unknownval:unknown = 'hello';
unknownval = true;
unknownval = 20;

console.log(unknownval); // 20
let getval:number = typeof unknownval === 'number' ? unknownval : 0;
console.log(getval);

// -------------------------------
let fullame:any = "Kyaw Kyaw";
let nickname:number = fullame;
console.log(nickname);

let firstname:any = "Hsu";
let lastname:unknown = firstname;
console.log(firstname);

// exe 3
let anyval:any = 'hello';
anyval = 20;
anyval = true;

console.log(anyval); // true

let getnum:number = anyval;
console.log(getnum);
// -------------------------------
// => any with unknown
let brand:unknown = "Redbull";
let price:any = brand;

let fee:number = price; // beware: string is working with number
console.log(fee) // Redbull

// Recommended
let brandname:any = "Sponsor";
let oridinaryprice:unknown = brandname;

// let saleprice:number = oridinaryprice // error, beware: string is not working with number

let sellprice:number =  typeof oridinaryprice === "number" ? oridinaryprice : 0;
console.log(sellprice)
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
