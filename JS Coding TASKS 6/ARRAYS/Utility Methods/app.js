/*
6) Problem Name: Utility Methods

Add ‘Polo’ as a member of the same array at the end using one of the utility methods
Add ‘Polo’ as a member of the same array at the beginning of the array using one of the utility methods
Remove a member of the same array from the end
Remove a member of the same array from the beginning

*/

let games = ['Cricket', 'Football', 'Hockey', 'Chess', 'Badminton'];

        /* Add ‘Polo’ as a member of the same array at the end using one of the utility methods */
        games.push("Polo"); 
        console.log("‘Polo’ as a member of the same array at the end: ", games); 
        
        /*Add ‘Polo’ as a member of the same array at the beginning of the array using one of the utility methods */
        games.unshift("Polo");  
        console.log("‘Polo’ as a member of the same array at the beggining: ", games);

        /*Remove a member of the same array from the end */
        games.pop();
        console.log("Remove a member of the same array from the end: ", games);

        /*Remove a member of the same array from the beginning */
        games.shift("Polo");  
        console.log("Remove a member of the same array from the beginning: ", games);

/*

Expected Output:
‘Polo’ as a member of the same array at the end:  [ 'Cricket', 'Football', 'Hockey', 'Chess', 'Badminton', 'Polo' ]

‘Polo’ as a member of the same array at the beggining:  [
  'Polo',
  'Cricket',
  'Football',
  'Hockey',
  'Chess',
  'Badminton',
  'Polo'
]

Remove a member of the same array from the end:  [ 'Polo', 'Cricket', 'Football', 'Hockey', 'Chess', 'Badminton' ]

Remove a member of the same array from the beginning:  [ 'Cricket', 'Football', 'Hockey', 'Chess', 'Badminton' ]

*/



