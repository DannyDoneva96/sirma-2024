function solve(arr) {
    let result = [];
    let currentMax = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= currentMax) {
            currentMax = arr[i];
            result.push(arr[i]);
        }
    }

     console.log(result.join(' '));
}
solve([1, 3, 8, 4, 10, 12, 3, 2, 24])
