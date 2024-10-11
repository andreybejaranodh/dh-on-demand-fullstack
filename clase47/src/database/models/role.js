'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Un rol lo pueden tener muchos usuarios
      // Para las relaciones de N:1 se usa hasMany
     this.hasMany(models.User, {foreignKey: 'roles_id', sourceKey: 'id', as: 'users' }); 
    }
  }
  Role.init({
    name: { 
      type: DataTypes.STRING(64), 
      allowNull: false 
    }
  }, {
    sequelize,
    modelName: 'Role',
    tableName: 'roles',
    timestamps: false
  });
  return Role;
};