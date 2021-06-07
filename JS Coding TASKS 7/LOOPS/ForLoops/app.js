/*
1) Problem Name: ForLoops

A --- Write a for loop to traverse the array and find if ‘Cricket’ exists in the array. Print ‘Cricket exists’
if it is in the array. Otherwise print ‘Does not exist’
B --- Write a forEach loop and attempt the same problem as above.
C ---Write a for..of loop and attempt the same problem as above
*/

//for loop
let games = ['Cricket', 'Football', 'Hockey', 'Chess', 'Badminton'];

console.log("For Loop:");
for (let i = 0; i < games.length; i++) {

        if (games[i] == "Cricket")
                console.log("Cricket exists.");
        else
                console.log("Cricket does not exist.");
}


//for each loop

console.log("Foreach Loop:");

games.forEach(forEachFunc);

function forEachFunc(item, index) {

        if (item == "Cricket")
                console.log("Cricket exists.");
        else
                console.log("Cricket does not exist.");
}



//for of loop

console.log("Forof Loop:");

let x;

for (x of games) {

        if (x == "Cricket")
                console.log("Cricket exists.");
        else
                console.log("Cricket does not exist.");
}






