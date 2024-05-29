function solve(arr) {
    let result = [];

    arr.forEach(element => {
        if (element < 0) {
            result.unshift(element);  // Prepend negative numbers
        } else {
            result.push(element);  // Append non-negative numbers
        }
    });

    console.log(result.join('\n'))
}

solve([7, -2, 8, 9])
    solve([3, -2, 0, -1])