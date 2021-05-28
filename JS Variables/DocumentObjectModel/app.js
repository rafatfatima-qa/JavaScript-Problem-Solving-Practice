/*
This function will add your name to ‘Hello’ text
and show an alert saying: ‘The message has been sent on the given number’.
*/
function helloUser(){

    //Access input element
    let inputElement = document.querySelector('input');

    //Getting value of input element
    let inputElementValue = inputElement.value;

    //Access <h1> element
    let myHeading = document.querySelector('#heading1 > span');

    //Change content of <h1> element by adding input value after the word 'Hello'
    myHeading.innerHTML = inputElementValue;

    /* The below statement is for displaying alert with a pause 
       and after updating heading with input value.
    */
    setTimeout(function() { alert(`The message has been sent on the given number`); }, 1000);

       
}

