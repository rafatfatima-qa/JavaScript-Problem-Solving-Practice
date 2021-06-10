/*
5) Problem Name: Forms

Make index.html, app.js and style.css files
Make two input fields, one for the email and other for password.
Also, make a button with ‘Log In’ text
Put a relevant event using addEventListener.
Now write a function that’d be called on that event
Check that whether values of both email and password fields are empty or not using the same function
If any of the fields is empty, ask use to fill up the fields
If both are filled, show an alert saying ‘Logged In Successfully’.
Also, check for format of email in the first input field
and ensure that password field’s length is not less than 8 character.

*/

document.getElementById("button").addEventListener("click", function loginFunc(){
        let email = document.getElementById("email").value;       
        let pword= document.getElementById("psw").value;  
        let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        let maxLength = 8;    
        
        if (email ==""){
        //document.getElementById("spanEmail").innerHTML = "Please fill email field.";
        alert("You must type in an email");
        // return false;
}

        else if (email.match(mailformat) == null){
                //document.getElementById("spanEmail").innerHTML = "You have entered an invalid email address!";
                alert("You have entered an invalid email address!");
                return false;}

        else if (pword == ""){
                //document.getElementById("spanPassword").innerHTML = "Please fill pwd field.";
                alert("You must type in a password");
                return false;}

        else if (pword.length != maxLength ){
                //document.getElementById("spanPassword").innerHTML = "Password must be 8 characters long";        
                alert("Password must be 8 characters long");
                        return false;}

        else{

        alert("Logged In Successfully.");
        return true;
        }

        });