function showMultiplication(num){
    for(i = 1; i < 11; i++){
        console.log(num + " x " + i + " = " + (num * i))
    }
}

// showMultiplication(7

function tenRandom(){


    for( i = 1; i < 11; i++){
        var randomNum = Math.floor(Math.random() * 100) + 1
        if (randomNum % 2 === 0){
            console.log(randomNum + " is even")
        } else {
            console.log((randomNum + " is odd"));
        }
    }
}

function pyramid (){
    for( i = 1; i < 10; i++){
        var output = i.toString()
        var incrementor = output
        var count = i;
        for(g = 1 ;g < count; g++){
            output = output + incrementor
        }
        console.log(output)
    }
}

function fiveCountdown(){
    for(i = 100; i > 0;){
        console.log(i)
        i -= 5
    }
}

// showMultiplication(7)
// tenRandom()
// pyramid()
// fiveCountdown()