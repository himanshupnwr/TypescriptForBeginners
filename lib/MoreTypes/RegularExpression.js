"use strict";
//Meta characters
// ? -> Zero to One
// + -> One or more
// * -> Zero or More
// \w -> alphanumeric
// \d -> digits and numbers
// \s -> spaces
//[A-Z] -> alphabets a to z in capital
//[a-z] -> alphabets a to z in small case
//\^ -> starts with
// $ -> ends with
//{n} -> exactly n number of characters should occur
//{m,n} -> min m and max n
//{m,} -> min m and max any
//(?=.*[A-Z]) // atlreast one occurence of capital letters
//(?=.*[!@&^%$]) //atleast one special characters from the given in the expression
//Example 1
let cellPhone = "1234567890";
let re = /[0-9]{10}/;
if (cellPhone.match(re)) {
    console.log("Cell number is valid");
}
//Example 2
let password = "tEsT1234";
let refEx = /(?=.*[A-Z])\w{4,10}/;
if (password.match(refEx)) {
    console.log("Password is valid");
}
