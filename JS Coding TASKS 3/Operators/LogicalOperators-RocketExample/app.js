/*
You have to design a rocket launching problem.

Take 3 variables. IsSnow, IsRain, IsSpeed.
Give values to them true  or false as per your choice. 
To launch the rocket there are conditions that there should be no rain,
no snow and the speed of wind should be less than 20km/hr. 
Use logical operators to match the conditions and observe the result.

*/
        
        let IsSnow=false, IsRain=false, IsSpeed=true;

        let windSpeed = prompt("Enter Wind Speed(km/hr):");
        
        if ((IsRain == false) && (IsSnow == false) && (windSpeed <= 20)){

                alert("Rocket Launched - All conditions are in favour");
        }
        else if ((IsRain == false) && (IsSnow == false) && !(windSpeed <= 20)){
                
                alert("Rocket Cannot be Launched - Unfavourable Wind Speed.");
               
        }

        


