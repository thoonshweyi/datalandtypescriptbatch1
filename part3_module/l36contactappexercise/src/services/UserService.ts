import {User} from "../models/User"
import {validateField} from "../utils/validators"

export class UserService{
     private users:User[] = [];
     private initid = 1;

     //=> Create
     createUser(name:string,email:string,phone:string):User | string{
          if(!validateField("name",name)) return "Invalid name format!";
          if(!validateField("email",email)) return "Invalid email format!";
          if(!validateField("phone",phone)) return "Invalid phone format!";

          
          const newuser:User = {id:this.initid++, name,email,phone}
          this.users.push(newuser);
          
          return newuser;
     }

     // => Read
     getAllUsers():User[]{
          return this.users;
     }

     // => Update
     getUserById(id:number):User | undefined{
          return this.users.find(user=>user.id === id);
     }

     updateUser(id:number,fields:Partial<User>):User | string{
          const userobj = this.getUserById(id);

          if (!userobj) return "User not found!";

          if(userobj.name && !validateField("name",userobj.name)) return "Invalid name format";
          if(userobj.email && !validateField("email",userobj.email)) return "Invalid email format";
          if(userobj.phone && !validateField("phone",userobj.phone)) return "Invalid phone format"
          
          Object.assign(userobj,fields);
          return userobj;
     }

     // => Delete
     deleteUser(id:number):string{
          const index = this.users.findIndex(user => user.id === id);

          if(index === -1) return "User not found!";

          this.users.splice(index,1);

          return "User deleted successfully!";
     }
}