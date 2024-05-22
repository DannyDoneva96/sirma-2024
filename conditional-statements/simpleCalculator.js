function simpleCalculator(int2,int,operator){

  if(operator=="add"){return int2+int;}else if(operator=="subtract"){return int2-int;}
  else if(operator=="multiply"){return int2*int;}else if(operator=="divide"){return int2/int;}


}
console.log(simpleCalculator(5,5,'add').toFixed(2));