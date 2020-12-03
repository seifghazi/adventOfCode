const fs = require("fs");
const text = fs.readFileSync("./input.txt", "utf-8");
const inputArray = text.split("\n");

const parser = (input) => {
        let splitInput = input.split(" ");
    
        // parse range
        let range = splitInput[0];
        let splitRange = range.split("-");
        const [min, max] = splitRange;
    
        // parse char
        let char = splitInput[1][0];
    
        let password = splitInput[2];
        
        return [min, max, char, password];
}

const part1 = () => {
    let numValid = 0;
    for (let i = 0; i < inputArray.length; i++) {
        const [min, max, char, password] = parser(inputArray[i]);
        
        // find num occurences of char in password
        let numOccurences = password.split(char).length - 1
    
        if (numOccurences >= min && numOccurences <= max) numValid++;
    }

    return numValid;
}

const part2 = () => {
    let numValid = 0;
    for (let i = 0; i < inputArray.length; i++) {
        const [pos1, pos2, char, password] = parser(inputArray[i]);
        // extract char in pos1 and pos2
        const charPos1 = password[pos1 - 1];
        const charPos2 = password[pos2 - 1];

        // check valid password contstraints 
        if (charPos1 != charPos2 && (charPos1 == char || charPos2 == char)) {
            numValid++;
        } 
    }

    return numValid;
}


// Part 1
let result = part1();
console.log(`Part 1: ${result}`);

// Part 2
result = part2();
console.log(`Part 2: ${result}`);