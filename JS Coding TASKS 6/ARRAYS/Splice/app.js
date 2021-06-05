/*
7) Problem Name: Splice

Use the splice method to add two game names ‘Polo’ and ‘Kabaddi’ to the same array
at the third index using the splice method 

*/

let games = ['Cricket', 'Football', 'Hockey', 'Chess', 'Badminton'];

        games.splice(3, 0, "Polo", "Kabaddi");
              
        console.log(games);


/*

Expected Output:
[
  'Cricket',
  'Football',
  'Hockey',
  'Polo',
  'Kabaddi',
  'Chess',
  'Badminton'
]

*/