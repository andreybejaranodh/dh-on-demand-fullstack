'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.MovieCategory, {
        through: 'movies_has_movie_categories',
        foreignKey: 'movies_id',
        otherKey: 'movies_categories_id',
        as: 'categories',
        timestamps: false
      });

      this.hasMany(models.MovieImage, {
        foreignKey: 'movies_id',
        as: 'images',
        timestamps: false
      });

      this.belongsToMany(models.Actor, {
        through: 'movies_has_actors',
        foreignKey: 'movies_id',
        otherKey: 'actors_id',
        as: 'actors',
        timestamps: false
      });

      this.belongsToMany(models.Director, {
        through: 'movies_has_directors',
        foreignKey: 'movies_id',
        otherKey: 'directors_id',
        as: 'directors',
        timestamps: false
      });

      this.belongsToMany(models.Subtitle, {
        through: 'movies_has_subtitles',
        foreignKey: 'movies_id',
        otherKey: 'subtitles_id',
        as: 'subtitles',
        timestamps: false
      });

      this.belongsToMany(models.Language, {
        through: 'movies_has_languages',
        foreignKey: 'movies_id',
        otherKey: 'languages_id',
        as: 'languages',
        timestamps: false
      });
    }
  }
  Movie.init({
    title: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    length: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    release_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Movie',
    tableName: 'movies',
    hooks: {
      // afterFind: (movies, options) => {
      // Esto no se recomuenda hacer ya que tengo q hacer muchas validaciones para la imagen, mejor usar el metodo qet
      // del modelo de MovieImages para obtener la url de la imagen concatenada con la url real
      //   if (Array.isArray(movies)) {
      //     movies.forEach(movie => {
      //       if (movie?.images) {
      //         movie.images.forEach(image => {
      //           image.url = `${process.env.APP_URL}/img/movies/${image.url}`;
      //         });
      //       }
      //     });
      //   } else {
      //     if (movies?.images) {
      //       movies.images.forEach(image => {
      //         image.url = `${process.env.APP_URL}/img/movies/${image.url}`;
      //       });
      //     }
      //   }
      // }
    }
  });
  return Movie;
};