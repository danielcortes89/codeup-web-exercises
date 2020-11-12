// var userNum = prompt("Enter a number between  and 50");
//
// var cleaned = parseInt(userNum)
//
// console.log("Number to skip is: " + cleaned)

function launch(){
    for (i = 1 ; i < 50; i++){

        var userNum = prompt("Enter a number between  and 50");

        var cleaned = parseInt(userNum)

        console.log("Number to skip is: " + cleaned)


        if(cleaned < 0 || cleaned > 50){
            var newInput = prompt("Try again")
            break;
        }
        if( i == userNum){
            console.log(("Yikes! Skipping number: " + userNum))

        } else if(i % 2 !== 0){
            console.log("Here is an odd Number: " + i)
        } else {
            continue;
        }
    }
}

launch()

// for (i = 1 ; i < 50; i++){
//
//     var userNum = prompt("Enter a number between  and 50");
//
//     var cleaned = parseInt(userNum)
//
//     console.log("Number to skip is: " + cleaned)
//
//
//     if(cleaned < 0 || cleaned > 50){
//         var newInput = prompt("Try again")
//        break;
//     }
//     if( i == userNum){
//         console.log(("Yikes! Skipping number: " + userNum))
//
//     } else if(i % 2 !== 0){
//         console.log("Here is an odd Number: " + i)
//     } else {
//         continue;
//     }
// }