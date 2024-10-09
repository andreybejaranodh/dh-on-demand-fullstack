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
      // define association here
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