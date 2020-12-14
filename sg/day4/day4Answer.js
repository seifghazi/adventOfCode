const fs = require("fs");
const text = fs.readFileSync("./input.txt", "utf-8");
const inputArray = text.split("\n\n");

let entrySet = new Set();

const passportCheck = (filteringInvalidEntries) => {
    let numValid = 0;
    for (let i = 0; i < inputArray.length; i++) {
        // clean up input 
        passport = inputArray[i].split('\n');

        // populate set with entries
        for (let line of passport) {
            let entries = line.split(' ');
            for (entry of entries) {
                let splitEntry = entry.split(':');
                const [attr, value] = splitEntry;
                const isEntryValid = isValidAttribute(attr, value);
                
                if (filteringInvalidEntries && !isEntryValid) continue;
                entrySet.add(attr);
            }
        }

        if (entrySet.size == 8 || entrySet.size == 7 && !entrySet.has('cid')) numValid++;
        entrySet.clear();
    }
    return numValid;
}

function isValidAttribute(attr, value) {
    switch (attr) {
        case 'byr':
            return parseInt(value) >= 1920 && parseInt(value) <= 2002;
        case 'iyr':
            return parseInt(value) >= 2010 && parseInt(value) <= 2020;
        case 'eyr':
            return parseInt(value) >= 2020 && parseInt(value) <= 2030;
        case 'hgt':
            let units = value.slice(-2);
            let height = parseInt(value.slice(0, value.length - 2));
            if (units === "cm") return height >= 150 && height <= 193;
            if (units === "in") return height >= 59 && height <= 76;
            break;
        case 'hcl':
            const regExp = /#([0-9]|[a-f]){6}/g;
            return value.match(regExp) != null;
        case 'ecl':
            return value == 'amb' || value == 'blu' || value == 'brn' || value == 'gry' || value == 'grn' || value == 'hzl' || value == 'oth';
        case 'pid':
            return value.length == 9;
        default:
            return false;
    }
}

console.log(`Part 1: ${passportCheck()}`);
console.log(`Part 2: ${passportCheck(true)}`);
