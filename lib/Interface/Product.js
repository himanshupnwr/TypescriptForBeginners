"use strict";
var product1 = {
    id: 123,
    name: "IPhone",
    description: "Its awesome",
    display() {
        console.log(this.id + "" + this.name);
    }
};
var product2 = {
    id: 123,
    name: "IPhone",
    description: "Its awesome",
    display() {
        console.log(this.id + " " + this.name);
    }
};
