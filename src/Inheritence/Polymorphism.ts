class Employee
{
    public firstName:string;
    public lastName:string;
    public designation:string

    constructor(firstName:string, lastName:string, designation:string)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.designation = designation;
    }

    public print():void{
        console.log("Employee Details");
    }
}

class Manager extends Employee{
    constructor(firstName:string, lastName:string, designation:string)
    {
        super(firstName, lastName, designation);
        this.firstName = firstName;
        this.lastName = lastName;
        this.designation = designation;
    }

    public print(): void {
        super.print();
        console.log(`${this.firstName} ${this.lastName} ${this.designation}`)
    }
}

class Developer extends Employee{
    constructor(firstName:string, lastName:string, designation:string)
    {
        super(firstName, lastName, designation);
        this.firstName = firstName;
        this.lastName = lastName;
        this.designation = designation;
    }

    public print(): void {
        super.print();
        console.log(`${this.firstName} ${this.lastName} ${this.designation}`)
    }
}

let employees:Employee[] = new Array(new Manager("John","Wick","Manager"), new Developer("Baba","Yaga","Developer"));

for(var employee of employees)
{
    employee.print();
}