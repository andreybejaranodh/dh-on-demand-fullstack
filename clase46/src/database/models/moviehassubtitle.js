'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MovieHasSubtitle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MovieHasSubtitle.init({
    movies_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    subtitles_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'MovieHasSubtitle',
    tableName: 'movies_has_subtitles',
    timestamps: false
  });
  return MovieHasSubtitle;
};