function findCombinations(oneLvCount, twoLvCount, fiveLvCount, targetSum) {
    for (let i = 0; i <= oneLvCount; i++) {
        for (let j = 0; j <= twoLvCount; j++) {
            for (let k = 0; k <= fiveLvCount; k++) {
                if (i * 1 + j * 2 + k * 5 === targetSum) {
                    console.log(`${i} * 1 lv. + ${j} * 2 lv. + ${k} * 5 lv. = ${targetSum} lv.`);
                }
            }
        }
    }
}

// Example usage
findCombinations(3, 2, 1, 10);