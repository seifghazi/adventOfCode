const fs = require("fs");
const text = fs.readFileSync("./input.txt", "utf-8");
const inputArray = text.split("\n");

const traverseHill = (jumps) => {
    let lineLength = inputArray[0].length;
    let result = [];
    for (jump of jumps) {
        let { rightJump, downJump } = jump;
        let currentIndex = 0;
        let numTrees = 0;
        for (let i = 0; i < inputArray.length; i++) {
            let nextLine = i + downJump >= inputArray.length ? null : inputArray[(i * downJump) + downJump];
            if (nextLine) {
                currentIndex = (currentIndex + rightJump) % lineLength;
                let potentialTree = nextLine[currentIndex];
                if (potentialTree === "#") numTrees++;
            }
        }
        result.push(numTrees);
    }
    return result;
}

const part1 = () => {
    let jumps = [{ rightJump: 3, downJump: 1 }];
    return traverseHill(jumps)[0];
}

const part2 = () => {
    let jumps = [{ rightJump: 1, downJump: 1 }, { rightJump: 3, downJump: 1 }, { rightJump: 5, downJump: 1 }, { rightJump: 7, downJump: 1 }, { rightJump: 1, downJump: 2 }];
    let result = traverseHill(jumps);
    return result.reduce((a, b) => a * b);
}


let result;
// Part 1 Answer
result = part1();
console.log(`Part 1 Result: ${result}`);

// Part 2 Answer
result = part2();
console.log(`Part 2 Result: ${result}`);