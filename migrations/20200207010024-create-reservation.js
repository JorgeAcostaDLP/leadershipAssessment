'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Answers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      password: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      q1: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      q2: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      q3: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      q4: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      q5: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      q6: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      q7: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      q8: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      q9: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      q10: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Answers');
  },
};
