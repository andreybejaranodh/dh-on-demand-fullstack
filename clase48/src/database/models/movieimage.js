'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MovieImage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MovieImage.init({
    url: {
      type: DataTypes.TEXT,
      allowNull: false,
      get: function () {
        const url = this.getDataValue('url');
        return `${process.env.APP_URL}/img/movies/${url}`;
      }
    },
    movies_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'MovieImage',
    tableName: 'movie_images',
    timestamps: false
  });
  return MovieImage;
};