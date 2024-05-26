function solve(row, column) {

    for (let i = 1; i <= row; i++) {

        let line = [];

        if (i == 1 || i == row) {

            line.push('*'.repeat(column));

            console.log(line.join(""));

        } else {

            line.push('*');

            for (let j = 0; j < column - 2; j++) {

                line.push(' ');
            }

            line.push('*');

            console.log(line.join(""));

        }

    }

}

solve(4, 6)