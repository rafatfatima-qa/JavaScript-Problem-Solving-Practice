/*

JavaScript program to print the grade of person using the following conditions:

->A if percentage >85

->A- if %<=85 and >80

->B if %<=80 and >70

->C if %<=70 and >60

->D if %<=60 and >40

->E if %<=40 and also should print 'candidate failed' if %<=35

*/

let studentPercentage = prompt("Enter Student's percentage (%) : ");

switch (true){
       
        case (studentPercentage > 85): //86 to 100
                alert("A grade");
        break;

        case ((studentPercentage > 80) && (studentPercentage <= 85)): // 81 to 85
                alert("A- grade");
        break;

        case ((studentPercentage > 70) && (studentPercentage <= 80)): //71 to 80
                alert("B grade");
        break;

        case ((studentPercentage > 60) && (studentPercentage <= 70)): //61 to 70
                alert("C grade");
        break;
        
        case ((studentPercentage > 40) && (studentPercentage <= 60)): //41 to 60
                alert("D grade");
        break;

        case ((studentPercentage > 35) && (studentPercentage <= 40)): // 36 to 40
                alert("E grade");
        break;
        
        case ((studentPercentage == 0) || (studentPercentage <= 35)): // 0 to 35
                alert("Candidate Failed");
        break;

        default:
                alert("Enter a valid percentage."); //non - numeric values

}

        
       



