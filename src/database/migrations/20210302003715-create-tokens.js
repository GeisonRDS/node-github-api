'use strict';

const { Sequelize } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('tokens', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,        
      }
    })
  },

  down: async (queryInterface) => {
    return queryInterface.dropTable('tokens')
  }
};
