function countingOrcs(orcsDown,increaseCount,hoursOfFight){

    let n = Number(orcsDown)
    let m = Number(increaseCount)
    let h = Number(hoursOfFight)

    // increase in the number of Orcs fought after the first hour
    // (h-1) * m
    
     let totalOrcs = (h / 2) *(2 * n + (h-1)*m)
     console.log(totalOrcs)


}
countingOrcs(5,2,3)