'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addColumn('users', 'firstName', {
      type: Sequelize.STRING
    })
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.removeColumn('users', 'firstName', {
      type: Sequelize.STRING
    })
  }
}
