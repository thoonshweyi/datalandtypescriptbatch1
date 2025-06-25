"use strict";
// => Narrowing
// => Conditional Narrowing
function myfun(val) {
    if (typeof val == 'string') {
        console.log(`String in uppercase : ${val.toLocaleUpperCase()}`);
    }
    else {
        console.log(`Number value : ${val}`);
    }
}
myfun("hello sir"); //String in uppercase : HELLO SIR
myfun(10); // Number value : 10
function getitems(item) {
    if (Array.isArray(item)) {
        return item.length;
    }
    else {
        return item.brandname;
    }
}
console.log(getitems({ brandname: "HP" }));
console.log(getitems([{ brandname: "Dell" }, { brandname: "Leovo" }]));
let post = {
    title: "New Post One",
    content: "This is new post",
    public: true,
    user_id: 1
};
console.log(post.title);
console.log(post.content);
let topic = post;
console.log(topic);
console.log(topic.title);
// console.log(topic.content); // error
// 9NW
