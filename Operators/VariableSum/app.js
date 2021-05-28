/*
Problem Name: Write a program that takes two variables and prints the sum of it.
*/
function AddVariables(){

    let num1, num2, result;

    num1 = parseInt(document.querySelector('#num1').value);
    //console.log(num1);

    num2 = parseInt(document.querySelector('#num2').value);
    //console.log(num2);

    result = num1 + num2;

     //Access <h1> element
     let myHeading = document.querySelector('#heading1');
        
    //Change content of <h1> element by replacing heading with addition result.
    myHeading.innerHTML = "The sum is: "+result+"";   
    
       
}

