//Write a function that takes an hour and minutes of a 24-hour day and calculates what
//time it will be after 15 minutes. Print the result in hours:minutes format.

// Hours are always between 0 and 23, and minutes are always between 0 and 59. Hours
// are written in one or two digits.
// Minutes are always written with two digits, with a leading zero when necessary.

function alarm(hour, min) {
    let hours = Number(hour)
    let minutes = Number(min)

    if (minutes >= 45) {
        if (hours == 23) {
            hours = 0;
            minutes = minutes + 15 - 60
        } else {
            hours += 1
            minutes = minutes + 15 - 60
        }
    }else{

            minutes = minutes + 15
    }
      
     let result = `${hours}:${minutes}`
     if (minutes<10){result = `${hours}:0${minutes}`}
     return result
}
    console.log(alarm(1,47))
    console.log(alarm(0,2))
    console.log(alarm(23,59))  
      console.log(alarm(11,0o7))