/*
3) Problem Name: StylingDOM

Make index.html, app.js and style.css files
Make a div in your html file with some text and give it some styles. Use border and color properties to do that.
Now get the reference of first div using DOM methods
Print the color and border of the div
Change color of the text using DOM set methods or replace it using some other technique

*/

function styleFunc() {
        
        console.log("Border: ", document.getElementsByClassName("div-class")[0].style.border);
        console.log("Color: ", document.getElementsByClassName("div-class")[0].style.color);


        document.getElementById("new-div").style.color = "red";

}   
