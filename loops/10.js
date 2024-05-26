function solve(n) {



    let factorial = 1;

    for (let i = 1; i <= n; i++) {



        factorial *= i

    }

    console.log(factorial)

}

solve(5)



--------- 11--------

    function solve(param) {



        let result = param.split("")

        console.log(result.reverse().join(""))


    }

solve('123456')



------- 12--------- fib

function fibonacciSum(n) {

    if (n <= 0) {

        return 0;

    }



    let fib = [0, 1]; // Initializing the first two Fibonacci numbers

    let sum = fib[0] + fib[1]; // Initializing the sum with the first two numbers



    for (let i = 2; i < n; i++) {

        fib[i] = fib[i - 1] + fib[i - 2]; // Generating the next Fibonacci number

        sum += fib[i]; // Adding the new number to the sum

    }



    // If n is 1, we should return the sum of the first Fibonacci number which is 0

    if (n === 1) {

        sum = 0;

    }



    return sum;

}



------- 13---------

    function solve(param) {



        let reversed = param.split("").reverse().join("")

        result = param == reversed ? true : false

        return result







    }

console.log(solve('radar'))

--- 14------

    function solve(param) {



        let result = 0;

        let integers = param.split("")



        for (let i = 1; i < integers.length; i++) {



            result = result + Number(integers[i]) ** integers.length

        }

        console.log(result)



    }

solve('153')

------15-----

    function solve(n) {





        console.log(n)

        while (n != 1) {

            if (n % 2 == 0) {

                n = n / 2



            } else {

                n = n * 3 + 1



            }

            console.log(n)

        }



    }

solve('6')

----- 16--------

    function solve(row, column) {

        for (let i = 1; i <= row; i++) {

            let line = [];

            if (i == 1 || i == row) {

                // First and last rows are completely filled with '*'

                line.push('*'.repeat(column));

                console.log(line.join(""));

            } else {

                // Middle rows start and end with '*' and have spaces in between

                line.push('*');

                for (let j = 0; j < column - 2; j++) {

                    line.push(' ');

                }

                line.push('*');

                console.log(line.join(""));

            }

        }

    }

solve(4, 6)