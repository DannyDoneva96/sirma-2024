
function reverseArray(arr) {
    // Swap elements to reverse the array
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        // Swap the elements at left and right indices
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
    return arr;
}



console.log(reverseArray(['abc', 'def', 'hig', 'klm', 'nop']))