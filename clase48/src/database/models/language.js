'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Language extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.Movie, {
        through: 'movies_has_languages',
        foreignKey: 'languages_id',
        otherKey: 'movies_id',
        as: 'movies',
        timestamps: false
      });
    }
  }
  Language.init({
    name: {
      type: DataTypes.STRING(64),
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Language',
    tableName: 'languages',
    timestamps: false
  });
  return Language;
};