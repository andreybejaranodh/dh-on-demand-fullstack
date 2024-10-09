'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MovieCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Movie, {
        through: 'movies_has_movie_categories',
        foreignKey: 'movies_categories_id',
        otherKey: 'movies_id',
        as: 'movies',
        timestamps: false
      });
    }
  }
  MovieCategory.init({
    name: {
      type: DataTypes.STRING(64),
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'MovieCategory',
    tableName: 'movie_categories',
    timestamps: false
  });
  return MovieCategory;
};