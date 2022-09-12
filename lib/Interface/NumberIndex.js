"use strict";
var studentNames = ["John", "Bob", "Doug"];
var studentScores = {};
studentScores["John"] = 100;
studentScores["Bob"] = 90;
for (var item in studentScores) {
    console.log(item);
    console.log(studentScores[item]);
}
