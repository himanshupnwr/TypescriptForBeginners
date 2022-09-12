"use strict";
class Flight {
    constructor(flightNo, from, to) {
        this.flightNo = flightNo;
        this.from = from;
        this.to = to;
    }
    display() {
        console.log(this.flightNo + " " + this.from + " " + this.to);
    }
}
var flight = new Flight(123, "Austin", "Denver");
flight.display();
