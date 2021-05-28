/*
Problem Name: Write a program that converts degree to fahrenheit and fahrenheit to degrees.
*/
function convertToFarenheit(){

    let tempCelcius, resultFarenheit;

    tempCelcius = parseInt(document.querySelector('#tempC').value);
    
    resultFarenheit = ( 1.8 * tempCelcius) + 32;


     //Access <h1> element
     let myHeading = document.querySelector('#heading1');
        
    //Change content of <h1> element by replacing heading with addition result.
    myHeading.innerHTML = "Temprature in Farenheit is: "+resultFarenheit+"";   
    
}   

function convertToCelcius(){

    let tempFarenheit, resultCelcius;

    tempFarenheit = parseInt(document.querySelector('#tempF').value);
    
    resultCelcius = (tempFarenheit - 32) / 1.8;


     //Access <h1> element
     let myHeading = document.querySelector('#heading1');
        
    //Change content of <h1> element by replacing heading with addition result.
    myHeading.innerHTML = "Temprature in Celcius is: "+resultCelcius+"";   
    
}