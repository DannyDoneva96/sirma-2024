function solve(money, countOfStudents, saberPrice, robePrice, beltPrice) {

    let saberCount = Math.ceil(countOfStudents * 1.1);
    let totalSaberCost = saberCount * saberPrice;
    
    let totalRobeCost = countOfStudents * robePrice;
    
    let freeBelts = Math.floor(countOfStudents / 6);
    let totalBeltCost = (countOfStudents - freeBelts) * beltPrice;
    
    let totalCost = totalSaberCost + totalRobeCost + totalBeltCost;
    
    if (totalCost <= money) {
        console.log(`The money is enough - it would cost ${totalCost.toFixed(2)}lv.`);
    } else {
        let neededMoney = totalCost - money;
        console.log(`George Lucas will need ${neededMoney.toFixed(2)} lv more.`);
    }
}

solve(100, 2, 1.0, 2.0, 3.0);