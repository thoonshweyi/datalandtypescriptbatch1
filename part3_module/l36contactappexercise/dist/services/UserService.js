"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const validators_1 = require("../utils/validators");
class UserService {
    constructor() {
        this.users = [];
        this.initid = 1;
    }
    //=> Create
    createUser(name, email, phone) {
        if (!(0, validators_1.validateField)("name", name))
            return "Invalid name format!";
        if (!(0, validators_1.validateField)("email", email))
            return "Invalid email format!";
        if (!(0, validators_1.validateField)("phone", phone))
            return "Invalid phone format!";
        const newuser = { id: this.initid++, name, email, phone };
        this.users.push(newuser);
        return newuser;
    }
    // => Read
    getAllUsers() {
        return this.users;
    }
    // => Update
    getUserById(id) {
        return this.users.find(user => user.id === id);
    }
    updateUser(id, fields) {
        const userobj = this.getUserById(id);
        if (!userobj)
            return "User not found!";
        if (userobj.name && !(0, validators_1.validateField)("name", userobj.name))
            return "Invalid name format";
        if (userobj.email && !(0, validators_1.validateField)("email", userobj.email))
            return "Invalid email format";
        if (userobj.phone && !(0, validators_1.validateField)("phone", userobj.phone))
            return "Invalid phone format";
        Object.assign(userobj, fields);
        return userobj;
    }
    // => Delete
    deleteUser(id) {
        const index = this.users.findIndex(user => user.id === id);
        if (index === -1)
            return "User not found!";
        this.users.splice(index, 1);
        return "User deleted successfully!";
    }
}
exports.UserService = UserService;
