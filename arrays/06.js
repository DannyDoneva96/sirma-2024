function sumEvenNum(arr) {

    let even = 0;
    let odd = 0;
    let myArr = arr.map(x => Number(x))

     for(every of myArr){
        if(every %2==0){
            even += every
        }else {odd+=every}
     }
    console.log(even-odd)
}

sumEvenNum(['1','2','3','4','5','6'])