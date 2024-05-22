function calculateDiscount(age, membership) {
    let discount;
    let hasMembership;

    if(membership =='Yes'){hasMembership = true}else{hasMembership = false}

    if (age < 18) {
        discount= 10; 
    } else if (age >= 18 && age <= 64) {
        discount= hasMembership ? 20 : 10; 
    } else {
        discount= 30; 
    }
       
    return `${discount}% discount`
}
console.log(calculateDiscount(20,'Yes'))