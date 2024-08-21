const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/movies.json');

function getData() {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
}

const Movie = {
    findAll() {
        return getData();
    },
    findById(id) {
        const movies = getData();
        return movies.find(movie => movie.id === Number(id));
    }
};

module.exports = Movie;