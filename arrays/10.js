function solve(arr){
   
    let result = [];
     let num = 0;
    for(let i = 0; i < arr.length; i++){

            if (arr[i]=='add'){
                 num += 1
                result.push(num)




            }else if (arr[i]=='remove'){
                result.pop()
                
                

            }
    }
    if ( num <=0){console.log('Empty')}else{console.log(result.join(' '))}
     
}
solve(['add','add','add','add'])
solve(['add','add','remove','add','add'])
solve(['remove','remove','remove',])