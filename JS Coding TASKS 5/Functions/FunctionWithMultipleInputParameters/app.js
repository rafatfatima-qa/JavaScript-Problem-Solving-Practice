/*
3. Problem Name: FunctionWithMultipleInputParameters

Create a function with the name “AddTwoNumbers.”
Take two input parameters using names “Num1” and “Num2.”
Perform addition operation on these input numbers.
Save the result in variable Sum.
Return the result.

*/

function AddTwoNumbers(Num1,Num2){

        let Sum = Num1 + Num2;
        return(Sum);

}

console.log(AddTwoNumbers(3,8));
console.log(AddTwoNumbers(-1,-2));
console.log(AddTwoNumbers(0,55));
console.log(AddTwoNumbers(5,-5));
console.log(AddTwoNumbers(2.5,3.8));
console.log(AddTwoNumbers(0,0));

/* Expected outputs:
11
-3
55
0
6.3
0
*/

