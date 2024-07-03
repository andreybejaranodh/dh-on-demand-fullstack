const luxon = require('luxon');

const utils = require('./utils');

const number = utils.getRandom(1, 10);

console.log(number);

const letter = utils.getRandomLetter();

console.log(letter);

utils.getDirectoryPath();

const now = luxon.DateTime.now();

const birthday = luxon.DateTime.fromISO('1988-09-10');

console.log(now.diff(birthday, 'year'));

console.log(luxon.DateTime.now().toFormat('dd-LL-yyyy'));