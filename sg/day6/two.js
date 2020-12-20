const fs = require("fs");
const text = fs.readFileSync("./input.txt", "utf-8");
const responses = text.split("\n");

let questionSet = {}
let numPeopleInGroup = 0;
let acc = 0;
for (let i = 0; i < responses.length; i++) {
    const response = responses[i];
    // populate map for reach group with freq of yes answers per question
    if (response) {
        numPeopleInGroup++;
        for (char of response) {
            if (!questionSet[char]) questionSet[char] = 1;
            else questionSet[char]++;
        }
    }
    
    if (response === '' || i == responses.length - 1) {
        // if number of yesses === numPeopleInGroup, we've got 1 answer
        for (question in questionSet) {
            if (questionSet[question] === numPeopleInGroup) acc++;
        }
        questionSet = {};
        numPeopleInGroup = 0;
    }
}

console.log(acc);