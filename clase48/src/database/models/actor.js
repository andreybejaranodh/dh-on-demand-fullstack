'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Actor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.Movie, {
        through: 'movies_has_actors',
        foreignKey: 'actors_id',
        otherKey: 'movies_id',
        as: 'movies',
        timestamps: false
      });
    }
  }
  Actor.init({
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
    modelName: 'Actor',
    tableName: 'actors',
    timestamps: false
  });
  return Actor;
};