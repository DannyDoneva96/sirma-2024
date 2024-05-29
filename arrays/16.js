function solve(arr) {
    let result = arr
        .filter((_, index) => index % 2 !== 0)
        .map(element => element * 2); 

    result.reverse();

    console.log(result.join(' '));
}

solve([10, 15, 20, 25]); 
solve([3, 0, 10, 4, 7, 3]);