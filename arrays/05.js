function sumEvenNum(arr) {

    let result = 0;
    let myArr = arr.map(x => Number(x))

     for(every of myArr){
        if(every %2==0){
            result += every
        }
     }
    console.log(result)
}

sumEvenNum(['1','3','5'])