//Write a program that receives speed (real number) and prints speed information.

function speed(integer) {

    let speed = Number(integer)

    if(speed <= 10 ){return 'slow'}else
    if(speed <=60){return 'average'}else if(speed <=120){return 'fast'}else 
    if(speed <=160){return 'super-fast'}else{return 'turbo-fast'}


}

console.log(speed(10))
console.log(speed(59))
console.log(speed(120))
console.log(speed(181))
console.log(speed(59.99))
console.log(speed(60.001))