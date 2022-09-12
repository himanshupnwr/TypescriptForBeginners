"use strict";
let newDate = new Date();
let expiryDate = new Date("2025-12-23");
console.log(expiryDate.getDay());
console.log(expiryDate.getDate());
console.log(expiryDate.getHours());
console.log(expiryDate.getMinutes());
console.log(expiryDate.toTimeString());
expiryDate.setDate(20);
