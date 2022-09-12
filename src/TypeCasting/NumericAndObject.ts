//Numeric Casting

let num:number = parseInt("5");
console.log(num+3);

let courses = ["Angular","React","Express"];

console.log(courses.toString());

let mybool = false;
let x:string = mybool.toString();
console.log(x);

//Object casting

interface EmployeeCast{
    id:number;
}

let e1:EmployeeCast;

let e2 = {id:123,name:"John"};

e1=e2;
//e2=e1; // error becuase e1 does not have name property