// method 1
// const employeeinfos = {
//      name: "Yi Yi",
//      age: 25
// }
// export default employeeinfos;
// => method 2
// export default{
//      name: "Linn Linn",
//      age: 18
// }
// => method 3 (with multi export)
const userdatas = {
    name: "Kyaw Kyaw",
    age: 20
};
function getname({ name }) {
    return name;
}
function getage({ age }) {
    return age;
}
export default { userdatas, getname, getage };
