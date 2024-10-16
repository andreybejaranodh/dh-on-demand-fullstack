'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Director extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.Movie, {
        through: 'movies_has_directors',
        foreignKey: 'directors_id',
        otherKey: 'movies_id',
        as: 'movies',
        timestamps: false
      });
    }
  }
  Director.init({
    name: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    avatar: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    bio: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Director',
    tableName: 'directors',
    timestamps: false
  });
  return Director;
};