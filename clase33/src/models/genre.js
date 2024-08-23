const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/genres.json');

function getData() {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
}

const Genre = {
    findAll: () => {
        return getData();
    }
};

module.exports = Genre;