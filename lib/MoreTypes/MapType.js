"use strict";
let studentScoresmap = new Map([["john", 90], ["bob", 80]]);
console.log(studentScoresmap.get("John"));
studentScoresmap.set("bharath", 100);
studentScoresmap.delete("bharath");
console.log(studentScoresmap.has("bharath"));
for (let key of Array.from(studentScoresmap.keys())) {
    console.log(key);
    console.log(studentScoresmap.get(key));
}
console.log(studentScoresmap.values());
console.log(studentScoresmap.entries());
