function solve(arr,n){
   
    let result = [];
     
    for(let i = 0; i < arr.length; i+=n){
             result.push(arr[i]);

    }
    console.log(result);
     
}
solve([5,15,31,14,20],6)