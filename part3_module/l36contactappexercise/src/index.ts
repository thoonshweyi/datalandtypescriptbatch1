import {UserService} from "./services/UserService"

const contact = new UserService();

// => Create 
console.log(contact.createUser("Hnin Hnin","hninhnin@mail.com","0912345678")); // valid
console.log(contact.createUser("Kyaw Kyaw","kyawkyaw@gmail.com","098765432100")); // valid

console.log("\n-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_\n")
// => Read 
console.log("All Users: ",contact.getAllUsers());

console.log("\n-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_\n")

// => Update 

console.log(contact.updateUser(1,{email:"hninhnin@gmail.com"})); // valid

console.log("\n-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_\n")

// => Delete 
console.log(contact.deleteUser(1));
console.log("All users after delete: ",contact.getAllUsers());
console.log("\n-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_\n")
