function solve(k, arr) {
    // Extract the first k elements
    let firstKElements = arr.slice(0, k);
    
    // Extract the last k elements
    let lastKElements = arr.slice(-k);
    
    // Print the elements
    console.log(firstKElements.join(' '));
    console.log(lastKElements.join(' '));
}