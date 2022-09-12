"use strict";
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
console.log(Gender.Male); //0
console.log(Gender.Female); //1
console.log(Gender[0]); // Male
console.log(Gender[1]); // Female
var Weekends;
(function (Weekends) {
    Weekends[Weekends["saturday"] = 6] = "saturday";
    Weekends[Weekends["sunday"] = 7] = "sunday";
})(Weekends || (Weekends = {}));
console.log(Weekends[0]); //6
