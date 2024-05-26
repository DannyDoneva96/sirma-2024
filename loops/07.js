function solve() {

    for (let i = 0; i < 24; i++) {

        let h = i < 10 ? `0${i}` : i;



        for (let j = 0; j < 60; j++) {

            let m = j < 10 ? `0${j}` : j;

            console.log(`${h}:${m}`);

        }

    }

}



solve();

