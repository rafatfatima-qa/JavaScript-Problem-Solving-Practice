/*
4) Problem Name: FilterArray

Use filter function to filter an array containing values of ages of [40, 56, 80, 90, 100, 101, 102, 23, 22]
Use it to filter the ages greater than or equal to 40.

*/

let ages = [40, 56, 80, 90, 100, 101, 102, 23, 22];

function checkAge(age) {
  return age >= 40;
}
console.log("The ages greater than or equal to 40 are: ");
  console.log(ages.filter(checkAge));


  /*
  
  Expected Output:

  The ages greater than or equal to 40 are: [40,  56,  80, 90,100, 101, 102]
  
  */


