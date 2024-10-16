'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MovieHasMovieCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MovieHasMovieCategory.init({
    movies_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    movies_categories_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'MovieHasMovieCategory',
    tableName: 'movies_has_movie_categories',
    timestamps: false
  });
  return MovieHasMovieCategory;
};