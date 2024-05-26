function peterAngerIssues(lostGames,headsetPrice, mousePrice, keyboardPrice, displayPrice){

    let headsetCount = 0;
    let mouseCount = 0;
    let keyboardCount = 0;
    let displayCount = 0;

    for (let i = 1; i <= lostGames; i++) {
        if (i % 2 === 0) headsetCount++;
        if (i % 3 === 0) mouseCount++;
        if (i % 2 === 0 && i % 3 === 0) keyboardCount++;
        if (keyboardCount > 0 && keyboardCount % 2 === 0 && i % 2 === 0 && i % 3 === 0) displayCount++;
    }

    let totalExpenses = (headsetCount * headsetPrice) +
                        (mouseCount * mousePrice) +
                        (keyboardCount * keyboardPrice) +
                        (displayCount * displayPrice);

    console.log(`Rage expenses: ${totalExpenses.toFixed(2)} lv.`);

}
peterAngerIssues(7, 2.0, 3.0, 4.0, 5.0);