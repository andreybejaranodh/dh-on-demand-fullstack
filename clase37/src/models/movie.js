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
    },
    update: (id, data) => {
        const movies = getData();
        const index = movies.findIndex(movie => movie.id === Number(id));
        movies[index] = {
            id: movies[index].id,
            title: data.title || movies[index].title,
            description: data.description || movies[index].description,
            poster: data.poster || movies[index].poster,
            genre: data.genre || movies[index].genre,
            directors: data.directors || movies[index].directors,
            cast: data.cast || movies[index].cast
        };
        fs.writeFileSync(filePath, JSON.stringify(movies, null, 4));
        return movies[index];
    },
    delete: (id) => {
        const movies = getData();
        const index = movies.findIndex(movie => movie.id === Number(id));
        movies.splice(index, 1);
        fs.writeFileSync(filePath, JSON.stringify(movies, null, 4));
        return true;
    }
};

module.exports = Movie;