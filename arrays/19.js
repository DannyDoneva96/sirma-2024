function manipulateArray(input) {
    let arr = input[0].split(' ').map(Number);
    
    for (let i = 1; i < input.length; i++) {
        let commandParts = input[i].split(' ');
        let command = commandParts[0];
        let number = Number(commandParts[1]);
        
        if (command === "Add") {
            arr.push(number);
        } else if (command === "Remove") {
            arr = arr.filter(el => el !== number);
        } else if (command === "RemoveAt") {
            let index = number;
            arr.splice(index, 1);
        } else if (command === "Insert") {
            let index = Number(commandParts[2]);
            arr.splice(index, 0, number);
        }
    }

    console.log(arr.join(' '));
}

manipulateArray(["4 19 2 53 6 43", "Add 3", "Remove 2", "RemoveAt 1", "Insert 8 3"]);

