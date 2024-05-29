function solve(g){

  

    let days={
  
        1:'Monday',
  
        2:'Tuesday',
  
        3:'Wednesday',
  
        4:'Thursday',
  
        '5':'Friday',
  
        6:'Saturday',
  
        7:'Sunday'
  
    }
  
    if(days[g]){
  
        return days[g]
  
   
  
  }else {return 'Invalid Day!'}
  
  }
  
   
  
  console.log(solve(5))
  
  console.log(solve(10))