const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/movies.json');

function getData() {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
}

const Movie = {
    findAll: () => {
        return getData();
    },
    findById: (id) => {
        const movies = getData();
        return movies.find(movie => movie.id === Number(id));
    },
    create: (data) => {
        const movies = getData();
        const newMovie = {
            id: movies[movies.length - 1].id + 1,
            title: data.title,
            description: data.description,
            poster: data.poster,
            genre: data.genre,
            directors: data.directors,
            cast: data.cast
        };
        movies.push(newMovie);
        fs.writeFileSync(filePath, JSON.stringify(movies, null, 4));
        return newMovie;
    }
};

module.exports = Movie;