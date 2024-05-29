function solve(num,arr){

    let myArr = arr.slice(0,num)

    return myArr.reverse().join(' ')

}
console.log(solve(3,[1,2,3,4,5]))
