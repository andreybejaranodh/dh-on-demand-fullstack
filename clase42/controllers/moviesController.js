const fs = require("fs");
const path = require("path");

module.exports = {
  moviesList: (req, res) => {
    // console.log(path.join(__dirname, "../data/movies.json"));
    let moviesPath = path.join(__dirname, "../data/movies.json");
    let movies = JSON.parse(fs.readFileSync(moviesPath, "utf8"));

    let published = movies.filter((m) => {
      return m.published == 1;
    });

    console.log(published);

    res.render("movies/moviesList.ejs", {
      movies,
      published,
    });
  },
};
