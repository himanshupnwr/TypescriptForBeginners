"use strict";
class Employee {
    constructor(firstName, lastName, designation) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.designation = designation;
    }
    print() {
        console.log("Employee Details");
    }
}
class Manager extends Employee {
    constructor(firstName, lastName, designation) {
        super(firstName, lastName, designation);
        this.firstName = firstName;
        this.lastName = lastName;
        this.designation = designation;
    }
    print() {
        super.print();
        console.log(`${this.firstName} ${this.lastName} ${this.designation}`);
    }
}
class Developer extends Employee {
    constructor(firstName, lastName, designation) {
        super(firstName, lastName, designation);
        this.firstName = firstName;
        this.lastName = lastName;
        this.designation = designation;
    }
    print() {
        super.print();
        console.log(`${this.firstName} ${this.lastName} ${this.designation}`);
    }
}
let employees = new Array(new Manager("John", "Wick", "Manager"), new Developer("Baba", "Yaga", "Developer"));
for (var employee of employees) {
    employee.print();
}
