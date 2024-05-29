function solve(arr,rotation){
    
     let result = arr
 
      for (let i=0;i<rotation;i++){
 
              let element = result.shift();
              result.push(element);

      }
     
 console.log(result);
}
solve(['banana','orange','coconut','apple'],2)