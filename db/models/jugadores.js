'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Jugadores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Jugadores.init({
    name: DataTypes.STRING,
    nivel: DataTypes.STRING,
    goles: DataTypes.INTEGER,
    sueldo: DataTypes.INTEGER,
    bono: DataTypes.INTEGER,
    sueldo_completo: DataTypes.INTEGER,
    equipo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Jugadores',
  });
  return Jugadores;
};