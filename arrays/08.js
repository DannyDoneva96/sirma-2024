function solve(array) {
    let arr = array
    let resultArray = [];

    do {
        resultArray = [];
        for (let i = 0; i < arr.length - 1; i++) {

            resultArray.push(arr[i] + arr[i + 1])
        }
        arr = resultArray
    }while (resultArray.length !== 1) 

        console.log(resultArray)
}
solve([2, 10, 3])