function solve(arr1, arr2) {

    let myArr = arr1.map(x => Number(x))
    let myArr2 = arr2.map(x => Number(x))
    let sum = 0;
    let ifDiff = false;
    for (i = 0; i < myArr.length; i++) {
            

        if (myArr[i] == myArr2[i]) {
             sum += myArr[i]
        } else {
            console.log(`Arrays are not identical. Found difference at ${i} index`)
            ifDiff = true
        }
       
    }
    if (ifDiff) {return}
    console.log(`Arrays are identical. Sum is: ${sum}`)
}



solve([10,20,30], [10,20,30])
solve([10,20,30,40], [10,20,30,30])