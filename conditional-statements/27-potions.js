function potionDecision(ingredient1,ingredient2){

    // first ingr. has to be only herbs or berries
    // so we check that 
    if(!ingredient1 == 'herbs'|| !ingredient1 == 'berries'){return 'No potion'}
     
    if (ingredient1 == 'herbs'){

        if(ingredient2=='water'){
            return 'Health potion'
        }else if(ingredient2 == 'oil'){return 'Stealth potion'}else{return 'Minor stamina potion'}

    }else{
        if(ingredient2=='sugar'){
            return 'Speed motion'
        }else{return 'Minor energy potion'}

    }

}

console.log(potionDecision('herbs','water'))
console.log(potionDecision('herbs','oil'))

console.log(potionDecision('herbs','banana'))
console.log(potionDecision('herbs','sugar'))
console.log(potionDecision('berries','sugar'))
console.log(potionDecision('berries','apple'))