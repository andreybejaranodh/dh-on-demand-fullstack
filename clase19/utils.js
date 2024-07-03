const fs = require('fs');

function getDirectoryPath() {
    const files = fs.readdirSync('./');
    return files;
}

function getRandom(min = 0, max = 10) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomLetter() {
    const letters = 'abcdefghij';
    const index = getRandom(0, letters.length - 1);
    return letters[index];
}

module.exports = { 
    getRandom: getRandom, 
    getRandomLetter: getRandomLetter,
    getDirectoryPath: getDirectoryPath
};