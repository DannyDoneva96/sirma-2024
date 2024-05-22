  function isExcellent(input){

    if (Number(input)>5.49 && Number(input)<=6){
        return "Excellent!"
    }else{
        return "invalid output"
    }
  }

  console.log(isExcellent(6))
  console.log(isExcellent(5))
  console.log(isExcellent(4))
  console.log(isExcellent(5.25))
  console.log(isExcellent(5.5))