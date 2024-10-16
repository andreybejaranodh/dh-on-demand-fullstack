'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Subtitle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.Movie, {
        through: 'movies_has_subtitles',
        foreignKey: 'subtitles_id',
        otherKey: 'movies_id',
        as: 'movies',
        timestamps: false
      });
    }
  }
  Subtitle.init({
    name: {
      type: DataTypes.STRING(64)
    }
  }, {
    sequelize,
    modelName: 'Subtitle',
    tableName: 'subtitles',
    timestamps: false
  });
  return Subtitle;
};