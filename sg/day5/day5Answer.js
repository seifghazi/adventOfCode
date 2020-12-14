const fs = require("fs");
const text = fs.readFileSync("./input.txt", "utf-8");
const inputArray = text.split("\n");

let ids = [];
// this one wasn't too bad - convert char to binary number
for (seat of inputArray) {
    let chars = seat.split('');
    let row = parseInt(chars.slice(0, 7).map(char => char == 'F' ? 0 : 1).join(''), 2);
    let column = parseInt(chars.slice(7).map(char => char == 'L' ? 0 : 1).join(''), 2);

    ids.push(row * 8 + column);
}

// part 1
console.log(Math.max(...ids));

// part 2
ids.sort()
for (let i = 0; i < ids.length - 1; i++) {
    if (ids[i + 1] == ids[i] + 2) console.log(ids[i] + 1)
}



