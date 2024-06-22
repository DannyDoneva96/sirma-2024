function councilOfVotes(arrayOfVotes) {


    let positiveVotes = 0;
    let negativeVotes = 0;
    let abstainedVotes = 0;

    //we distribute the votes
    for (let every of arrayOfVotes) {

        if (every == 'Yes') { positiveVotes++; }
        else if (every == 'No') { negativeVotes++ }
        else if (every == 'Abstein') { abstainedVotes++ }

    }
    // if votes are equal and diff of 0
    if (positiveVotes != 0 && positiveVotes == negativeVotes) {
        return 'Tie'
    } else if (negativeVotes > positiveVotes) {
        return 'No'
    } else if (negativeVotes < positiveVotes) {
        return 'Yes'
    } else if (negativeVotes == 0 && positiveVotes == 0 && abstainedVotes != 0) {
        //if votes of yes and no are 0 
        return 'Abstein'
    }

}

console.log(councilOfVotes(['Yes', 'No', 'Yes', 'Abstein', 'Yes']));
console.log(councilOfVotes(['Yes', 'No', 'No']));
console.log(councilOfVotes(['Yes', 'No']));
console.log(councilOfVotes(['Abstein']));
console.log(councilOfVotes(['Yes', 'No', 'Yes', 'Abstein', 'No', 'Abstein']));
console.log(councilOfVotes(['Abstein', 'No', 'Abstein']));


