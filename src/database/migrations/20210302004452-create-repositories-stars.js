'use strict';

const { Sequelize } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('repositoriesStars', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {model: 'users', key: 'id'},
        onUpdate: 'CASCADE',
        allowNull: false,
      },
      repository_id: {
        type: Sequelize.INTEGER,
        references: {model: 'repositories', key: 'id'},
        onUpdate: 'CASCADE',
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
    return queryInterface.dropTable('repositoriesStars')
  }
};
