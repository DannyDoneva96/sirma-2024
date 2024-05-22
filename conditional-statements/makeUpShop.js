
function calculateProfitForRenovation(renovationPrice, countPowders, countLipsticks, countSpirals, countShadows, countConcealers) {
    // Prices of each product
    const pricePowder = 2.60;
    const priceLipstick = 3.00;
    const priceSpiral = 4.10;
    const priceShadows = 8.20;
    const priceConcealer = 2.00;

    // Calc total price
    const totalPowder = countPowders * pricePowder;
    const totalLipstick = countLipsticks * priceLipstick;
    const totalSpiral = countSpirals * priceSpiral;
    const totalShadows = countShadows * priceShadows;
    const totalConcealer = countConcealers * priceConcealer;

    let totalPrice = totalPowder + totalLipstick + totalSpiral + totalShadows + totalConcealer;

    // Calc total products
    const totalProducts = countPowders + countLipsticks + countSpirals + countShadows + countConcealers;

    // Apply discount of 25% if total products are 50 or more
    if (totalProducts >= 50) {
        totalPrice *= 0.75; 
    }

    //  10% for rent
    const afterRent = totalPrice * 0.90;

    // check if is enough for renovation
    if (afterRent >= renovationPrice) {
        const remainingMoney = afterRent - renovationPrice;
        console.log(`Yes! ${remainingMoney.toFixed(2)} BGN left.`);
    } else {
        const neededMoney = renovationPrice - afterRent;
        console.log(`Not enough money! ${neededMoney.toFixed(2)} BGN needed.`);
    }
}
calculateProfitForRenovation(40.8, 20, 25, 30, 50, 10); 
calculateProfitForRenovation(320, 8, 2, 5, 5, 1); 