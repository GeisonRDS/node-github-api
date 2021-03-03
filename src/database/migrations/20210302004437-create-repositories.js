'use strict';

const { Sequelize } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('repositories', {
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
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      public: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      slug: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
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
    return queryInterface.dropTable('repositories')
  }
};
