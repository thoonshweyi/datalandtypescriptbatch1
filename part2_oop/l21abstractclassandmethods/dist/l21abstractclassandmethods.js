"use strict";
// =>Abstract Class
// class mustart start with abstract keyword
// abstract class can't instance
// Abstract Metnod 
// An abstract metho is a method declared in an abstract class that does not have a ReportBody.It must be implement
class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    showinfo() {
        console.log(`Name = ${this.name}, Age= ${this.age}, Role: ${this.getrole()}`);
    }
}
class Student extends People {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    getrole() {
        return "Student";
    }
    study() {
        console.log(`${this.name} is studying in grade ${this.grade}.`);
    }
}
class Staff extends People {
    constructor(name, age, department) {
        super(name, age);
        this.department = department;
    }
    getrole() {
        return "Staff";
    }
    work() {
        console.log(`${this.name} is working in  ${this.department} department.`);
    }
}
class Employee extends People {
    constructor(name, age, position, salary) {
        super(name, age);
        this.position = position;
        this.salary = salary;
    }
    getrole() {
        return "Employee";
    }
    pay() {
        console.log(`${this.name} earn $${this.salary} as ${this.position}.`);
    }
}
// const people = new People("Kyaw Kyaw",20); // error
const studentObj = new Student("Su Su", 18, "Grade 11");
studentObj.showinfo(); // Name = Su Su, Age= 18, Role: Student
studentObj.study(); // Su Su is studying in grade Grade 11.
const staffObj = new Staff("Tun Tun", 23, "IT");
staffObj.showinfo(); // Name = Tun Tun, Age= 23, Role: Staff
staffObj.work(); // Tun Tun is working in  IT department.
const employeeObj = new Employee("Win Win", 25, "Manager", 3000);
employeeObj.showinfo(); // Name = Win Win, Age= 25, Role: Employee
employeeObj.pay(); // Win Win earn $3000 as Manager.
