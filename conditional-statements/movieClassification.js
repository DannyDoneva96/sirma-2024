function movieRates(age) {

    if (age < 13) { return 'U-rated movies' } else if (age < 18) { return 'U and PG-13 rated movies' } else { return 'All movies' }

}
console.log(movieRates(21))