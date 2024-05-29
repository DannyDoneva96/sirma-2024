function smallestTwoNumbers(arr) {
    let sortedArr = arr.sort((a, b) => a - b);
    
    let firstTwo = sortedArr.slice(0, 2);
    
    console.log(firstTwo.join(' '));
}