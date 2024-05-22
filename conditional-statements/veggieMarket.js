function VeggieMarket(product, day, quantity) {

    //lets define prices for the working days

    let workingDays = {
        tomato: 2.50,
        onion: 1.20,
        lettuce: 0.85,
        cucumber: 1.45,
        pepper: 5.50
    }

    // and for the weekends
    let weekends = {
        tomato: 2.80,
        onion: 1.30,
        lettuce: 0.85,
        cucumber: 1.75,
        pepper: 3.50
    }

    if(!weekends[product]){return 'error'}

    if(day == 'Saturday' || day == 'Sunday'){
        let result= weekends[product] * quantity
        return result.toFixed(2)
    }

    if(day == 'Monday' || day == 'Tuesday' || day == 'Wednesday' || day == 'Thursday'|| day == 'Friday'){
        let result= workingDays[product] * quantity
        return result.toFixed(2)
    }else{return 'error'}

}
console.log(VeggieMarket("tomato", "Monday", 2));    // Output: 5.00
console.log(VeggieMarket("onion", "Saturday", 1.5)); // Output: 1.95
console.log(VeggieMarket("lettuce", "Sunday", 3));   // Output: 2.55
console.log(VeggieMarket("cucumber", "Friday", 1));  // Output: 1.45
console.log(VeggieMarket("pepper", "Wednesday", 4)); // Output: 22.00
console.log(VeggieMarket("carrot", "Monday", 2));    // Output: error
console.log(VeggieMarket("tomato", "Funday", 2));    // Output: error