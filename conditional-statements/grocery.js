function grocery(product, city, quantity) {

    let prices = {

        Sofia: {
            tea: 0.50,
            water: 0.80,
            juice: 1.20,
            sweets: 1.45,
            chips: 1.60,

        }, Varna: {
            tea: 0.45,
            water: 0.70,
            juice: 1.15,
            sweets: 1.35,
            chips: 1.55,

        }, Plovdiv: {
            tea: 0.40,
            water: 0.70,
            juice: 1.15,
            sweets: 1.30,
            chips: 1.50,

        },

    }
    // check for invalid inputs
    if (!prices[city]) {
        console.log("Invalid city");
        return;
    }
    if (!prices[city][product]) {
        console.log("Invalid product");
        return;

    }
    let result = prices[city][product] * quantity

    return result.toFixed(2)
}

console.log(grocery('tea', 'Varna', 2))
console.log(grocery('juice', 'Sofia', 6))
console.log(grocery('sweets', 'Plovdiv', 1))