

function isLegendary(string) {
    //  counters for the hero and opponents brackets
    let countHeroRound = 0;
    let countHeroCurly = 0;
    let countOpponentRound = 0;
    let countOpponentCurly = 0;
    let countExclamationMark = 0;
    let array = string.split('')

    for (let char of array) {
        // Increment the  counters for the hero and opponents brackets
        if (char === '(') {
            countOpponentRound++;
        } else if (char === '{') {
            countOpponentCurly++;
        } else if (char === ')') {
            countHeroRound++;
        } else if (char === '}') {
            countHeroCurly++;
        } else if (char === '!') {

            countExclamationMark++;
        }
    }
    // If at any point the count of opening brackets exceeds the count of closing brackets,
    // it means there is an unmatched closing bracket
    if (countHeroRound != countOpponentRound ||
        countHeroCurly != countOpponentCurly ||
        countExclamationMark % 2 !== 0) {
        console.log('Not Legendary');
        return;
    }


    // Check if the counts of opening and closing brackets match for the hero and the opponent
    if (countHeroRound === countOpponentRound &&
        countHeroCurly === countOpponentCurly) {
        console.log('Legendary');
    } else {
        console.log('Not Legendary');
    }
}


isLegendary('()()(()())');
isLegendary('((!!)(({!!})))');
isLegendary('((())');
isLegendary('{!}!');
isLegendary('({(!!}))');          