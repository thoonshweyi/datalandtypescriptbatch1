// => Pick Mapped Types 

// exe 1
type ProductType = {
     id:number;
     title:string;
     price:number;
}

type PickTitleOnly = Pick<ProductType,'title'>;

const projectObj: PickTitleOnly = {
     title:"Redbull",
     // price: 1000 // this will cause an error because "id" and "price" are notincluded in PickTitleONly
}


// exe 2
type UserType = {
     id:number,
     name:string,
     age: number;
     email: string;
}

type PickUserInfo = Pick<UserType,"name" | "age">

const userObj:PickUserInfo = {
     name:"Bo Bo",
     age:25,
     // email: "bobo@gmail.com" // this will cause an error because "id" and "email" are notincluded in PickTitleONly
} 

// => Pick for Function Params
type EmployeeType = {
     id:number;
     name:string;
     position:string;
     salary:number;
}

type PickEmployeeInfo =  Pick<EmployeeType,"name"|"position">;

function Employeefun(obj:PickEmployeeInfo){
     console.log(`${obj.name} = ${obj.position}`);
}

Employeefun({
     name:"Ko Ko",
     position: "Developer"
})