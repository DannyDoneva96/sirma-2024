function rohanFormation(arrayOfInt, arrayOfCommands) {

    //create function to check if index is positive number or valid lenght
    let isValidIndex = (index) => index >= 0 && index < formation.length;
    // make copy by using slice 
    let formation = arrayOfInt.slice();

    for (let every of arrayOfCommands) {
        let indexes = every.split(' ');
        let action = indexes[0];

        if (action === 'destroy') {
            let destroyIndex = Number(indexes[1]);
            if (isValidIndex(destroyIndex)) {
                formation.splice(destroyIndex, 1);
                console.log(formation.join(' '));
            }
        } else if (action === 'swap') {
            let swapIndex1 = Number(indexes[1]);
            let swapIndex2 = Number(indexes[2]);
            if (isValidIndex(swapIndex1) && isValidIndex(swapIndex2)) {
                [formation[swapIndex1], formation[swapIndex2]] = [formation[swapIndex2], formation[swapIndex1]];
                console.log(formation.join(' '));

            }
        } else if (action === 'add') {

            let newRiderID = Number(indexes[1]);
            formation.push(newRiderID);
            console.log(formation.join(' '));

        } else if (action === 'insert') {
            let insertID = Number(indexes[1]);
            let insertIndex = Number(indexes[2]);
            if (isValidIndex(insertIndex)) {
                formation.splice(insertIndex, 0, insertID);
                console.log(formation.join(' '));

            }
        } else if (action === 'center') {
            let centerIndex;
            if (formation.length % 2 === 0) {
                // if even nums display middle two
                centerIndex = [formation.length / 2 - 1, formation.length / 2];
                console.log(formation[formation.length / 2 - 1], formation.length / 2)

            } else {

                centerIndex = [Math.floor(formation.length / 2)];
                console.log(formation[centerIndex])
            }
        }

    }
}
rohanFormation([1, 2, 3, 4, 5], ['destroy 3', 'swap 0 1', 'add 6', 'center'])