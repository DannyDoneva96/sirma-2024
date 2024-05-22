
function adressByAgeAndGender(age,gender) {

    
     if (gender == 'f'){
if (age <=16){return 'Miss'}else {return 'Ms.'}
     }

     if(gender == 'm'){
        if (age <=16){return 'Master'}else {return 'Mr.'}


     }

}
console.log(adressByAgeAndGender(14,'f'))
console.log(adressByAgeAndGender(32,'f'))
console.log(adressByAgeAndGender(16,'f'))
console.log(adressByAgeAndGender(14,'m'))
console.log(adressByAgeAndGender(32,'m'))
console.log(adressByAgeAndGender(16,'m'))
