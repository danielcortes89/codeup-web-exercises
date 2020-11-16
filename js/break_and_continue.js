// var userNum = prompt("Enter a number between  and 50");
//
// var cleaned = parseInt(userNum)
//
// console.log("Number to skip is: " + cleaned)

function launch(){
    var count = 1

    do {
        var userNum = prompt("Enter a number between 1 and 50");
        var cleaned = parseInt(userNum)
        console.log("Number to skip is: " + cleaned)

        for (i = 1; i < 50; i++) {
            if (cleaned < 0 || cleaned > 50) {
                break;
            }
            count++

            if (i == userNum) {
                console.log(("Yikes! Skipping number: " + userNum))

            } else if (i % 2 !== 0) {
                console.log("Here is an odd Number: " + i)
            }
            continue;

        }
    } while(count < 50)

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


// 11/13 MORNING EXERCISE

// var num = 1
//
// do{
//     if(num % 6 ===0){
//         console.log(num +  " is divisible by 6")
//         break;
//     }
//     console.log(num + " is not divisible by 6")
//     num++
// } while ( num < 100  )


// var condition = false;
//
// while(condition){
//     alert('Hellooooo!!!!')
// }
//
// do{
//     alert("THis is from the the do while")
// } while(condition)
//
//
// do{
//     var isLongEnough = prompt('type a string less than 5 characters')
// } while(isLongEnough.length >= 5)