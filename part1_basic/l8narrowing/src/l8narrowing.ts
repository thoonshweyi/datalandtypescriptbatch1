// => Narrowing

// => Conditional Narrowing
function myfun(val:string|number){
     if(typeof val== 'string'){
          console.log(`String in uppercase : ${val.toLocaleUpperCase()}`)
     }else{
          console.log(`Number value : ${val}`);
     }
}
myfun("hello sir"); //String in uppercase : HELLO SIR
myfun(10); // Number value : 10

type Laptop = {brandname:string};
function getitems(item:Laptop | Laptop[]){
     if(Array.isArray(item)){
          return item.length;
     }else{
          return item.brandname;
     }
} 
console.log(getitems({brandname:"HP"}));
console.log(getitems([{brandname:"Dell"},{brandname:"Leovo"}]));


// => Object Narrowing
type Article = {
     title:string;
     content:string;
     public:boolean;
     user_id:number
}

let post:Article = {
     title:"New Post One",
     content:"This is new post",
     public: true,
     user_id: 1
}
console.log(post.title);
console.log(post.content);

type News = {
     title: string
}
let topic:News = post;
console.log(topic);
console.log(topic.title);
// console.log(topic.content); // error


// 9NW