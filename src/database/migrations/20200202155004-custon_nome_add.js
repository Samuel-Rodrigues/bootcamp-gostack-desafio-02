'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.addColumn(
      'recipientes',
      'nome',
      {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      }
    )

  },

  down: (queryInterface, Sequelize) => {
  }
};
