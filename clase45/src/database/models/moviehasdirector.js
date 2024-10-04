'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MovieHasDirector extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MovieHasDirector.init({
    movies_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    directors_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'MovieHasDirector',
    tableName: 'movies_has_directors',
    timestamps: false
  });
  return MovieHasDirector;
};