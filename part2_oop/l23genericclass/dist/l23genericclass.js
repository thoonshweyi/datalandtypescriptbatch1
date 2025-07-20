"use strict";
// Basic Class
class NumberStore {
    constructor() {
        this.datas = [];
    }
    add(val) {
        this.datas.push(val);
    }
    getdatas() {
        return this.datas;
    }
}
const numberstoreObj = new NumberStore();
numberstoreObj.add(10);
numberstoreObj.add(20);
// numberstoreObj.add("hello"); // Error
console.log(numberstoreObj.getdatas());
// Generic Class
class Store {
    constructor() {
        this.datas = [];
    }
    add(val) {
        this.datas.push(val);
    }
    getdatas() {
        return this.datas;
    }
}
const storeObj1 = new Store();
storeObj1.add(80);
storeObj1.add(90);
// storeObj1.add("hello"); // Error
console.log(storeObj1.getdatas());
const storeObj2 = new Store();
// storeObj2.add(80); // error
// storeObj2.add(90); // error
storeObj2.add("ni ni");
storeObj2.add("aye aye");
console.log(storeObj2.getdatas());
const storeObj3 = new Store();
// storeObj3.add(80); // error
// storeObj3.add(90); // error
// storeObj3.add("ni ni"); // Error
// storeObj3.add("aye aye"); // Error
storeObj3.add(true); //
console.log(storeObj3.getdatas());
// => exercise 1
class Student {
    constructor(name, age, citiy) {
        this.name = name;
        this.age = age;
        this.citiy = citiy;
    }
}
const studentObj1 = new Student("Nilar", 18, "Yangon");
console.log(studentObj1); // Student { name: 'Nilar', age: 18, citiy: 'Yangon' }
const studentObj2 = new Student("Muyar", "17 years old", "Bago");
console.log(studentObj2); // Student { name: 'Muyar', age: '17 years old', citiy: 'Bago' }
class Storages {
    constructor() {
        this.datas = [];
    }
    add(val) {
        this.datas.push(val);
    }
    getdatas(id) {
        return this.datas.find(singledata => singledata.id == id);
    }
}
const storageObj = new Storages();
storageObj.add({ id: 1, name: "Aung Aung" });
storageObj.add({ id: 2, name: "Hla Hla" });
storageObj.add({ id: 3, name: "Kyaw Kyaw" });
console.log(storageObj.getdatas(1)); // { id: 1, name: 'Aung Aung' }
console.log(storageObj.getdatas(3)); // { id: 3, name: 'Kyaw Kyaw' }
// const users = [
//      {id:1,name:"Hla Hla"},
//      {id:1,name:""},
// ]
// 25CD
