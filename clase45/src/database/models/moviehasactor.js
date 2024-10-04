'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MovieHasActor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MovieHasActor.init({
    movies_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    actors_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'MovieHasActor',
    tableName: 'movies_has_actors',
    timestamps: false
  });
  return MovieHasActor;
};