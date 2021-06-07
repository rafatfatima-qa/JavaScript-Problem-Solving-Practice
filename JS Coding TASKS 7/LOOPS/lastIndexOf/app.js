/*
3) Problem Name: lastIndexOf

Use the lastIndexOf function to find a ‘Cricket’ member. Start from the 3rd index and print its index.
*/


let games = ['Cricket','Football', 'Hockey', 'Chess', 'Badminton','Cricket'];

let searchTerm = games.lastIndexOf("Cricket",3);

        if (searchTerm != -1){
                console.log("Cricket exists.");
                console.log("Index of \"Cricket\" member is: ", searchTerm);
        }
        else 
                console.log("Cricket does not exist.");

/* 
Expected Output: index 0

I have used "Cricket" 2 times; one at last index of array and one at first index of array,
it will return only index 0 because it started searching backwards from 3rd index.

*/



