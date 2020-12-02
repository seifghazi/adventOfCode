const fs = require("fs");
const text = fs.readFileSync("./input.txt", "utf-8");
const inputArray = text.split("\n");


const twoSum = (target) => {
    let map = {};
    for (let i = 0; i < inputArray.length; i++) {
        if (map[target - inputArray[i]] != undefined) {
            return inputArray[i] * map[target - inputArray[i]];
        }

        map[inputArray[i]] = inputArray[i];
    }
}

const twoSumAdvanced = () => {
    let target = 2020;
    for (let i = 0; i < inputArray.length; i++) {
        let temp = twoSum(target - inputArray[i]);
        if (temp) {
            return inputArray[i] * temp;
        }
    }
}


// Part 1
let result = twoSum(2020);
console.log(`Part 1: ${result}`);

// Part 2
result = twoSumAdvanced();
console.log(`Part 2: ${result}`);

