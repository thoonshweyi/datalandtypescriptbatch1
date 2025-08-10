// => method 1
// export function getname({name}:{name:string}){
//      return name;
// }
// => method 2
// function getname({name}:{name:string}){
//      return name;
// }
// export {getname}
// method 3 (with alias)
// function getname({name}:{name:string}){
//      return name;
// }
// export {getname as GetNaming}
// => method 4 (with multi export)
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
export { userdatas, getname, getage };
// Error
// const mytestobj: {model:string,ram:number} = {model:"2024",ram:16,battery:50000} 
// const myexe =  {model:"2024",ram:16,battery:50000} 
// const mytestobj: {model:string,ram:number} = myexe;
