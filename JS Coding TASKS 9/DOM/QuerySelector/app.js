/*
1) Problem Name: JSDOM

Make index.html, app.js and style.css files
Make 3 divs in your html file and give them class ‘div-class’
Now get the reference of first div using DOM methods
Change attribute class of this div to ‘changed-class’
After that change the style attribute of that div to give
red color to the text and give solid blue border to it. Put some text in the first div too.

*/

function styleFunc() {

        document.querySelector("div-class")[0].style.border = "10px solid blue";
        document.querySelector("div-class")[0].style.color = "red";
        document.querySelector("div-class")[0].className = "changed-class";

}   
