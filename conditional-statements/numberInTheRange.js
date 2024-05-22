function numberInRange(int){

    let number = Number(int);

    if(number>=-100 && number<=100 && number!=0){return 'Yes'}else{return 'No'}
}
console.log(numberInRange(-25))
console.log(numberInRange(0))
console.log(numberInRange(25))
