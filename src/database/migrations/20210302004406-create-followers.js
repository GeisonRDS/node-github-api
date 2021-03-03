'use strict';

const { Sequelize } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('followers', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      follower_user_id: {
        type: Sequelize.INTEGER,
        references: {model: 'users', key: 'id'},
        onUpdate: 'CASCADE',
        allowNull: false,
      },
      user_id: {
        type: Sequelize.INTEGER,
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
    return queryInterface.dropTable('followers')
  }
};
