/*
7) Problem Name: MapMethod
*/

let agesArray = [12,45,56,4];

let usersData = [

    {
    name: "Saeed",
    
    lastName: "Ahmad",
    
    school: "UoT",
    
    profession: "engineer",
    
    },
    
    {
    
    name: "Ali",
    
    lastName: "Khan",
    
    school: "TUM",
    
    profession: "researcher",
    
    }
    
    ];

//print array and their indices using map method
console.log("Aarray and their indices: ");
let printArray = agesArray.map(printArrayFunc);

function printArrayFunc(i, index){
    
    console.log("Value: ", i , "Index: ", index);    
}

//Array after multiply by 10
let newArray = agesArray.map(multiplyFunc);
console.log("New Array after * by 10: ", newArray);


function multiplyFunc(x){

    return x * 10;

}

//print array as a table using map method

let printAsTable = usersData.map(printArrayFunc2);

console.log("Array in Table Form: ", printAsTable);

function printArrayFunc2(x){
 
return (x.name + " " + x.lastName + " " + x.school + " " + x.profession);


}