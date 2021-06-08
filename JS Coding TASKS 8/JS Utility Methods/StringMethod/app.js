/*
5) Problem Name: StringMethod

Use .length property to print length of a string cityName = ‘Tokyo’
Find the index of ‘o’ character in the given string using indexOf method
Use search method to locate ‘o’ in the given string and notice the difference between indexOf and search methods

*/

let cityName = "Tokyo";
strLength = cityName.length;
let searchTerm1 = cityName.search("o");
let searchTerm2 = cityName.indexOf("o");

// for locating second occurence of o we can use indexOf like this -->
let searchTerm3 = cityName.indexOf("o", 2);


console.log("Length of Tokyo: ", strLength);

console.log("Using search method - The letter o is at index: ", searchTerm1)

console.log("Using indexOf method -The letter o is at index: ", searchTerm2, "And at index: ", searchTerm3)



/* 

Notes to self: The difference between search and indexOf method is:
1- search method returns the index where it finds first occurence of letter 'o' in whole string
however indexOf can take second start position as parameter like indexOf(value to search for, starting position).
2- indexOf() method cannot take regular expressions as inputs or searching values.

*/