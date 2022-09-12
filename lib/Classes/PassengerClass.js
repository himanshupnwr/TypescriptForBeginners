"use strict";
class Passenger {
    constructor(firstName, lastName, frequentFlyerNo) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.frequentFlyerNo = frequentFlyerNo;
    }
    display() {
        console.log(this.firstName + " " + this.lastName + " " + this.frequentFlyerNo);
    }
}
var passenger = new Passenger("John", "Bailey", 123);
passenger.display();
var passenger2 = new Passenger("Bob", "Bailey", 456);
passenger2.display();
for (let item in passenger) {
    console.log(item);
}
