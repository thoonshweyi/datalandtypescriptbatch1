// default export, not need ()
// method 1
// import employeeinfos from "./l30export"
// console.log(employeeinfos);
// import staffinfo from "./l30export"
// console.log(staffinfo); // we can use naming convertion
// => method 2
// import student from "./l30export"
// console.log(student)
// => method 3 (with multi export)
import l30export from "./l30export";
console.log(l30export);
console.log(l30export.userdatas);
console.log(l30export.getname(l30export.userdatas));
console.log(l30export.getage(l30export.userdatas));
