// var x = 2;
//
// while(x < 65537){
//     console.log(x);
//     x = x * 2;
// }



var allCones = Math.floor(Math.random() * 50) + 50;
console.log("I have " + allCones + " cones to sell.")

do{
    let rando = Math.floor(Math.random() * 5) + 1;

    if(allCones - rando > 0){
        console.log(rando + " cone(s) sold....")
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

}while(allCones > 0)


let matter = ['solid', 'liquid', 'gas', 'plasma']

matter.forEach(state => console.log(state))
