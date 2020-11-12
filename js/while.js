// let num = 2
// while(num < 65537){
//     console.log(num);
//     num *= 2
// }
var allCones = Math.floor(Math.random() * 50) + 50;
console.log(allCones)
do{
    let rando = Math.floor(Math.random() * 5) + 1;
    if(allCones - rando > 0){
        console.log(rando + " cones sold....")
        allCones = allCones - rando;
        console.log(allCones)
    } else if (rando > allCones) {
        console.log("Cannot sell you " + rando + " cones I only have " + allCones + "...")
    } else if(allCones - rando === 0) {
        // console.log(rando)
        console.log("Yay! I sold them all!")
        allCones = allCones - rando;
        continue;
    }
// --allCones

}while(allCones > 0)