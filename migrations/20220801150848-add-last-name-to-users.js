'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addColumn('users', 'lastName', {
      type: Sequelize.STRING
    })
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.removeColumn('users', 'lastName', {
      type: Sequelize.STRING
    })
  }
}
