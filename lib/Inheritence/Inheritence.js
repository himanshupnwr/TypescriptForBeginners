"use strict";
class BMW {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    commonEngineFunc() {
        console.log("Common func");
    }
    start() {
        console.log("start");
    }
    stop() {
        console.log("Stop");
    }
}
class ThreeSeries extends BMW {
    constructor(make, model, year, cruiseControlEnabled) {
        super(make, model, year);
        this.cruiseControlEnabled = cruiseControlEnabled;
    }
    start() {
        console.log("three series start");
    }
    stop() {
        console.log("three series Stop");
    }
}
class FiveSeries extends BMW {
    constructor(make, model, year, parkingAssistEnabled) {
        super(make, model, year);
        this.parkingAssistEnabled = parkingAssistEnabled;
    }
    start() {
        console.log("five series start");
    }
    stop() {
        console.log("five series Stop");
    }
}
var threeSeries = new ThreeSeries("BMW", "328i", "2018", false);
threeSeries.start();
threeSeries.stop();
var fiveSeries = new FiveSeries("BMW", "528i", "2021", true);
fiveSeries.start();
fiveSeries.stop();
