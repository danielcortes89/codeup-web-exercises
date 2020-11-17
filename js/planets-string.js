(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    planetsArray = planetsString.split("|")
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
    let newLine = planetsArray.join(" <br> ")
    console.log(newLine)

    let start = "<ul> <li>"
    let midString = planetsArray.join(" </li> <li> ")
    let end = " </li> </ul>"

    console.log(start + midString + end)

    // function fizzBuzz(num){
    //     for(let i = 1; i <= num ; i++){
    //         if(i % 3 === 0 && i % 5 === 0){
    //             console.log('FizzBuzz!')
    //         } else if(i % 3 === 0){
    //             console.log('Fizz!')
    //         } else if(i % 5 === 0){
    //             console.log("Buzz!")
    //         } else {
    //             console.log(i)
    //         }
    //     }
    // }
})();



