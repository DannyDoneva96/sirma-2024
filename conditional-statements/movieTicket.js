function ticketPrice(age) {
    if (age >= 0 && age <= 12) {
        return '$5';
    } else if (age >= 13 && age <= 19) {
        return '$8';
    } else {
        return '$10';
    }
}

console.log(ticketPrice(16))