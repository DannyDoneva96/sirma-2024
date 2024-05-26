function solve(n){

    let sum =1;
    for(let i=0; i<=n; i++){
        console.log(2*i+1);
        sum+=2*i
    }
    console.log(`Sum: ${sum}`);
}
solve(3)

// the example and the given outputs arent the same