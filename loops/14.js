function solve(param) {



    let result = 0;

    let integers = param.split("")



    for (let i = 1; i < integers.length; i++) {



        result = result + Number(integers[i]) ** integers.length

    }

    console.log(result)



}

solve('153')