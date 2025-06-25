// ---- this keyword ----
// At top-level in the browser : 'this' refers to 'window'
// In strict mode or in modules, it will be "undefined"  (in node or ES modules)
console.log(this);
// Object with method using 'this'
const student = {
    info() {
        console.log(this);
    }
};
student.info();
// Class with method using 'this'
class Student {
    content() {
        console.log(this);
    }
}
const studentObj = new Student();
console.log(studentObj);
studentObj.content();
// call(), apply(), bind()
function sayhi(name, msg) {
    console.log(this); // "strict": false, 
    console.log(`Hay....${name}, ${msg}`);
}
sayhi("Hsu Hsu", "How are you!");
sayhi.call({ name: "Yu Yu" }); // { name: 'Yu Yu' } Hay....undefined, undefined
sayhi.call("Yu Yu", "How are you!"); // [String: 'Yu Yu'] Hay....How are you!, undefined
sayhi.call({ fullname: "Nu Nu" }, "Aye Aye", "How are you!"); //{ fullname: 'Nu Nu' } Hay....Aye Aye, How are you!
sayhi.apply({ name: "Yu Yu" });
// sayhi.apply("Yu Yu","How are you!"); 
// sayhi.apply({fullname:"Nu Nu"},"Aye Aye","How are you!"); 
sayhi.apply({ fullname: "Nu Nu" }, ["Kyaw Kyaw", "How are you!"]);
let bindfun = sayhi.bind({ fulname: "Zin Zin" }, "Aung Aung", "How are you!");
bindfun();
