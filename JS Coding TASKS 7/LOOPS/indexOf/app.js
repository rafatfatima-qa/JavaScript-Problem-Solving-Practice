/*
2) Problem Name: indexOf
Use indexOf function to attempt the same problem and print index of ‘Cricket’ member
*/


let games = ['Football', 'Hockey', 'Chess', 'Cricket', 'Badminton'];

let searchTerm = games.indexOf("Cricket");

        if (searchTerm != -1){
                console.log("Cricket exists.");
                console.log("Index of \"Cricket\" member is: ", searchTerm);
        }
        else 
                console.log("Cricket does not exist.");
        
        
/* 

Expected Output: index 3

*/
