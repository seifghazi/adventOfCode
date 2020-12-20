const fs = require("fs");
const text = fs.readFileSync("./input.txt", "utf-8");
const responses = text.split("\n");

let questionSet = new Set();
let acc = 0;
for (let i = 0; i < responses.length; i++) {
    const response = responses[i];
    for (const question of response) {
        questionSet.add(question);
    }

    if (response === '' || i == responses.length - 1) {
        acc += questionSet.size;
        questionSet.clear();
    }
}

console.log(acc);