const fs = require("fs");
const text = fs.readFileSync("./input.txt", "utf-8");
const responses = text.split("\n");

let questionSet = {}
let numPeopleInGroup = 0;
let acc = 0;
for (let i = 0; i < responses.length; i++) {
    const response = responses[i];
    
    if (response) {
        numPeopleInGroup++;
        for (char of response) {
            if (!questionSet[char]) questionSet[char] = 1;
            else questionSet[char]++;
        }
    }
    
    if (response === '' || i == responses.length - 1) {
        console.log(questionSet, numPeopleInGroup);
        for (question in questionSet) {
            if (questionSet[question] === numPeopleInGroup) acc++;
        }
        questionSet = {};
        numPeopleInGroup = 0;
    }
}

console.log(acc);