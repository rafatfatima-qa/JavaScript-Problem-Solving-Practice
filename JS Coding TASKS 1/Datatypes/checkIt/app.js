/*
Assign an integer value to your variable.
Assign a decimal value to your variable.
Assign a boolean value to your variable.
Assign any string to your variable. Remember to put quotation marks. Check its data type from the console.
Now remove the quotation marks and see if it is still a string or do you see an error?
Assign your variable a value of null. Check its type in the console.

*/

let variableInt = 24;
console.log(typeof(variableInt)); // returns "number" datatype

let variableFloat = 24.6;
console.log(typeof(variableFloat)); // returns "number" datatype

let variableBool = true;
console.log(typeof(variableBool)); // returns "boolean" datatype

let variableStr = "Welcome to Rafat Fatima's assignment";
console.log(typeof(variableStr)); // returns "string" datatype, throws "Uncaught SyntaxError: Unexpected identifier" error when quotation marks are removed.

let variableNull = null;
console.log(typeof(variableNull)); // returns "object" datatype