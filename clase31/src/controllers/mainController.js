const path = require('path');

const controller = {
    index: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/index.html'));
    },
    about: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/about.html'));
    },
    getLogs: (req, res) => {
        res.sendFile(path.join(__dirname, '../../log.txt'));
    }
};

module.exports = controller;