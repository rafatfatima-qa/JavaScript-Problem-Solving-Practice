/*
3) Problem Name: LoopingObjects

Loop values of object’s properties by using for...in loop and print them.

*/

let cities = {
        first: 'Karachi',
        second: 'Lahore',
        third: 'Islamabad',
        fourth: 'Quetta'
};

let key;
for (key in cities) {
   
        console.log(cities[key]);
}

