function guessTheEra(year, material) {

    if (year < 500 && material === 'stone') {
        return 'Ancient';
    } else if (year >= 500 && year < 1500 && material === 'stone') {
        return 'Medieval';
    } else if (year >= 1500 && year < 1800 && material === 'wood') {
        return 'Colonial';
    } else if (year >= 1800 && year < 1900 && material === 'steel') {
        return 'Industrial';
    } else if (year > 1900 && material === 'steel') {
        return 'Modern';
    } else {
        return 'Uncertain';
    }
}
console.log(guessTheEra(300, 'stone')); 
console.log(guessTheEra(1500, 'wood')); 
console.log(guessTheEra(1500, 'stone')); 
console.log(guessTheEra(2000, 'steel')); 
console.log(guessTheEra(1100, 'wood')); 
console.log(guessTheEra(1800, 'wood')); 
console.log(guessTheEra(1900, 'steel')); 
console.log(guessTheEra(1600, 'steel')); 