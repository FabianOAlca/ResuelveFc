'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Jugadores', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      nivel: {
        type: Sequelize.STRING
      },
      goles: {
        type: Sequelize.INTEGER
      },
      sueldo: {
        type: Sequelize.INTEGER
      },
      bono: {
        type: Sequelize.INTEGER
      },
      sueldo_completo: {
        type: Sequelize.INTEGER
      },
      equipo: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Jugadores');
  }
};