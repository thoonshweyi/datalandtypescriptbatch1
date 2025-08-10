// naming export is need {}

// => method 1, method 2
// import {getname} from "./l29exports"
// console.log(getname({name:"Hsu Hsu"}))

// => method 3 (with alias)
// import {GetNaming} from "./l29exports"
// console.log(GetNaming({name:"Nu Nu"}))


// => method 4 (with multiexport)
// import {userdatas,getage,getname} from "./l29exports"

// console.log(getname(userdatas))
// console.log(getage(userdatas))

// exe 1 (from supplier.ts)
// import {userdatas,getage,getname} from "./l29suppliers"

// console.log(getname(userdatas))
// console.log(getage(userdatas))

// exe 2  (from supplier.ts)
import { studentarrs,buyerobjs } from "./l29suppliers";
console.log(studentarrs);
console.log(buyerobjs);

