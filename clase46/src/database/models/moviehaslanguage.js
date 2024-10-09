'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MovieHasLanguage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MovieHasLanguage.init({
    movies_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    languages_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'MovieHasLanguage',
    tableName: 'movies_has_languages',
    timestamps: false
  });
  return MovieHasLanguage;
};