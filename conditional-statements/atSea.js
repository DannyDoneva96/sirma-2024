

function atSea(days, roomType, assessment) {

    let accommodationPrices = {

        "single room": 25.00,
        'apartment': 50.00,
        'president apartment': 100.00
    }
    let nights = days - 1
    let calcPriceOfStay = nights * accommodationPrices[roomType];

     if (roomType === "apartment"){
        if (nights<10){ calcPriceOfStay -= calcPriceOfStay *0.30}else 
        if(nights>=10 && nights<=15){calcPriceOfStay -= calcPriceOfStay *0.35}else 
        if(nights>15 ){calcPriceOfStay -= calcPriceOfStay *0.50}

     }

     if (assessment == 'positive'){
        calcPriceOfStay += calcPriceOfStay * 0.25
     }else{
        calcPriceOfStay -= calcPriceOfStay * 0.10

     }
     return calcPriceOfStay

}

console.log(atSea(12,'single room','positive'))
console.log(atSea(11,'apartment','positive'))