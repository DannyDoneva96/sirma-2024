function solve(param) {


    let reversed = param.split("").reverse().join("")

    result = param == reversed ? true : false

    return result


}

console.log(solve('radar'))