function newBuilding(flores, aparts) {

    let currentFloore = flores

    for (let i = flores; i > 0; i--) {
        let flore = []

        if (i == flores) {

            for (let j = 0; j < aparts; j++) {
                flore.push(`L${flores}${j}`)
            }
            console.log(flore.join(' '))
            flore = []
            currentFloore -= 1

        } else {
            if (currentFloore % 2 == 0) {
                for (let k = 0; k < aparts; k++) {
                    flore.push(`O${currentFloore}${k}`)
                }
                console.log(flore.join(' '))
                flore = []
                currentFloore -= 1
            } else {
                for (let k = 0; k < aparts; k++) {
                    flore.push(`A${currentFloore}${k}`)
                }
                console.log(flore.join(' '))
                flore = []
                currentFloore -= 1
            }


        }

    }
}

newBuilding(6, 4)