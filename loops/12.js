function fibonacciSum(n) {

    if (n <= 0) {

        return 0;

    }



    let fib = [0, 1]; 

    let sum = fib[0] + fib[1]; 



    for (let i = 2; i < n; i++) {

        fib[i] = fib[i - 1] + fib[i - 2]; 

        sum += fib[i]; 

    }



   

    if (n === 1) {

        sum = 0;

    }



    return sum;

}
