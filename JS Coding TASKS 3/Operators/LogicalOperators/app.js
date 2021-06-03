/*

3. Problem Name: LogicalOperators:
What happens if we write:

True && True
False && True
False && False
False || True
5>4 && 2<5
2==9 || 2==2
!(!(4>2))
*/

        let x = true && true;
        console.log("true && true: ", x);         //Expected output: true

        x = false && true;
        console.log("false && true: ", x);         //Expected output: false

        x = false && false;
        console.log("false && false: ", x);         //Expected output: false

        x = false || true;
        console.log("false || true: ", x);         //Expected output: true

        x = 5 > 4 && 2 < 5;
        console.log("5 > 4 && 2 < 5: ", x);         //Expected output: true

        x = 2==9 || 2==2;
        console.log("2==9 || 2==2: ", x);         //Expected output: true

        x = !(!(4>2));
        console.log("!(!(4>2)): ", x);         //Expected output: true


        


